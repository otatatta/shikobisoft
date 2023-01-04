/** @type {import('next').NextConfig} */

const path = require('path')
const withAntdLess = require('next-plugin-antd-less')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'page/styles')],
  },
  future: {
    webpack5: true,
  },
}

module.exports = {
  ...withAntdLess({
    lessVarsFilePath: './styles/antd-variables.less', // optional 
    webpack(config) {
      return config
    }
  }),
  ...nextConfig
}