/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
angular.module('app').factory('notificationFactory', ['$http', 'appConfig', function ($http, appConfig) {
  function createNotification(data){
    var url = appConfig.apiUrl + '/announcement/create';
    return $http({
      method:'POST',
      url:url,
      data:data
    })
  }
}]);