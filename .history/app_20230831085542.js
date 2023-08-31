var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', xss: req.query.xss })
})

server.listen(3000, function () {
  console.log('运行中66666');
})

module.exports = router
