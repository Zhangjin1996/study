<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-09 15:34:26
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-09 15:59:02
-->
setState: React中用于修改状态，更新视图

特点：
异步与同步： setState并不是单纯的异步或同步，与调用时的环境相关

在合成事件和生命周期钩子除了componentDidUpdate中，setState是异步的

原因： 因为在setState的实现中，有一个判断： 当更新策略正在事务流的执行中时，该组件更新会被推入dirtyComponents队列
中等待执行；否则，开始执行batchedUpdates队列更新

问题： 无法在setState后马上从this.state上获取更新后的值
解决：如果需要马上同步去获取新值，setState其实是可以传入第二个参数的
setState(updater, callback) 在回调中即可获取最新值

在原生事件和setTimeout中,setState是同步的，可以马上获取更新后的值；
原因： 原生事件是浏览器本身的实现，与事务流无关，自然是同步，而setTimeout是放置于定时器线程中延后执行，此时事件流一结束，因此也是同步。