/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-09-07 14:58:56
 * @LastEditors: ZJ
 * @LastEditTime: 2021-09-07 15:24:13
 */

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2')
    }, 500)
})

Promise.race([p1, p2]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)  // 会输出2
})

getNumber()
.then(data => {
    console.log('resolved')
})
.catch(reason => {
    console.log('rejected')
})




