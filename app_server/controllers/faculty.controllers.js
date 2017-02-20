var dbconn = require('../models/dbconnection.js');

module.exports.facultyGetAll = function(req, res) {

  var db = dbconn.get();
  console.log('GET all faculty');
  console.log(req.query);
  var collection = db.collection('faculty');

  //methods from mongo db driver  
  collection
    .find()
    .toArray(function(err, docs) {     // error says if query failed
                                       // docs is the query result, an array
      console.log("Found faculty", docs.length);
      res
        .status(200)     // set res.status to 200 
        .json(docs);     // set res.json to docs 
  });

};

