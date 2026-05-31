/**
 * microCMS 画像一括アップロードスクリプト
 * 使い方:
 *   1. .env に MICROCMS_API_KEY と MICROCMS_SERVICE_ID を設定
 *   2. input/ フォルダに画像を入れる（またはzipを指定）
 *   3. node upload.mjs
 *      node upload.mjs ./path/to/images.zip  （zip直接指定）
 */

import { readFileSync, readdirSync, existsSync, mkdirSync, rmSync } from 'fs'
import { extname, basename, join } from 'path'
import { createReadStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { execSync } from 'child_process'

// --- 設定 ---
const API_KEY = process.env.MICROCMS_API_KEY
const SERVICE_ID = process.env.MICROCMS_SERVICE_ID
const INPUT_DIR = './input'
const SUPPORTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif']

// --- バリデーション ---
if (!API_KEY || !SERVICE_ID) {
  console.error('❌ .env に MICROCMS_API_KEY と MICROCMS_SERVICE_ID を設定してください')
  process.exit(1)
}

// --- zip展開 ---
const zipArg = process.argv[2]
if (zipArg && zipArg.endsWith('.zip')) {
  if (!existsSync(INPUT_DIR)) mkdirSync(INPUT_DIR)
  console.log(`📦 zip展開中: ${zipArg}`)
  execSync(`unzip -o "${zipArg}" -d "${INPUT_DIR}"`)
  console.log('✅ 展開完了\n')
}

// --- ファイル一覧取得 ---
if (!existsSync(INPUT_DIR)) {
  console.error(`❌ input/ フォルダが見つかりません。フォルダを作成して画像を入れてください。`)
  process.exit(1)
}

const files = readdirSync(INPUT_DIR).filter(f =>
  SUPPORTED_EXTENSIONS.includes(extname(f).toLowerCase())
)

if (files.length === 0) {
  console.error('❌ input/ に対応画像が見つかりません (.png .jpg .jpeg .webp .gif)')
  process.exit(1)
}

console.log(`📁 ${files.length}件の画像をアップロードします\n`)

// --- アップロード ---
const results = []
let successCount = 0
let failCount = 0

for (const file of files) {
  const filePath = join(INPUT_DIR, file)
  const fileBuffer = readFileSync(filePath)
  const blob = new Blob([fileBuffer])

  const formData = new FormData()
  formData.append('file', blob, file)

  try {
    const res = await fetch(
      `https://upload.microcms.io/api/v1/${SERVICE_ID}/media`,
      {
        method: 'POST',
        headers: { 'X-MICROCMS-API-KEY': API_KEY },
        body: formData,
      }
    )

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`HTTP ${res.status}: ${err}`)
    }

    const json = await res.json()
    console.log(`✅ ${file}`)
    console.log(`   → ${json.url}\n`)
    results.push({ file, url: json.url, status: 'success' })
    successCount++
  } catch (e) {
    console.error(`❌ ${file}: ${e.message}\n`)
    results.push({ file, url: null, status: 'error', error: e.message })
    failCount++
  }
}

// --- サマリー ---
console.log('─'.repeat(40))
console.log(`完了: ${successCount}件成功 / ${failCount}件失敗`)
console.log('─'.repeat(40))

// --- URL一覧をファイル出力 ---
const urlList = results
  .filter(r => r.status === 'success')
  .map(r => `${r.file}\t${r.url}`)
  .join('\n')

if (urlList) {
  const outFile = `upload_result_${Date.now()}.tsv`
  import('fs').then(fs => {
    fs.writeFileSync(outFile, `file\turl\n${urlList}`)
    console.log(`\n📄 URL一覧: ${outFile}`)
  })
}
