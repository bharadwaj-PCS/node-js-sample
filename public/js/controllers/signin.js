/* Controllers */
// signin controller
angular.module('app').controller('SigninFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
  'use strict';
  $scope.user = {};
  $scope.authError = null;
  $scope.login = function () {
    $scope.authError = null;
    if ($scope.user.email === 'admin@apspeak.com' && $scope.user.password === 'Admin@123') {
      $state.go('app.dashboard-v1');
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