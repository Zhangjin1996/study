/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-08-23 16:00:49
 * @LastEditors: ZJ
 * @LastEditTime: 2022-03-01 15:12:35
 */
// class实现继承
class Animal {
    constructor(name) {
        this.name = name
    }
    getName () {
        return this.name
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

// 数组去重
// es5实现
function unique (arr) {
    var res = arr.filter(function(item, index, array) {
        return array.indexOf(item) === index
    })
    return res
}

es6实现
var uniqArr = arr => [...new Set(arr)]

