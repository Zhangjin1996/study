/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-04-28 16:56:03
 * @LastEditors: ZJ
 * @LastEditTime: 2021-04-28 17:12:03
 */
'use strict'
import test from 'ava'

function add (a, b) {
    return a + b
}

// 第一种写法
test('simple test', t => {
    let c = add(1,2)
    t.is(c, 3)
});

// 第二种写法
test(t => {
    return somePromise().then(res => {
        t.is(res, 'unicorn');
    })
})

// 第三种支持async函数
test(async t => {
    const value = await promiseFn();
    t.true(value);
})

// 第四种支持es6的generator
test(function * (t) {
    const value = yield generatorFn();
    t.true(value);
})




