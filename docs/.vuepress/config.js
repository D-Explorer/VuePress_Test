//这是一个 VuePress 必要的配置文件
//如果需要深入了解这个配置文件，需要了解下YAML或TOML
const pluginsConf = require('./config/pluginsConf')
const themeConf = require('./config/themeConf')

module.exports = {
  themeConfig: themeConf,
  plugins: pluginsConf,
}
