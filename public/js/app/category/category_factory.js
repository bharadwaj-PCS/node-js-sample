/**
 * Created by bharadwaj on 26/2/15.
 */
angular.module('app').factory('categoryFactory', ['$http', 'appConfig', function ($http, appConfig) {
  'use strict';
  function getCategoriesList (offset,count) {
    var maxValue = (offset+count-1),url = appConfig.apiUrl + '/categories/list/'+offset+'/'+maxValue;
    console.log(url);
    return $http({
      method: 'GET',
      url: url
    });
  };
  function createCategory(data){
    var url = appConfig.apiUrl + '/category';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function updateCategory(data){
    var url = appConfig.apiUrl+'/category/update';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function searchCategory(data){
    var url = appConfig.apiUrl+'/search/category/namelike';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function attachCategoryToAsset(data){
    var url = appConfig.apiUrl+'/category/asset/attach';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function detachCategoryToAsset(data){
    var url = appConfig.apiUrl+'/category/asset/detach';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function attachCategoryToAsset(data){
    var url = appConfig.apiUrl+'/category/cue/attach';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };

  /*function uploadImage(data,name){
    var url = appConfig.apiUrl + '/file/upload';
    return $http.post(url,data,{
      transformRequest: angular.identity,
      headers: {
        'Content-Type':undefined
      }
    });
  };
   function deleteCategory(data){
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
  };*/
  return {
    getCategoriesList:getCategoriesList,
     createCategory:createCategory,
    updateCategory:updateCategory,
    searchCategory:searchCategory,
    attachCategoryToAsset:attachCategoryToAsset,
    detachCategoryToAsset:detachCategoryToAsset/*,
    deleteCategory:deleteCategory,
    uploadImage:uploadImage,
    updateCue:updateCue,
    deleteCue:deleteCue,
    getPollCueOptions:getPollCueOptions*/
  };

}]);