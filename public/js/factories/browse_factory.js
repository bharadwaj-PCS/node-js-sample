
angular.module('app').factory('browseFactory', function($http, appConfig){
  'use strict';
  var uploadTos3 = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl+'/rest/cloud/store',
      data: data,
      headers: {'Content-Type': undefined },
      transformRequest: angular.identity
    });
  };
  return {
    uploadTos3: uploadTos3
  };
});
