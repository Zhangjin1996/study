<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-11-09 15:46:24
 * @LastEditors: ZJ
 * @LastEditTime: 2022-03-03 18:51:10
-->
/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-11-09 15:46:24
 * @LastEditors: ZJ
 * @LastEditTime: 2022-02-18 18:10:51
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



setTimeout(() => {
    console.log('定时器开始啦')
})

new Promise(resolve => {
    console.log('马上执行for循环了')
    for (let i = 0; i < 10000; i++) {
        i == 99 && resolve();
    }
}).then(() => {
    console.log('执行then函数啦')
})

console.log('代码执行结束')

#### 导图要表达的内容用文字来表述的话：

   同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。
   当指定的事情完成时，Event Table会将这个函数移入Event Queue。
   主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
   上述过程会不断重复，也就是常说的Event Loop(事件循环)。

   怎么判断主线程执行栈是否为空？
   js引擎有一个monitoring process 进程，会不断的去检查主线程是否为空？

   console.log('1')

   setTimeout(

        new Promise(resolve => {
            console.log('Promise')
            resolve()
        })
        .then(function() {
            console.log('promise1')
        })
   )


console.log(1)

setTimeout(function() {
    console.log(2)
})
process.nextTick(function() {
    console.log(3) 
})

new Promise(function(resolve) {
    console.log(4)
}).then(function() {
    console.log(5)
})

process.nextTick(function() {
    console.log(6) 
})

new Promise(function(resolve) {
    console.log(7)
}).then(function() {
    console.log(8)
})

上面的代码涉及了setTimeout process.nextTick promise.then的执行顺序

现在就此来分析下题目的原理和相关知识点：

process.nextTick是什么？

为了协调异步任务，Node提供了四个定时器，让任务可以在指定的时间运行：

setTimeout()
setInterval()
setImmediate()
process.nextTick()
node核心

单线程
非阻塞I/O
事件驱动
上面的题目主要考察的是node事件循环Event Loop:

所有任务都在主线程上执行，形成一个执行栈
在主线程之外还存在一个任务队列，系统把异步任务放在任务队列中，然后主进程继续执行后续的任务
一旦执行栈中所有的任务执行完毕，系统就会读取任务队列，如果这时异步队列一结束等待状态，就会从任务队列进入执行栈，恢复执行
主线程不断重复上面的第三步
所以上面的题目首先会执行同步任务，输出1 4 7，当主线程任务执行完毕后，再从Event Loop中读取任务。

Event Loop读取任务的先后顺序，取决于任务队列中对于不同任务读取规则的限定。

任务队列是分为两种类型的：

宏任务   指得是Event Loop在每个阶段执行的任务

微任务   指的是Event Loop在每个阶段之间执行的任务

执行顺序为，首先执行宏任务队列开头的任务，执行完毕后，在执行微任务队列里的所有任务，接着再执行宏任务中的第二个任务，依次循环。

现在以node v8引擎为例：

宏任务队列真是包含任务：

script(主线程代码), setTimeout, setInterval, setImmediate, I/O, UI rendering
微任务队列真是包含任务：

process.nextTick  Promises  Object.observe  MutationObserver
所以我们得到的执行顺序应该为：

script（主程序代码)-> process.nextTick -> Promises,,, -> setTimeout -> setInterval -> 
setImmediate -> I/O -> UI rendering
Node端事件循环中的异步队列也是这两种：

macro 宏任务   micro  微任务

常见的宏任务：setTimeout  setTinterval  setImmediate script(整体代码）I/0操作

常见的微任务： process.nextTick new Promise().then() 回调

说说process.nextTick是独立于Event Loop之外的，他有一个自己的队列，当每个阶段完成后

如果存在nextTick队列，就会清空队列中的所有回调函数，并且优先于其他microtask执行。

Node与浏览器的Event Loop差异

浏览器环境下,微任务的任务队列是每个宏任务执行完后执行

但是在Node.js中，微任务会在事件循环的各个阶段之间执行

也就是一个阶段执行完毕，就会去执行mocrotask队列的任务



