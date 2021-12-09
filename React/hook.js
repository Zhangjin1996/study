/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-10-20 10:51:26
 * @LastEditors: ZJ
 * @LastEditTime: 2021-10-20 11:17:08
 */
// 组件render会调用useState，大体逻辑是
function useState(initialState) {
    let hook;
    if (isMount) {
        // ...mount时需要生成Hook对象
    } else {
        // ...update时从workInProgressHook中取出该useState对应的Hook
    }

    let baseState = hook.memoizedState;
    if (hook.queue.pending) {
        // ...根据queue.pending中保存的update更新state
    }
    hook.memoizedState = baseState;
    return [baseState, dispatchAction.bind(null, hook.queue)];
}

// 获取hook对象
if (isMount) {
    // mount时为该useState生成hook
    hook = {
        queue: {
            pending: null
        },
        memoizedState: initialState,
        next: null
    }
    // 将hook插入fiber,memoizedState链表末尾
    if (!fiber.memoizedState) {
        fiber.memoizedState = hook;
    } else {
        workInProgressHook.next = hook;
    }
    // 移动workInProgressHook指针
    workInProgressHook = hook;
} else {
    // update时找到对应的hook
    hook = workInProgressHook;
    // 移动workInProgressHook指针
    workInProgressHook = workInProgressHook.next;
}

let baseState = hook.memoizedState;
if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
        const action = firstUpdate.action;
        baseState = action(baseState);
        firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next)
    
    hook.memoizedState = baseState;

    return [baseState, dispatchAction.bind(null, hook.queue)];
}