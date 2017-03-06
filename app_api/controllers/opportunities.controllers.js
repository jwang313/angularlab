var mongoose = require('mongoose');
var Student = mongoose.model('Student');

module.exports.oppAddOne = function(req, res) {
    console.log("POST new opp");
    var id = req.params.studentId;
    console.log('student id', id);
  
    Student
      .findById(id)
      .select('opportunity')
      .exec(
        function(err, student) {
          if (err) {
            res.status(500);
            res.json(err);
          } else {
            student.opportunity.push({
              title: req.body.title,
              type: req.body.type,
              
            });
            student.save(function(err, studentUpdated) {
              var thisOpp;
              if (err) {
                res.status(500);
                res.json(err);
              } else {
                thisOpp = studentUpdated.opportunity[studentUpdated.opportunity.length - 1];
                res.status(200);
                res.json(thisOpp);
              }
            });
        }
        });
     
};

// Read all opportunities for a given student            
 module.exports.oppGetAll = function(req, res) {
     
    console.log('Read all opp for a given student');
    console.log(req.params, req.params.studentId);
    var id = req.params.studentId;
    
    Student
    .findById(id)
    .select('opportunity')
    .exec(function(err, doc) {
      console.log(doc);
      res
        .status(200)
        .json(doc.opportunity);
    });
    

 };