## node 基础
* __filename  所在文件目录
* __dirname  文件所在文件夹目录
* process 进程
* util 是一个Node.js 核心模块，提供常用函数的集合
* event - 事件
* path - 提供了处理和转换文件路径的工具。
* fs - 文件读写
* buffer - 缓冲区
* stream - 数据流
* post请求-querystring, get请求-url
* os - 提供基本的系统操作函数。
* domain - 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。
* net - 用于底层的网络通信。提供了服务端和客户端的的操作。
* DNS - 用于解析域名。

## 基于node.js开发的web开发框架
### Egg
### Express
* body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
* cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
* multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
* get请求， post请求；request、response
* express.static 中间件来设置静态文件路径。eg:app.use(express.static('public'));
### Koa
### Sails




### npm 
### npx -- 提升开发者使用包内提供的命令行工具的体验