//这是一个 VuePress 必要的配置文件
//如果需要深入了解这个配置文件，需要了解下YAML或TOML
const nav = require('./nav.js')

module.exports = {
  // title: 'Hello VuePress',
  // description: 'Just for fun',
  themeConfig: {
    nav: nav,
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    'vuepress-plugin-auto-sidebar': {
      nav: true,
    },
  },
}
