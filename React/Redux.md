<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-09 16:49:17
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-09 18:43:32
-->
Redux是一个数据管理中心   可以理解为一个全局的data store实例

与React无关，可以独立运行于任何javascript环境中

核心理念：
单一数据源
状态只读 为了保证状态的可控性，最好的方式就是监控状态的变化
Redux Store 中的数据无法被直接修改

理念实现：
Store：全局Store单例，每个Redux应用下只有一个store  
getState  获取state
dispatch  触发action，更新state
subscribe 订阅数据变更，注册监听器

const store = createStore(Reducer, initStore)

Action: 作为一个行为载体，用于映射相应的Reducer，并且它可以称为数据的载体，将数据从应用传递至store中，是store中唯一的数据源。

Reducer: 用于描述如何修改数据的纯函数，Action属于行为名称而Reducer便是修改行为的实质：


