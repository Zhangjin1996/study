<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-23 18:26:29
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-24 18:13:00
-->
## instanceof 原理，模拟实现
什么是instanceof?你可以模拟实现一个instanceof吗？
1、instanceof 判断对象的原型链上是否存在构造函数的原型，只能判断引用类型。

2、instanceof 常用来判断A是否为B的实例

```js
    A instanceof B
```
3、模拟实现 instanceof

思想： 沿原型链往上查找
```js
    function instance_of(Case, Constructor) {
        if (typeof(Case) !== 'object' && typeof(Case) !== 'function' || Case == 'null')
        return false;
        let CaseProto = Object.getPrototypeOf(Case);
        while (true) {
            // 查到原型链顶端，仍未查到，返回false
            if (CaseProto == null) return false;
            // 找到相同的原型
            if (CaseProto === Constructor.prototype) 
            return true;
            CaseProto = Object.getPrototypeOf(CaseProto);
        }
    }
```

## 判断是否是数组
1、es6 提供的新方法  Array.isArray()
2、如果不存在Array.isArray()  可以借助Object.prototype.toString().call() 进行判断

```js
    // 如果为true 则arr为数组
    arr instanceof Array  
```
### 使用场景上
1、null
作为函数的参数，表示该函数的参数不是对象
作为对象原型链的终点

2、undefined
变量声明未赋值，等于undefined
调用函数时，未提供参数值，该参数等于undefined
对象没有赋值属性，该属性的值为undefined
函数没有返回值时，默认返回undefined



