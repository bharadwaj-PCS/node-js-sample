/**
 * Created by bharadwaj on 30/1/15.
 */
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
    var url = appConfig.apiUrl + '/cue/create'
    return $http({
      method:'POST',
      url:url,
      data:data
    })
  };
  function uploadImage(data){
    var url = 'http://dev.whatsayapp.com/rv3/user/profile/image/upload';
    return $http({
      'method':'POST',
      'url':url,
      'content-type':'multipart/form-data',
      'data':data,
      'J290EeGRFyIYRdXES7outLUbZKr': 'l0FQ5cmpRcADmREyUY4DKwH3CnxejQtpb1cM'
    })
  };
  function deleteCue(data){
    var url = appConfig.apiUrl+'/cue/delete';
    return $http({
      'method':'POST',
      'url':url,
      data:data
    });
  };
  return {
    getCueList: getCueList,
    createCue:createCue,
    uploadImage:uploadImage,
    deleteCue:deleteCue
  };

}]);
