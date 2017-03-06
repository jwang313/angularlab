// Ch 7 building an http client 
var request = require('request');
var server = "http://localhost:8080";

// use this URL for productions
if (process.env.NODE_ENV === 'production') {
  server = "https://myapp.herokuapp.com";
}


module.exports.createOpp = function(req, res) {
  console.log('Create opportunity', req.params.studentId);
  var requestOptions, path, studentId, postdata;
  
  studentId = req.params.studentId;
  
  path = "/api/students/" + studentId + '/opportunities';

  requestOptions = {
    url : server + path,
    method : "POST",
    //json : postdata
    form : {title: 'google', type: 'summer' }
  
};

  request( requestOptions,  function(err, response, body) {  
    console.log(body);
    res.json(body);   
    
  } );

};