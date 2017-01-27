var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Respond with resourse');
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'About' });
});


module.exports = router;
