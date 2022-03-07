<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-14 15:13:19
 * @LastEditors: ZJ
 * @LastEditTime: 2022-02-23 11:17:18
-->
## 写个转换函数，把一个JSON对象的key从下划线更改为驼峰方式

### 正则表达式
```js
function getCamelCase(str) {
    return str.replace(/_([a-z])/g, function(all, i) {
        return i.toLowerCase();
    }))
}
```

### 利用数组方法
```js
  function getKebabCase () {
      let arr = str.split(''); // 转换为数组
      let result = arr.map(item => {
          if (item.toUpperCase() === item){
            return '_' + item.toLowerCase();
          } else {
            return item;
          }
      }).join('');
      return result;
  }
```

### Array.from()

`Array.from` 是  `ES6` 新增的方法，可以将**类数组对象和可遍历**转变为真正的数组

```js
  const arrayLike = {
    0: '1',
    1: '2', 
    length: 2
  }
  console.log(Array.from(arrayLike)) // ['1', '2']
```

### `(...)` 展开运算符

## 判断数据类型的方法
### typeof
优点：可以快速区分基本数据类型，缺点：不能将Object、Array和Null区分，都返回Object


### instanceof
优点：能够区分Array Object和Function，适合用于判断自定义的类实例对象 
缺点： Number Boolean String基本数据类型不能判断

### Object.prototype.toString.call()
优点：精准判断数据类型  缺点： 写法繁琐
```js
toString.call({}) // [object Object]
```

## Js数据类型
1、基本数据类型：共有7种
```js
  Boolean Number String undefined null Bigint Symbol
```
Symbol: Es6引入的一种新的原始值，主要为了解决属性名冲突问题

Bigint: Es2020 新增加，是比Number类型的整数范围更大

2、引用数据类型： 1种
```js
  Object对象  包括普通Object Function Array Date RegExp Math
```

## typeof 与 instanceof的区别

typeof与instanceof都是判断数据类型的方法，区别如下：
1、typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值
2、instanceof 可以准确的判断复杂引用数据类型，但是不能正确判断基础数据类型

3、typeof 虽然可以判断基础数据类型但在引用数据类型中，除了function类型外，其他的也无法判断

一个通用检测数据类型，可以采用Object.prototype.toString  调用该方法，统一返回"[object xxx]"的字符串

## typeof为什么对null错误的显示

这只是js存在的一个悠久的Bug，在JS的最初版本中使用的是32位系统，为了性能考虑使用低位存储变量的类型信息，000开头代表是对象然而null表示为全零，所以将它错误的判断为object


## 说说闭包
1、闭包是在函数创建时，既有函数创建就会生成闭包
2、闭包和其函数在同一上下文中
3、闭包包含该作用域下的所有变量、引用地址
4、定义函数不会创建闭包，只有创建、执行函数同时才会创建闭包


闭包是什么：闭包就是有权访问另一个函数作用域变量的函数
形成闭包的原因：存在上级作用域的引用
作用： 
保护： 保护函数的私有变量不受外部干扰 形成不被销毁的栈内存
保存：将上级作用域的引用保存下来，实现方法或属性的私有化

instanceof的实现原理


new的实现原理

分别介绍一下原型、原型链、作用域和作用域链的含义和使用场景