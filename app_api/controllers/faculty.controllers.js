var mongoose = require('mongoose');
var Faculty = mongoose.model('Faculty');

module.exports.facultyGetAll = function(req, res) {

  console.log('Read All Faculty');

  Faculty
    .find()    //exec tells to execute query 
    .exec(function(err, faculty) {    //faculty is the return data
      console.log("Found Faculty", faculty.length);
      //console.log(faculty);
      res
        .json(faculty);  // creates json response with the data 
    });

};


module.exports.facultyGetOne = function(req, res) {
  console.log('Read one faculty');
  var id = req.params.facultyId;
  console.log('req.params ', req.params);
  console.log('GET facultyId', id);

  Faculty
    .findById(id)
    .exec(function(err, doc) {
      if (err) {
        console.log("can't get faculty", id);
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


module.exports.facultyAddOne = function(req, res) {
  console.log("POST new faculty");

  console.log('req params body' , req.params, req.body);

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

module.exports.facultyUpdateOne = function(req, res) {
  var facultyId = req.params.facultyId;

  console.log('Update faculty', facultyId);

  Faculty
    .findById(facultyId)
    .exec(function(err, faculty) {
      if (err) {
        console.log("Error");
        res
          .status(500)
          .json(err);
          return;
      } else if(!faculty) {
        console.log("Faculty not found", facultyId);
        res
          .status(404)
          .json({
            "message" : "Faculty not found " + facultyId
          });
          return;
      }

      faculty.name = req.body.name;
      faculty.specialty = req.body.specialty;
      faculty.institution = req.body.institution; 
      faculty.courses =  _splitArray(req.body.courses);

      faculty
        .save(function(err, facultyUpdated) {
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
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


module.exports.facultyDeleteOne = function(req, res) {
  var facultyId = req.params.facultyId;

  Faculty
    .findByIdAndRemove(facultyId)
    .exec(function(err, faculty) {
      if (err) {
        res
          .status(404)
          .json(err);
      } else {
        console.log("Faculty deleted, id:", facultyId);
        res
          .status(204)
          .json();        
      }
    });
};








