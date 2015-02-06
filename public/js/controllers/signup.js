// signup controller
angular.module('app').controller('SignupFormController', ['$scope', '$http', '$state','Facebook',
  function ($scope, $http, $state,Facebook) {
  'use strict';
  $scope.user = {};
  $scope.authError = null;
  $scope.signup = function () {
    $scope.authError = null;
    // Try to create
    $http.post('api/signup', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
      .then(function (response) {
        if (!response.data.user) {
          $scope.authError = response;
        } else {
          $state.go('app.dashboard-v1');
        }
      }, function (x) {
        $scope.authError = 'Server Error';
      });
  };
    $scope.fbLogin = function(){
      Facebook.login(function (response) {
        if(response.status === 'connected'){

        }
      });
    }
}])
;