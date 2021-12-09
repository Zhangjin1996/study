<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-12-09 18:45:35
 * @LastEditors: ZJ
 * @LastEditTime: 2021-12-09 18:52:55
-->
react subscribe
痛点：
首屏渲染性能瓶颈
空白延迟： HTML下载时间 + JS下载、执行时间 + 请求时间 + 渲染时间，这段时间，页面处于空白状态

SEO问题

由于页面初始状态为空，因此爬虫无法获取页面中任何有效数据

原理：
Node服务：让前后端运行同一套代码成为可能
Virtual Dom: 让前端代码脱离浏览器运行

