var dbconn = require('../models/dbconnection.js');

//var ObjectId = require('mongodb').ObjectID;
//var facultyData = require('../models/faculty.json');

// module.exports.testing = function(req, res){
//     //console.log(req.method, req.url);
//     res.render('testing.jade', { title: 'Testing Page' });
// };

module.exports.facultyGetAll = function(req, res) {

  var db = dbconn.get();
  console.log('GET all faculty');
  console.log(req.query);
  var collection = db.collection('faculty');

  //methods from mongo db driver  
  collection
    .find()
    .toArray(function(err, docs) {
      console.log("Found faculty", docs.length);
      res
        .status(200)
        .json(docs);
  });

};

// module.exports.facultyGetAll = function(req, res) {

//   var db = dbconn.get();
//   console.log('GET all faculty');
//   console.log(req.query);

//   // show only a portion of the data 
//   var offset = 0;
//   var count = 2;

//   var collection = db.collection('faculty');

//   if (req.query && req.query.offset) {
//     offset = parseInt(req.query.offset, 10);
//   }
  
//   if (req.query && req.query.count) {
//     count = parseInt(req.query.count, 10);
//   }

//   //methods from mongo db driver  
//   collection
//     .find()
//     .skip(offset)   // records to skip
//     .limit(count)   // records to show  
//     .toArray(function(err, docs) {
//       console.log("Found faculty", docs.length);
//       res
//         .status(200)
//         .json(docs);
//   });

// };

// module.exports.facultyGetOne = function(req, res) {
//   var db = dbconn.get();
//   var id = req.params.facultyId;
//   var collection = db.collection('faculty');
//   console.log('GET facultyId', id);

//   collection
//     .findOne({   // asyncrounous method, so it takes callback func
//       _id : ObjectId(id)
//     }, function(err, doc) {  //callback func takes err, and return value
//       res
//         .status(200)
//         .json(doc);
//   });

// };
