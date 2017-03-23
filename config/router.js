var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
var moviesController = require('../controllers/movies-controller');

// home page
router.get('/', function (req, res) {
  res.render('/', {
    title: 'Home'
  });
});

// // users
// router.route('/users')
//   .get(usersController.index)
//   .post(usersController.create);
//
// router.get('/users/new', usersController.new);
// router.get('/users/:id/edit', usersController.edit);
//
// router.route('/users/:id')
//   .put(usersController.update)
//   .get(usersController.show)
//   .delete(usersController.destroy);
//
// // movies
// router.get('/movies/:id/edit', moviesController.edit);
// router.post('/movies', moviesController.create);
// router.route('/movies/:id')
//   .put(moviesController.update)
//   .delete(moviesController.destroy);



module.exports = router;
