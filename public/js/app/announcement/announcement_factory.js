/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
angular.module('app').factory('announcementFactory', ['$http', 'appConfig', function ($http, appConfig) {
  function createAnnouncement(data){
    var url = appConfig.apiUrl + '/announcement/create';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function updateAnnouncement(data){
    var url = appConfig.apiUrl+'/announcement/update';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function deleteAnnouncement(data){
    var url = appConfig.apiUrl+'/announcement/remove/'+data.id;
    return $http({
      method:'POST',
      url:url
    });
  };
  return {
    createAnnouncement:createAnnouncement,
    updateAnnouncement:updateAnnouncement,
    deleteAnnouncement:deleteAnnouncement
  };
}]);