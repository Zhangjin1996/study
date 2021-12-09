/*
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-04-26 17:14:29
 * @LastEditors: ZJ
 * @LastEditTime: 2021-04-26 17:46:38
 */
// 使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据，这样用户就可以用自己的数据类型来使用组件
// 我们给identity添加了类型变量T，T帮助我们捕获用户传入的类型，之后我们就可以使用这个类型，之后可以再次使用T当做
// 返回值类型。

// 使用泛型变量
//假设需要操作T类型的数组而不是直接是T，

// function loggingIdentity<T>(arg: T[]) : T[] {
//     return arg;
// }



// 泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

// 泛型类型
let myIdentity: GenericIdentityFn = identity;

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y };

// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
