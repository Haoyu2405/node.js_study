// 引入所需模块
var express = require('express')
var path = require('path')

// 创建 Express 应用程序
var app = express()

// 设置静态文件夹路径
// app.use(express.static(path.join(__dirname, 'public')))
// app.set('views', path.join(__dirname, '/')) // 设置视图文件夹路径

// 设置视图引擎为 EJS
app.set('view engine', 'ejs') // 设置模板引擎
app.set('views', path.join(__dirname, 'views')) // 设置视图文件夹路径，这里假设视图文件夹名为 "views"


/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', xss: req.query.xss })
})


// ...其他中间件和路由配置...

// 启动服务器
app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
