/**
 * Created by bharadwaj on 30/1/15.
 */
'use strict';
angular.module('app').factory('cueFactory', ['$http', 'appConfig', function ($http, appConfig) {
  'use strict';
  function getCueList (offset,count) {
    var maxValue = (offset+count-1),url = appConfig.apiUrl + '/cue/get/all/'+offset+'/'+maxValue;
    console.log(url);
    return $http({
      method: 'GET',
      url: url
    });
  };
  function createCue(data){
    var url = appConfig.apiUrl + '/cue/create';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function uploadImage(data,name){
    var url = appConfig.apiUrl + '/file/upload';
    return $http.post(url,data,{
      transformRequest: angular.identity,
      headers: {
        'Content-Type':undefined
      }
    });
  };
  function updateCue(data){
    var url = appConfig.apiUrl+'/cue/update';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function deleteCue(data){
    var url = appConfig.apiUrl+'/cue/delete';
    return $http({
      'method':'POST',
      'url':url,
      data:data
    });
  };
  function getPollCueOptions(id){
    var url = appConfig.apiUrl+'/poll/get/'+id;
    return $http({
      method: 'GET',
      url: url
    });
  };
  return {
    getCueList: getCueList,
    createCue:createCue,
    uploadImage:uploadImage,
    updateCue:updateCue,
    deleteCue:deleteCue,
    getPollCueOptions:getPollCueOptions
  };

}]);

