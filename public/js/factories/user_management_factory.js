/**
 * Created by bharadwaj on 9/2/15.
 */
angular.module('app').factory('userManagement', ['$http','appConfig',  function($http, appConfig){
  'use strict';
  var signUp = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/profile/user',
      headers: {
        'Content-Type': 'application/json',
        'J290EeGRFyIYRdXES7outLUbZKr':'l0FQ5cmpRcADmREyUY4DKwH3CnxejQtpb1cM'
      },
      data: data
    });
  };
  var login = function(data){

    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/user/action/signin',
      headers: {
        'Content-Type': 'application/json',
        'J290EeGRFyIYRdXES7outLUbZKr':'l0FQ5cmpRcADmREyUY4DKwH3CnxejQtpb1cM'
      },
      data: data
    });
  };
  return {
    signUp: signUp,
    login:login
  };
}]);