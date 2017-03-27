(function () {

  angular.module('myApp', ['ngRoute']).config(myConfig); 

  // $routeProvider allows to set up routes 
  function myConfig ($routeProvider) {
    $routeProvider    // inline template
      .when('/', {   template: '<p>This is the root page /  </p>',  })
      .when('/about', { templateUrl: 'about/about.html'})
      .when('/contact', {
        templateUrl:  'contact/contact.html',
        controller: 'ContactController', controllerAs: 'conCon' })
      .when('/test', { 
        templateUrl: 'other/test.html',
        controller: 'TestController', controllerAs: 'testCon' })
      
      .when('/faculty', { 
         templateUrl: 'other/faculty.html',
         controller: 'FacController', controllerAs: 'facCon' });
      // .when('/students', { 
      //   templateUrl: 'other/students.html',
      //   controller: 'StuController', controllerAs: 'stuCon' })   
      // .otherwise( { redirectTo: '/'});  
  }


})();