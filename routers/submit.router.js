var express = require('express');
var rou = express.Router();
var controllerSubmit = require('../controllers/submit.controller');
rou.post('/',controllerSubmit.submitClient);



module.exports = rou;