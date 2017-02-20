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

};

