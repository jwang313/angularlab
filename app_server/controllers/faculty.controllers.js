var mongoose = require('mongoose');
var Faculty = mongoose.model('Faculty');

module.exports.facultyGetAll = function(req, res) {

  console.log('Read All Faculty');
  console.log(req.query);

  Faculty
    .find()    //exec tells to execute query 
    .exec(function(err, faculty) {    //faculty is the return data
      console.log("Found Faculty", faculty.length);
      res
        .json(faculty);  // creates json response with the data 
    });

};

module.exports.facultyGetOne = function(req, res) {
  var id = req.params.facultyId;
  console.log('req.params', req.params);
  console.log('GET facultyId', id);

  Faculty
    .findById(id)
    .exec(function(err, doc) {
      res
        .status(200)
        .json(doc);
    });

};

module.exports.facultyAddOne = function(req, res) {
 
  console.log("POST new faculty");
  console.log('req.body' , req.body);
  
  Faculty
    .create({
      name : req.body.name,
      specialty : req.body.specialty,
      institution : req.body.institution, 
      courses : req.body.courses
     
    }, function(err, faculty) {
      if (err) {
        console.log("can't create faculty");
        res
          .status(400)
          .json(err);
      } else {
        console.log("Job done", faculty);
        res
          .status(201)
          .json(faculty);
      }
    });

 
};