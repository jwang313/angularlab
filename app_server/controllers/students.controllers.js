<<<<<<< HEAD
var dbconn = require('../models/db.js');

module.exports.studentsGetAll = function(req, res) {

=======
var dbconn = require('../models/dbconnection.js');

module.exports.studentsGetAll = function(req, res) {

  var db = dbconn.get();
  console.log('GET all Students');
  console.log(req.query);
  var collection = db.collection('students');

  //methods from mongo db driver  
  collection
    .find()
    .toArray(function(err, docs) {
      console.log("Found students:", docs.length);
      res
        .status(200)
        .json(docs);
  });
>>>>>>> 0d0094cb81174d05dd28fd7485e80b0cb2c34301

};

