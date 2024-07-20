



var express = require('express');
var rou = express.Router();
var controllerNews = require('../controllers/news.controller');
rou.get('/',controllerNews.newsClient);



module.exports = rou;