<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-09-09 16:26:45
 * @LastEditors: ZJ
 * @LastEditTime: 2021-09-09 16:31:27
-->
### 表单数据双向绑定

表单数据更新大致流程：

1、用户输入或者选择表单组件的行为都会触发getFieldDecorator(HOC)高阶组件，进而调用getFieldProps
组装组件props，这个方法中如果表单组件中配置了validateRules以及validateTriggers的话，就调用onCellectValidate
方法收集校验规则，然后就是设置表单组件的最新的值到fieldsStore中，并调用this.forceUpdate()更新UI视图

2、如果没有配置validateRules以及validateTriggers等规则，那就使用onClick方法收集最新的数据并更新到fieldsStore中，
不对表单进行单独验证。