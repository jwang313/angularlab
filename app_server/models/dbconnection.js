// require MongoClient class from monfodb driver 
var MongoClient = require('mongodb').MongoClient;

// specify  the DB 
var dburl = 'mongodb://localhost:27017/meandb';

// the connection 
var _connection = null;  

// open connection 
var open = function() {
  // function(err, db) is the callback func w error obj and connection obj
  MongoClient.connect(dburl, function(err, db) {
    if (err) {
      console.log("DB connection failed");
      return;
    }
    _connection = db;
    console.log("DB connection open");
  });
};

// get the connection 
var get = function() {
  return _connection;
};

// export methods 
module.exports = {
  open : open,
  get : get
};