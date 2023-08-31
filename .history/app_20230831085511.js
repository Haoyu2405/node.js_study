var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', xss: req.query.xss })
})

Server.listen(8080, function () {
  console.log('运行中');
})

module.exports = router
