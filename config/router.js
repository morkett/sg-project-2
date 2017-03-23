var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
// var moviesController = require('../controllers/movies-controller');

router.get('/', function (req, res) {
  res.render('users', {
    title: 'Home'
  });
});

router.get('/users', usersController.index);

module.exports = router;
