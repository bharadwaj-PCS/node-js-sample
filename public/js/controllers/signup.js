// signup controller
angular.module('app').controller('SignupFormController', ['$scope', '$http', '$state', 'Facebook', 'userManagement', 'toaster',
  function ($scope, $http, $state, Facebook, userManagement, toaster) {
    'use strict';
    $scope.user = {};
   /* $scope.user.email = "bharad@whatsay.com";
    $scope.user.password = "12345678";
    $scope.agree = true;*/

    $scope.authError = null;
    var resetForm = function () {
      $scope.user.email = "";
      $scope.user.password = "";
      $scope.agree = false;
    };
    $scope.me = function (accessToken) {
      Facebook.api('/me', function (response) {
        $http.get('http://jsonip.com').then(function (result) {
          var details = {
            device_id:result.data.ip,
            platform:'WEB',
            provider:'FACEBOOK',
            uid:response.id,
            access_token:accessToken
          };
          userManagement.login(details).success(function (result) {
            console.log(result);
            $state.go('app.cue');
          }).error(function (err) {
            console.log(err);
            if(err.type === 400){
              $scope.signup(details);
            }
          })
        },function(err){

        })

        //$scope.signup(details);
      });
    };
    $scope.signup = function (details) {
      $scope.authError = null;

      $scope.myPromise = $http.get('http://jsonip.com').then(function (result) {
        var data = {}, accounts = {};
        data.device_id = result.data.ip;
        data.platform = 'WEB';
        accounts.provider = details.provider || 'EMAIL';
        accounts.email_id = $scope.user.email;
        accounts.password = $scope.user.password;
        accounts.uid = details.uid || '';
        accounts.access_token = details.access_token || '';
        data.accounts = [];
        data.accounts.push(accounts);
        userManagement.signUp(data).success(function (data) {
          console.log("created!", data);
          if (data.success) {
            toaster.pop('success', data.message);
            $state.go('app.cue');
          } else {
            toaster.pop('error', data.message);
          }
        }).error(function (err) {
          console.log(err);
        });
      }, function (error) {
        console.log(error);
      });


    };
    $scope.fbLogin = function () {
      Facebook.login(function (response) {
        if (response.status === 'connected') {
          console.log(response,'access-token');
          $scope.logged = true;
          var accessToken = response.authResponse.accessToken;
          $scope.me(accessToken);
        }
      });
    }
  }])
;