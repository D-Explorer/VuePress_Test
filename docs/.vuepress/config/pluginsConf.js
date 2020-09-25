const moment = require('moment')
module.exports = {
  //自动更新时间格式
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      moment.locale('zh-cn')
      return moment(timestamp).format('LLLL')
    },
  },

  //自动生成侧边栏和导航栏
  'vuepress-plugin-auto-sidebar': {},
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'D-Explorer',
    repo: 'VuePress_Test',
    clientId: '23fe22d34973774d52fa',
    clientSecret: 'b7b185b3cc2b84cd29b0952e680c6d3248ed2a67',
    autoCreatIssue: true,
  },
}
