/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-09 11:40:23
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-09 15:16:13
 */
// Fiber 
// 
// React的核心流程：
// reconciliation （调度算法，也可称为render)
// 更新state和props
// 调用生命周期钩子
// 生成virtual dom
// 通过新旧vdom进行diff算法，获取vdom change;
// 确定是否需要重新渲染

// commit
// 如需要，则操作dom节点更新

// 问题： 随着应用变得越来越庞大，整个更新渲染的过程变得吃力，大量的组件渲染会导致主进程
// 长时间被占用，导致一些动画或高频操作出现卡顿和掉帧的情况，关键点在于同步阻塞。

// 解决方案：解决同步阻塞的方法，通常有两种：异步与任务分割

// 简述： 具有链表和指针的单链表树遍历算法 

class Fiber {
    constructor (instance) {
        this.instance = instance;
        // 指向第一个child节点
        this.child = child
        // 指向父节点
        this.return = parent
        // 指向第一个兄弟节点
        this.sibling = previous
    }
}

// 链表树遍历算法： 通过节点保存于映射，便能够随时进行停止和重启
// 1、首先通过不断遍历子节点，到树末尾
// 2、开始通过sibling遍历兄弟节点
// 3、return 回父节点，继续执行2
// 4、知道root节点后，跳出遍历


// 任务分割

// reconcilication阶段： vdom的数据对比
// Commit阶段：将change list 更新到dom上

// 分散执行：任务分割后，就可以把小任务单元分撒到浏览器的空闲期间去排队执行

// 低优先级的任务交给   requestIdleCallback处理

// 高优先级的任务交给  requestAnimationFrame处理

requestIdleCallback = deadline => {
    // 当有空闲时间时，执行一个组件渲染
    // 把任务塞到一个个碎片时间去
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && nextComponent) {
        nextComponent = performWork(nextComponent)
    }
}

// 优先级策略：文本框输入 > 本次调度结束需完成的任务 > 动画过渡 > 交互反馈 > 数据更新 > 不会显示但以防将来会显示的任务




