<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-11-16 15:51:52
 * @LastEditors: ZJ
 * @LastEditTime: 2021-11-16 18:22:53
-->
vue与React区别

不同点：
react严格上只针对mvc的view层，vue是mvvm模式
虚拟dom不一样，vue会跟踪每一个组件的依赖关系，不需要重新渲染
整个dom组件树，所以react中用shouldcomponentupdate这个生命周期的
钩子函数来控制

组件写法不一致：
react是jsx风格，vue则树html,css,js在同一个文件

数据绑定不一样：
vue实现了数据双向绑定

在react中，state对象需要用setState方法更新，在vue中，state对象不是必须的，数据由data属性在vue对象中管理。

请简述虚拟dom与diff算法

虚拟DOM也就是常说的虚拟节点，它是通过js的object对象虚拟DOM中的节点，频繁的操作DOM,
或大量造成页面的重绘和回流。

Diff算法：把树形结构按照层级分解，只比较同级元素，给列表结构的每个单元添加唯一的key值，方便比较。

调用setState之后发生了什么？

React在调用setState后，react会将传入的参数和组件当前的状态合并，并触发调和过程。
在调和过程中，react会根据新的装填构建react元素树重新渲染整个UI界面，在得到元素树之后，react会
自动计算新老节点的差异，根据差异对界面进行最小化重新渲染。



