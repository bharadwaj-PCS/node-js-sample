/* Controllers */
// signin controller
angular.module('app').controller('SigninFormController', ['$scope', '$http', '$state','Facebook','userManagement','toaster',
  function ($scope, $http, $state,Facebook,userManagement,toaster) {
  'use strict';
  $scope.user = {};
  $scope.authError = null;
    $scope.me = function(accessToken){
      Facebook.api('/me', function (response) {
        $http.get('http://jsonip.com').then(function (result) {
          return result;
        })
          .then(function(result){

          });
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
            if(err.type === 400){
              var accounts = [],account = {};
              account.provider = 'FACEBOOK';
              account.uid = details.uid;
              account.access_token = details.access_token;
              accounts.push(account);
              details.accounts = accounts;

              userManagement.signUp(details).success(function (data) {
                console.log("created!", data);
                if (data.success) {
                  toaster.pop('success', data.message);
                  $state.go('app.cue');
                } else {
                  toaster.pop('error', 'Regestered!');
                  $state.go('app.cue');
                }
              }).error(function (err) {
                console.log(err);
              });
            }
          })
        },function(err){

        })
      });
    };
  $scope.login = function () {
    $scope.authError = null;
    var emailList = ['admin@whatsay.com'],passwordList = ['123'];
    var index = emailList.indexOf($scope.user.email);
    if (index !== -1 && $scope.user.password === passwordList[index]) {
      $state.go('app.cue');
    } else {
      //$scope.authError = 'Email or Password not right';
      //userManagement.login();
      $scope.myPromise = $http.get('http://jsonip.com').then(function (result) {
        var data = {};
        data.device_id = result.data.ip;
        data.platform = 'WEB';
        data.provider = 'EMAIL';
        data.uid = $scope.user.email;
        data.password = $scope.user.password;
        console.log(result.data.ip,data);
        userManagement.login(data).success(function(result){
          console.log(result);
          if(result.user_id){
            $state.go('app.cue');
          }else if(result.error) {
            toaster.pop('error',result.error);
          }
        }).error(function(err){
          console.log(err);
          //toaster.pop('error',result.error);
        })
      });
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

    $scope.fbLogin = function () {
      Facebook.login(function (response) {
        if(response.status === 'connected'){
          console.log(response);
          $scope.logged = true;
          var accessToken = response.authResponse.accessToken;
          $scope.me(accessToken);
          //$state.go('app.cue');
        //  call usser profile func
        }
      })
    };
}])
;