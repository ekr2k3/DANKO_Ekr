// var express = require('express');
// var rou = express.Router();
// var controllerHome;
// rou.get('/',controllerHome);
//  đây là code khi để viết khi chưa bt viết gì hoặc chưa viết
var express = require('express');
var rou = express.Router();
var controllerHome = require('../controllers/home.controller');
rou.get('/',controllerHome.homeCLient);



module.exports = rou;