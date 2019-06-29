/**
 * dotenvの情報を読み込み、client側でdotenv("process.env.~")を使えるようにする
 * 参考URL
 *  https://tyankatsu.hatenablog.com/entry/2018/10/31/234930
 */

// 設定情報の取得
let originEnv = require('dotenv').config()
originEnv = originEnv.parsed

function middleware(value) {
  if (value === 'true') return true
  if (value === 'false') return false
  if (value === '0' || value === 0) return 0
  return value || null
}

exports.getEnvs = () => {
  let env = {}
  for (let key in originEnv) {
    if (originEnv[key]) {
      console.log({
        originEnv: origin,
        key: key
      })
      env['process.env.' + key] = JSON.stringify(middleware(originEnv[key]))
    }
  }
  return env
}
