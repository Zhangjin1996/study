<!--
 * @Descripttion: 
 * @Author: ZJ
 * @Date: 2021-04-27 15:27:32
 * @LastEditors: ZJ
 * @LastEditTime: 2021-04-30 17:03:17
-->

## KOA 
## 入口文件bin/www ##

const server = http.createServer(app.callback());
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

## 核心文件app.js ##
app.js是Koa的核心文件，主要包含4个部分
+ 中间件
+ 路由
+ 静态服务器
+ 视图

```
    const Koa = require('koa');
    const app = new Koa();
    const views = require('koa-views');
    const json = require('koa-json');
    const onerrror = require('koa-onerror');
    const bodyParser = require('koa-bodyParser');
    const logger = require('koa-logger');
    
    const index = require('./routes/index');
    const users = require('./routes/users');

    // 错误处理
    onerror(app);

    // 中间件
    app.use(bodyParser);   解析POST类HTTP动词的body内容，加上bodyparser后就可以处理所有请求了
    app.use(json());
    app.use(logger());
    app.use(require('koa-static')(__dirname + '/public'))

    app.use(views(__dirname + '/views', {
        extension: 'pug'
    }))

    // 日志
    app.use(async (ctx, next) => {
        const start = new Date()
        await next()
        const ms = new Date() - start
    })

    // 路由
    app.use(index.routes(), index.allowedMethods())
    app.use(users.routes(), users.allowedMethods())

    module.exports = app;
```

#### 静态服务器位于public目录下

静态服务器主要用于存放静态资源

```
    router.get('/public/*', async (ctx, next) => {
        ctx.url = path.basebane(ctx.url)
        await next()
    }, staticServer(resolve('./public'), { gzip: true }))
```

模板引擎采取了一种复用思想，通过定义模板，在使用时和数据一起编译，生成HTML页面，以便浏览器渲染。

编译（模板 + 数据） = HTML

koa中间件

async函数优先级最高，也最通俗易懂
promise其次   通过promise.race和promise.all等实现并发可以在某种程度上弥补async函数的不足

##### 通用函数
```
    // 通常中间件需要两个参数：ctx和next, ctx指的是请求的上下文，next是指执行下一个中间件的方法
    // 当代码执行完以后，会返回promise
    app.use((ctx, next) => {
        const start = new Date();
        return next().then(() => {
            const ms = new Date() - start;
        })
    })
```

##### async函数
async函数式Koa官方推荐的中间件写法

```
    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
    })
```

##### Generator函数

#### 路由   koa-router 

router/index.js的内容示例：

```
    var router = require('koa-router')();
    router.get('/', async (ctx, next) => {
        await ctx.render('index', {
            title: 'hello world koa',
        })
    })
    module.exports = router;
```

在app.js里进行挂载

```
    const router = require('koa-router');
    const index = require('./routes/index');
    router.use('/', inndex.routes(), index.allowedMethods());
```

router.use的第一个参数/表示基准路径，它会根据路由文件里子路由的路径合成最终的路由。
第二个参数是router对象上挂载的所有中间件，每个中间件其实都是一个子路由

因为koa是一个微内核框架,它自身是不带任何中间件的，包括路由，所以koa的路由有多种实现方式
其中用的最多的是koa-router


## Node.js http模块

##### 中间件
```
    function (req, res, next) {
        res.send('Hello World');
    }
```

相比之下，Koa中间件的写法更高级一点
```
    async function(ctx, next) {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        ctx.set('X-Response-Time', '${ms}ms');
    }
```
要点记录： 
+ koa将req和res都绑定ctx上下文
+ koa中间件可以双向拦截，在一个中间件里同时对req和res进行拦截

###### 多url处理

#### 什么是中间件
中间件是框架的扩展机制，主要用于抽象HTTP请求过程。在单一请求响应过程中加入中间件，可以更好地应对复杂的业务逻辑。

如果把一个HTTP处理过程比作污水处理，那么中间件就像一层层的过滤网。每个中间件在HTTP处理过程中通过改写请求和响应数据、状态，实现了特定的功能。



async函数中间件的用法
```
    const Koa = require('koa');
    const app = new Koa();

    // 日志
    app.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
    });

    // 响应
    app.use(ctx => {
        ctx.body = 'hello koa';
    })

    app.listen(3000);
```

#### 上下文对象

#### 常用中间件

pre-request  通常用来改写请求的原始数据
request-response 大部分中间件都在这里，功能各异
post-response 进行全局异常处理，改写响应数据

