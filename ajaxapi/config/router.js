var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users-controller');
// var moviesController = require('../controllers/movies-controller');

var Users = [
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      required: true
    }
    // movies: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    //   }
    // ]
  }
];

var currentId = 2;

// GET for /users
router.get('/users', function(req, res) {
  res.send({ Users: Users});
});

module.exports = router;
