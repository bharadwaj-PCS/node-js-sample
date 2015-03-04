/**
 * Created by bharadwaj on 23/2/15.
 */
'use strict';
angular.module('app').factory('assetFactory', ['$http', 'appConfig','$cookies', function ($http, appConfig,$cookies) {
   var userId = $cookies['userId'];
 function getAssets(data,offset,count){
   var maxValue = (offset+count-1);
   var url = appConfig.apiUrl + '/asset/by/label/Theme/'+offset+'/'+maxValue;
   data.user_id = $cookies['userId'] || '9ff61f0c-961c-4867-9455-d142ff081c90';
   console.log(userId);
   return $http({
     method:'POST',
     url:url,
     data:data
   });
 };
  function createAsset(file){
    var url = appConfig.apiUrl+'/asset/put';

    //var url = 'http://localhost:5000/api/v1/asset/put';
    file.append('user_id',$cookies['userId'] || '9ff61f0c-961c-4867-9455-d142ff081c90');

    return $http({
      method:'POST',
      url:url,
      headers:{
        'Content-Type':undefined
      },
      transformRequest: angular.identity,
      data:file
    })

  };
  function deleteAsset(data){
    var url = appConfig.apiUrl + '/asset/delete';
    data.user_id = $cookies['userId'] || '9ff61f0c-961c-4867-9455-d142ff081c90';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  }
  return {
    getAsset:getAssets,
    createAsset:createAsset,
    deleteAsset:deleteAsset
  }
}]);