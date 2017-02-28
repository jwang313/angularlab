var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

// routes for faculty  
var ctrlFaculty = require('../controllers/faculty.controllers.js');

// routes for students  
var ctrlStudents = require('../controllers/students.controllers.js');

// routes for opportunities  
var ctrlOpp = require('../controllers/opportunities.controllers.js');

// Main page
router
    .route('/')
    .get(ctrlMain.index);

// Testing route 
router
    .route('/testing')
    .get(ctrlMain.testing);

// CRUD actions for Faculty 
router
    .route('/faculty')
    .get(ctrlFaculty.facultyGetAll)
    .post(ctrlFaculty.facultyAddOne);

router
  .route('/faculty/:facultyId')
  .put(ctrlFaculty.facultyUpdateOne)
  .delete(ctrlFaculty.facultyDeleteOne)
  .get(ctrlFaculty.facultyGetOne);


// CRUD actions for Student
router
    .route('/students')
    .get(ctrlStudents.studentGetAll)
    .post(ctrlStudents.studentAddOne);

router
  .route('/students/:studentId')
  .put(ctrlStudents.studentUpdateOne)
  .delete(ctrlStudents.studentDeleteOne)
  .get(ctrlStudents.studentGetOne);








// CRUD actions for Students opportunities
router
    .route('/students/:studentId/opportunities')
    .post(ctrlOpp.oppAddOne)
    .get(ctrlOpp.oppGetAll);

module.exports = router;
