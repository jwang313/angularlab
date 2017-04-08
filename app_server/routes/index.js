// routes  with root url  /  are sent here  

var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');
var ctrlFac = require('../controllers/faculty.controllers');
var ctrlOpp = require('../controllers/opportunities.controllers');


// Testing route 
router
    .route('/testing')
    .get(ctrlMain.testing);

// Ch 7, implementing http client 
router
    .route('/')
    .get(ctrlMain.index);

router
    .route('/createFac')
    .get(ctrlFac.createFac);    
 
 
router.get('/student/:studentId/opportunity/new', ctrlOpp.createOpp);    
    
module.exports = router;