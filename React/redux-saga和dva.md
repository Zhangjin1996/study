<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2022-02-20 16:36:27
 * @LastEditors: ZJ
 * @LastEditTime: 2022-02-20 17:33:22
-->
## 架构设计
从宏观层面分为数据层、路由层、UI层
dva开箱即用方式：将数据层、路由层和UI层解耦

```js
   const app = dva()
   app.model(...) // 添加数据模型
   app.router(...) // 添加路由
   app.start('#root') // 挂载容器和启动
```

数据模型处理原理

dva内部：
effect构造后的saga监听的action.type和effect函数名称是一致的

构造reducer:
遍历models数组，根据model的namespace属性值，给全局reducers添加属性值
为namespace的reducer

reducers[model.namespace]= ...

reducer会根据当前model.reducers进行构造，主要用到的时候handlerAction函数


handlerAction:将函数名称作为action的type类型，函数体作为该type类型的执行逻辑
构造后返回reducer

dva内部已经把redux react-redux集成，引入dva后，就可以直接使用了

umi设计思想和dva的关系



