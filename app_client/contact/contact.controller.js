(function () {

  angular.module('myApp').controller('ContactController', ContactController);

  function ContactController() {
    var myModel = this;
    myModel.name = 'Bobby';
  
  }
 
})();