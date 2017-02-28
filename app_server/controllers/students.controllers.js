var mongoose = require('mongoose');
var Student = mongoose.model('Student');

module.exports.studentGetAll = function(req, res) {

  console.log('Read All Students');

  Student
    .find()    
    .exec(function(err, student) {   
      console.log("Found Students", student.length);
      
      res
        .json(student);   
    });

};


module.exports.studentGetOne = function(req, res) {
  console.log('Read one student');
  var id = req.params.studentId;
  console.log('req.params ', req.params);
  console.log('GET studentId', id);

  Student
    .findById(id)
    .exec(function(err, doc) {
      if (err) {
        console.log("can't get student", id);
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(200)
          .json(doc);
      }  
    });

};


module.exports.studentAddOne = function(req, res) {
  console.log("POST new student");
  console.log('req params body' , req.params, req.body);
  
  Student
    .create({
      name : req.body.name,
      address : req.body.address,
      institution : req.body.institution, 
      courses : req.body.courses
     
    }, function(err, student) {
      if (err) {
        console.log("can't create student");
        res
          .status(400)
          .json(err);
      } else {
        console.log("Job done", student);
        res
          .status(201)
          .json(student);
      }
    });
};

module.exports.studentUpdateOne = function(req, res) {
  var studentId = req.params.studentId;
  console.log('Update student', studentId);

  Student
    .findById(studentId)
    .exec(function(err, student) {
      if (err) {
        console.log("Error");
        res
          .status(500)
          .json(err);
          return;
      } else if(!student) {
        console.log("Student not found", studentId);
        res
          .status(404)
          .json({
            "message" : "Student not found " + studentId
          });
          return;
      }

      student.name = req.body.name;
      student.address = req.body.address;
      student.yearEnter = req.body.yearEnter; 
      student.courses =  _splitArray(req.body.courses);

      student
        .save(function(err, studentUpdated) {
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json(studentUpdated);
          }
        });


    });

};

var _splitArray = function(input) {
  var output;
  if (input && input.length > 0) {
    output = input.split(";");
  } else {
    output = [];
  }
  return output;
};


module.exports.studentDeleteOne = function(req, res) {
  var studentId = req.params.studentId;

  Student
    .findByIdAndRemove(studentId)
    .exec(function(err, student) {
      if (err) {
        res
          .status(404)
          .json(err);
      } else {
        console.log("Student deleted, id:", studentId);
        res
          .status(204)
          .json();        
      }
    });
};










