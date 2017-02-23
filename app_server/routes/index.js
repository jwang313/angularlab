var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

// routes for faculty  
var ctrlFaculty = require('../controllers/faculty.controllers.js');

// routes for students  
var ctrlStudents = require('../controllers/students.controllers.js');

// routes for opportunities  
var ctrlOpportunities = require('../controllers/opportunities.controllers.js');

// Main page
router
    .route('/')
    .get(ctrlMain.index);

// Testing route 
router
    .route('/testing')
    .get(ctrlMain.testing);

// CRUD actions for Faculty 
// Read and Create 
router
    .route('/faculty')
    .get(ctrlFaculty.facultyGetAll)
    .post(ctrlFaculty.facultyAddOne);

// Read one
router
  .route('/faculty/:facultyId')
  .get(ctrlFaculty.facultyGetOne);


// CRUD actions for Student
router
   .route('/students')
   .get(ctrlStudents.studentsGetAll);


module.exports = router;
