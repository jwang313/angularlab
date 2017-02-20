var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

// routes for faculty  
var ctrlFaculty = require('../controllers/faculty.controllers.js');

// routes for students  
var ctrlStudents = require('../controllers/students.controllers.js');

// Main page
router
    .route('/')
    .get(ctrlMain.index);

// Testing route 
router
    .route('/testing')
    .get(ctrlMain.testing);


// CRUD actions 
// Read
router
   .route('/faculty')
   .get(ctrlFaculty.facultyGetAll);

router
   .route('/students')
   .get(ctrlStudents.studentsGetAll);

module.exports = router;
