var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/muskan', function(req, res, next) {
  res.send('welcome');
});


module.exports = router;
