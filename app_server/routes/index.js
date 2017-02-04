var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

// routes for faculty  
var ctrlFaculty = require('../controllers/faculty.controllers.js');

// Main page
router
    .route('/')
    .get(ctrlMain.index);

// Testing route 
router
    .route('/testing')
    .get(ctrlMain.testing);


// // CRUD actions 
router
   .route('/faculty')
   .get(ctrlFaculty.facultyGetAll);

// // Read 
// router
//   .route('/faculty/:facultyId')
//   .get(ctrlFaculty.facultyGetOne);

// // Create
// router
//   .route('/faculty/new')
//   .post(ctrlFaculty.facultyAddOne);



module.exports = router;
