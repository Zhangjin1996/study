/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-11-09 15:46:24
 * @LastEditors: ZJ
 * @LastEditTime: 2021-11-09 16:05:03
 */
console.log('script started');
async function async1 () {
    await async2();
    console.log('async1 end')
}
async function async2 () {
    console.log('async2 end')
}
async1() 

setTimeout(function() {
    console.log('setTimeout')
}, 0)

new Promise(resolve => {
    console.log('Promise')
    resolve()
})
.then(function() {
    console.log('promise1')
})
.then(function() {
    console.log('promise2')
})

console.log('script end')

// 分析：
// 执行代码，输出script started，执行async1()，会调用async2()，然后输出async2 end，此时将会保留async1函数的上下文，然后跳出async1()函数
// 遇到setTimeout，产生一个宏任务，执行Promise，输出Promise，遇到then，产生第一份微任务，继续执行代码，输出script extends
// 代码逻辑执行完毕（当前宏任务执行完毕），开始执行当前宏任务产生的微任务队列，输出promise1，该微任务遇到then，产生一个微任务，执行产生的微任务，输出promise2
// 当前微任务队列执行完毕，执行权回到async1，执行完成，执行await后面的语句，输出async1 end最后执行下一个宏任务，执行setTimeout，输出setTimeout。
// 结果是这样的：
// script started
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout
