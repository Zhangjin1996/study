/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2022-02-24 19:12:15
 * @LastEditors: ZJ
 * @LastEditTime: 2022-02-24 19:13:29
 */
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

1
4
7
3
6
2