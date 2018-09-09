var express = require('express');
var apiRouter = express.Router();

var quiz = require('./../quiz.js');
var sampleQuiz = require('./../quiz_fixture.js');

apiRouter.get('/', function(req, res) {
  res.json({ message: 'hooray! your API is working!' });
});

apiRouter.get('/sample', function(req, res) {
  res.json(sampleQuiz);
});

module.exports = apiRouter;

apiRouter.get('/category/:category', function(req, res) {
 quiz
   .getQuiz(req.params)
   .then(function(result){res.json(result);});
});

apiRouter.get('/category/:category/difficulty/:difficulty', function(req, res) {

   getQuiz(req.params)
   .then(function(result){res.json(result);});
});

apiRouter.get('/category/:category/difficulty/:difficulty/count/:count', function(req, res) {
 quiz
   .getQuiz(req.params)
   .then(function(result){res.json(result);});
});

module.exports = apiRouter;
