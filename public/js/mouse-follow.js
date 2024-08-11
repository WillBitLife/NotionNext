/* eslint-disable */

/**
 * 创建鼠标特效 (已移除特效逻辑)
 * @param options
 */
function createMouseCanvas() {
  // 创建一个类
  const _createClass = (function () {
    function n(t, e) {
      for (let i = 0; i < e.length; i++) {
        const n = e[i]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n)
      }
    }
    return function (t, e, i) {
      return e && n(t.prototype, e), i && n(t, i), t
    }
  })()

  // 抛出一个类型错误（TypeError），指出类（或构造函数）不能被直接调用为函数，而应该使用 new 关键字来创建实例。
  function _classCallCheck(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function')
  }

  // 模拟 jquery 中的 extend 函数
  function deepExtend(out) {
    out = out || {}
    for (let i = 1; i < arguments.length; i++) {
      const obj = arguments[i]
      if (!obj) continue
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (
            typeof obj[key] === 'object' &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
          ) {
            // 如果属性值是对象但不是数组，递归合并
            out[key] = deepExtend(out[key], obj[key])
          } else {
            // 直接覆盖属性值
            out[key] = obj[key]
          }
        }
      }
    }
    return out
  }

  const e =
    (_createClass(t, [
      {
        key: 'init',
        value: function (t) {
          // 浏览器兼容性调整
          !(function () {
            for (
              var a = 0, t = ['webkit', 'moz'], e = 0;
              e < t.length && !window.requestAnimationFrame;
              ++e
            )
              (window.requestAnimationFrame =
                window[t[e] + 'RequestAnimationFrame']),
                (window.cancelAnimationFrame =
                  window[t[e] + 'CancelAnimationFrame'] ||
                  window[t[e] + 'CancelRequestAnimationFrame'])
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (t, e) {
                const i = new Date().getTime()
                const n = Math.max(0, 16.7 - (i - a))
                const o = window.setTimeout(function () {
                  t(i + n)
                }, n)
                return (a = i + n), o
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (t) {
                  clearTimeout(t)
                })
          })()

          // t 是要合并的对象
          if (t) {
            this.defaults = deepExtend(this.defaults, t)
          }
        }
      }
    ]),
    t)

  // 赋值 给一个默认值
  function t() {
    _classCallCheck(this, t),
      (this.defaults = { type: 1, color: !1 }),
      (this.version = '0.0.1')
  }

  return function drawGoodCanvas(options) {
    new e().init(options)
  }
}
window.createMouseCanvas = createMouseCanvas