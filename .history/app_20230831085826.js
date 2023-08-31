var express = require('express')
var app = express()

/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', xss: req.query.xss })
})

app.listen('3000', function () {
  console.log('运行中66666');
})

module.exports = router
