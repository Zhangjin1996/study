/*
 * @Descripttion: 实现debounce
 * @Author: ZJ
 * @Date: 2021-10-09 11:42:21
 * @LastEditors: ZJ
 * @LastEditTime: 2021-11-09 15:46:11
 */

let debounce = (func, wait) => {
    let lastCallTime // 最后一次触发事件的时间
    let lastThis // 作用域
    let lastArgs // 参数
    let timerId // 定时器对象
    wait = +wait || 0
    // 启动定时器
    function startTimer (timerExpired, wait) {
        return setTimeout(timerExpired, wait)
    }
    // func函数执行
    function invokeFunc () {
        timerId = undefined
        const args = lastArgs
        const thisArg = lastThis
        let result = func.apply(thisArg, args)
        lastArgs = lastThis = undefined
        return result
    }
    // 调用func函数的判定条件
    function shouldInvoke () {
        // 判断每次事件触发的时间差，如果大于阀值，真正的func就会执行
        return lastCallTime !== undefined && (time - lastCallTime >= wait)
    }
    // 定时器的回调函数
    // 主要判断是否执行func
    function timerExpired () {
        const time = Date.now()
        if (shouldInvoke(time)) {
            return invokeFunc()
        }
        timerId = startTimer(timerExpired, wait)
    }
    // 要返回的函数
    /**
     * 
     * 确定作用域和参数
     * 更新触发事件的时间，也就是lastCallTime
     * 启动定时器timerId
     */
    const time = Date.now()
    lastThis = this
    lastArgs = args
    lastCallTime = timer
    timerId = startTimer(timerExpired, wait)
    return debounce;
}

// 节流实现，有两种方式，时间戳方式和定时器方式
function throttle(func, delay) {
    // 首先获取使用节流机制时的时间
    var prev = Date.now();
    return function () {
        // 再获取调用时的时间
        var now = Date.now();
        var context = this;
        var args = arguments;
        // 若两个时间差超过了设置的时间，调用函数
        if (now - prev >= delay) {
            func.apply(context, args);
        }
        prev = Date.now;
    }
}
// 解析url中的query参数
var url = 'http://www.baidu.com?username=limei&age=18';
var obj = url.substr(url.indexOf("?") + 1).split('&').reduce((function(pre, cur) {
    var key = cur.split('=')[0]
    var val = cur.split('=')[1]
    pre[key] = val;
    return pre;
}, {})

// 前端柯里化的实现，通过把一个多参函数转换为一系列嵌套的函数，每个函数依次接受一个参数，这就是函数柯里化

// multiply(a, b, c) => {
//     return a * b * c;
// }
// multiply(1,2,3) // 6


// // 柯里化后
// multiply (a) => {
//     return b => {
//         return c => {
//             return a * b * c
//         }
//     }
// }
// multiply(1)(2)(3) // 6

// js是单线程语言：顺序执行
// 任务队列

let data = [];
$.ajax({
    url: 'www',
    data: data,
    succcess: () => {
        console.log('发送成功')
    }
})
console.log('代码执行结束')

// setTimeout
setTimeout(() => {
    TextTrackList()
}, 3000)
sleep (10000) // sleep为一个同步任务，10000位执行时间

Promise
// promise新建后就会立即执行

// 宏任务和微任务
// 宏任务：script,setTimeout, setInterval
// 微任务：Promise

// 注明：在事件循环中，永远先执行可执行的微任务

// 例子

// 先说基本知识点，宏任务、微任务有哪些
// 说事件循环机制过程，边说边画图出来
// 说async/await执行顺序注意，可以把 chrome 的优化，做法其实是违法了规范的，V8 团队的PR这些自信点说出来，显得你很好学，理解得很详细，很透彻。
// 把node的事件循环也说一下，重复1、2、3点，node中的第3点要说的是node11前后的事件循环变动点。

// 一个线程中，事件循环是唯一的，但是任务队列可以拥有多个，任务队列又分为macro-task宏任务与micri-task微任务

// 宏任务： script、setTimeout、setInterval、I/O、UI render
// 微任务：process.nextTick Promise Async/Await 








