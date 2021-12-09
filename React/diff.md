<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-10-20 11:20:14
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-09 11:40:26
-->
/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-10-20 11:20:14
 * @LastEditors: ZJ
 * @LastEditTime: 2021-11-01 17:28:33
 */
### react diff算法
## react源码运行过程中和react中的scheduler、reconciler、renderer、fiber等
## react心智模型
useEffect(() => {
    if (count === 0) {
        const randomNum = Math.random() * 100;
        const row = performance.now();
        while (performance.now() - now < 100)  {
            console.log('blocking...');
        }
        setCount(randomNum);
    }
}, [count]);

## scheduler 调度器： 排序优先级，让优先级高的任务先进行reconcile
## reconciler 协调器：找出哪些节点发生了改变，并打上不同的Tag
## renderer 渲染器：将Reconciler中打好标签的节点渲染到视图上

## 如果低优先级task被打断也只是发生在内存中不影响真实节点
## 根据update计算state diff算法，给Fiber打上Tag react-dom react-art 操作dom

在mount时，会根据jsx对象(Class Component或render函数者Function Component的返回值)，构建Fiber对象
形成Fiber树，然后这课Fiber树会作为current Fiber应用到真实dom上，在update（状态更新到setState）的时候，会根据
状态变更后的jsx对象和current Fiber做迪比形成新的workInProgress Fiber切换成current Fiber应用到真实dom就达到了更新的目的，从而减少了对dom性能的操作。

