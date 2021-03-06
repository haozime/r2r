import childProcess from 'child_process'
import { getLanIp } from './getIp'
import logger from 'node-lancer/logger'
import color from 'node-lancer/color'

export function runBash (bash, options = {}) {
  return new Promise((resolve, reject) => {
    const p = childProcess.exec(bash, options, (error) => {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
    p.stderr.pipe(process.stderr)
    p.stdout.pipe(process.stdout)
  })
}
/**
 * @params deplay 秒
 * @return Promise
 */
export function sleep (delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay * 1000)
  })
}

/**
 * 把 callback 变成 Promise 要求 callback 的第一个形参为 error
 */
export function promisify (fn, receiver) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.apply(receiver, [...args, (err, res) => {
        return err ? reject(err) : resolve(res)
      }])
    })
  }
}
/**
 * path 为绝对路径
 */
export function motoRequire (path) {
  try {
    const obj = require(path)
    return obj && obj.__esModule && obj.default ? obj.default : obj
  } catch (e) {
    console.log(e)
    return null
  }
}

/**
 * 遵从 规范，使用promise 的 import
 */
export function motoImport (path) {
  return new Promise((resolve, reject) => {
    const mod = motoRequire(path)
    if (!mod) {
      reject()
      return
    }
    resolve(mod)
  })
}

export function toHead (s) {
  return s.toLowerCase().replace(/\b-?([a-z])/g, ($0, $1) => $1.toUpperCase())
}

export { logger, color, getLanIp }
