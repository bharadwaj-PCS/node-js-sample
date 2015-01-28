/* Controllers */
// signin controller
angular.module('app').controller('SigninFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
  'use strict';
  $scope.user = {};
  $scope.authError = null;
  $scope.login = function () {
    $scope.authError = null;
    var emailList = ['admin@whatsay.com'],passwordList = ['123'];
    var index = emailList.indexOf($scope.user.email);
    if (index !== -1 && $scope.user.password === passwordList[index]) {
      $state.go('book.bookshelf');
    } else {
      $scope.authError = 'Email or Password not right';
    }
    // Try to login
    /*$http.post('api/login.json', {email: $scope.user.email, password: $scope.user.password})
     .then(function(response) {
     if ( !response.data.user ) {
     $scope.authError = 'Email or Password not right';
     }else{
     $state.go('app.dashboard-v1');
     }
     }, function(x) {
     $scope.authError = 'Server Error';
     });*/
  };
}])
;