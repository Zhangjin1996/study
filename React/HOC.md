<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-09 16:36:52
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-09 16:53:39
-->
高阶组件 
HOC 是在React机制下社区形成的一种组件模式，

简述：
高阶组件不是组件，是增强函数，可以输入一个元组件，返回出一个新的增强组件。
高阶组件的主要作用是代码复用

用法：
属性代理Props Proxy  返回出一个组件，它基于被包裹组件进行功能增强

function proxyHoc (Comp) {
    return class extends React.Component {
        render () {
            const newProps = {
                name: 'taydd',
                age: 1,
            }
            return <Comp {...this.props} {...newProps} />
        }
    }
}

权限控制  性能监控  代码复用

