<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2022-02-17 18:39:00
 * @LastEditors: ZJ
 * @LastEditTime: 2022-02-17 18:58:53
-->
redux-saga的设计思想

归根结底还是订阅发布者模式，只是订阅的模式是通过generator深度自动执行实现的，redux-saga实现了一个自动执行generator的函数。

主要原理是利用promise是否被resolve或者reject

dva主要设计思想是开箱即用，内置了路由react-router-redux和状态管理redux-saga 
开发者并不需要了解redux-saga复杂的使用方式，又能够很好地进行状态管理

