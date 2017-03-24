var User = require('../models/user-model');
var Book = require('../models/book-model');
var mongoose = require('mongoose');

var movies = [
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
    },
    movies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  }
];
