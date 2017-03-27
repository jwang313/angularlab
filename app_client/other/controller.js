(function () {     // Building controllers for api http requests 

  // asssign controllers to myApp module 
  angular.module('myApp').controller('TestController', TestController);
  
  angular.module('myApp').controller('FacController', FacController);
  
  angular.module('myApp').controller('StuController', StuController);

  function TestController() {
    var myModel = this;
    myModel.name = 'Test';
  
  }
  



  function FacController($http) {
    
    // for testing 
    var myModel = this;
    myModel.name = 'faculty';
    
    $http.get('/api/faculty').then(function(response) {   // use .then instead of .success
        myModel.response = response;
        console.log(response);
      });
       
  }
 
  function StuController($http) {
     $http.get('/api/students').then(function(response) {   // use .then instead of .success
         console.log(response); 
       });
   }
 
})();