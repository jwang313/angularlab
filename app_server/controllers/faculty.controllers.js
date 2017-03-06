// Ch 7 building an http client 
var request = require('request');
var server = "http://localhost:8080";

// use this URL for productions
if (process.env.NODE_ENV === 'production') {
  server = "https://myapp.herokuapp.com";
}

module.exports.home = function(req, res){
  console.log('I am about to make a api call, client GET http call');
  var requestOptions, path;
  path = '/api/faculty';
  requestOptions = {
    //url : "http://localhost:8080/api/faculty" ,
    url: server + path,
    method : "GET",
    json : {},  // body of the req
    qs : {}
  };
  console.log('url: ', requestOptions.url);
  request(requestOptions, function(err, response, data) {
    
    if (response.statusCode === 200 && data.length) {
        console.log(data);
        res.json(data);  }
      else { console.log(response.statusCode); }  
    
    
  });
};
 
module.exports.createFac = function(req, res){
  console.log('I am about to make a api call, client POST http call');
  var requestOptions, path;
  path = '/api/faculty';
  requestOptions = {
    //url : "http://localhost:8080/api/faculty" ,
    url: server + path,
    method : "POST",
    form :  {name: 'Mac', specialty: 'AI' },  // from data
    qs : {}
  };
  console.log('url: ', requestOptions.url);
  request(requestOptions, function(err, response, data) {
      console.log(request.statusCode);
    
      console.log(data);
      res.json(data);  
  });
};




// Try to implement Delete and Update http calls 