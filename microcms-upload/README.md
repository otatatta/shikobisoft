# microCMS 画像一括アップロード

## セットアップ

```bash
cp .env.example .env
# .env を編集して API キーとサービスIDを入力
```

Node.js 18以上が必要です（外部パッケージ不要）。

## 使い方

### パターンA: zipファイルを直接渡す
```bash
node --env-file=.env upload.mjs ./HP用CG.zip
```

### パターンB: input/ に画像を入れて実行
```bash
# input/ フォルダに画像をコピー
node --env-file=.env upload.mjs
# または
npm run upload
```

## 出力

- アップロード済みURLを `upload_result_{タイムスタンプ}.tsv` に保存
- Vercel preview で確認後、microCMS 管理画面でコンテンツに紐付け

## ファイル命名規則（入稿者向け）

| 形式 | 例 |
|---|---|
| `scene{番号}{バリアント}.png` | `scene18a.png`, `scene18b.png` |

対応形式: `.png` `.jpg` `.jpeg` `.webp` `.gif`
推奨解像度: 1280×720
