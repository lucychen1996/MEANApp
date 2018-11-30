var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.js');
/* GET-- /view listing. */
router.get('/view/', function(req, res, next) {
  Todo.find(function (err, todo) {
    if (err) return next(err);
    res.json(todo);
  });
});
/* GET-- /view/:id listing. */
router.get('/view/:id', function(req, res, next) {
    Todo.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
module.exports = router;