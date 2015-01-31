/*
angular.module('app').factory('cueFactory', ['$http', 'appConfig', function ($http, appConfig) {
  'use strict';
  function getCueList () {
    console.log(appConfig.apiUrl + '/cue/get/all :: URL');
    return $http({
      method: 'GET',
      url: appConfig.apiUrl + '/cue/get/all/30/50'
    });
  };
  return {
    getCueList: getCueList
  };

}]);*/
