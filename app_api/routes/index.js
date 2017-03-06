// routes with URL /api are sent here 
//    /api

var express = require('express');
var router = express.Router();

var ctrlFaculty = require('../controllers/faculty.controllers.js');
var ctrlStudents = require('../controllers/students.controllers.js');
var ctrlOpp = require('../controllers/opportunities.controllers.js');

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
