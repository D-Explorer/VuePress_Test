//这是一个 VuePress 必要的配置文件
//如果需要深入了解这个配置文件，需要了解下YAML或TOML
const nav = require('./nav.js')
const moment = require('moment')
module.exports = {
  // title: 'Hello VuePress',
  // description: 'Just for fun',
  themeConfig: {
    lastUpdated: '更新时间',
    nav: nav,
  },
  markdown: {
    lineNumbers: true,
  },

  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale('zh-cn')
          return moment(timestamp).format('LLLL')
        },
      },
    ],

    [
      'vuepress-plugin-auto-sidebar',
      {
        nav: true,
      },
    ],
  ],
}
