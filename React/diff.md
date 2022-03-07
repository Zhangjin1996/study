<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-10-20 11:20:14
 * @LastEditors: ZJ
 * @LastEditTime: 2022-01-04 18:48:24
-->
/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-10-20 11:20:14
 * @LastEditors: ZJ
 * @LastEditTime: 2021-11-01 17:28:33
 */

Fiber是一个抽象的节点对象，每个对象可能有子Fiber和父Fiber，React使用链表的形式将所有Fiber节点连接，形成链表树。

reconcileChildren(...)

1、workInProgress  父级fiber
2、current.child 处于比较中的旧内容对应fiber
3、nextChildren 即处于比较中的新内容，为React元素，其类型为对象

```js
   function placeSingleChild(newFiber) {
       if (shouldTrackSideEffects && newFiber.alternate === null) {
           newFiber.effectTag = Placement;
       }
       return newFiber
   }
```
##### 上述函数的作用很简单，给differ后的Fiber添加副作用标签，Placement替换，表明在之后需要将旧Fiber对应的DOM元素进行替换.

##### 当新旧内容的元素内容相同，React会复用旧内容fiber，结合新内容属性，生成一个新的fiber 同时将新的fiber设置为父fiber的child


placeSingleChild(reconcileSingleElement(...))

reconcileSingleElement(...)

新旧内容的元素类型是否相同

1、如果相同的话  deleteRemainingChildren(...): 删除旧内容fiber的所有相邻fiber   useFiber 结合旧内容fiber结合新内容属性
生成新的fiber

2、如果不相同的话 deleteRemainingChildren(...): 删除旧内容fiber及其所有相邻fiber  createFiberFromElement 基于新内容创建新的fiber

然后placeSingleChild(...) 给新的fiber设置副作用标签'替换', 用来之后替换旧内容fiber对应DOM

父fiber将新的fiber设置为child

```js
   var new Fiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], expirationTime);

   function updateSlot(returnFiber, oldFiber, newChild, expirationTime) {
       var key = oldFiber !== null ? oldFiber.key : null;
       if (typeof newFiber === 'string' || typeof newChild === 'number') {

       }
       if (typeof newChild === 'object' && newChild !== null) {
           return updateElement(returnFiber, oldFiber, newChild, expirationTime)
       }
   }

   function updateElement(returnFiber, oldFiber, newChild, expirationTime) {
       if (current !== null) {
           if (current.elementType === element.type) {
               var existing = useFiber(current, element.props);
               existing.ref = coerceRef(returnFiber, current, element);
               existing.return = returnFiber;

               return existing;
           } else if (current.tag === Block && element.type.$$typeof === REACT_BLOCK_TYPE) {    
           }
       }
       var created = createFiberFromElement(element, returnFiber.mode, expirationTime);
       created.ref = coerceRef(returnFiber, current, element);
       created.return = returnFiber;
       return created;
   }
```

updateElement与reconcileSingleElement核心逻辑是一致的

1、若新旧内容元素类型一致，则克隆旧fiber,结合新内容生成新的fiber
2、若不一致，则基于新内容创建新的fiber

若新内容数组长度更长

react将遍历多余的新内容数组元素，基于新内容数组元素创建的新的fiber，并添加副作用标签Placement（替换）

reconcleChildrenArray(...)

for循环遍历新内容数组

updateSlot(...)  新child的类型  对象  updateElement(...) 更新React元素，与reconcleSingleElement(...)核心逻辑一致

字符串或数字   updateTextNode(...) 更新文本，与reconcileSingleTextNode(...) 核心逻辑一致

遍历完成后，若旧内容fiber及其相邻fiber的总个数大于等于新内容数组长度

是   deleteRemainingChildren 删除多余内容相邻fiber   给这些fiber添加副作用标签  Deletelon(删除)

否   遍历多余新内容数组元素   createChild 基于新内容数组元素创建新的fiber   
placeChild 给新fiber添加副作用标签：Placement(替换)

父fiber将新的fiber设置为child





