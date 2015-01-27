/**
 * Created with JetBrains WebStorm.
 * User: ssomu
 * Date: 12/29/14
 * Time: 2:39 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('app').factory('canvasFactory', function($http, appConfig){
  'use strict';
  var getBookData = function(bid){
    return $http({
      method: 'GET',
      url: appConfig.apiUrl +'/rest/book/get/' + bid
    });
  };
  var updatePageOrder = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/page/order',
      data: data
    });
  };
  var deletePage = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl +'/rest/book/page/user/delete',
      data: data
    });
  };
  var updateCanvas = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl +'/rest/book/page/user/update',
      data: data
    });
  };
  var createPage = function(bid){
    return  $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/page/user/create',
      data: bid
    });
  };


  return {
    getBook: getBookData,
    pageOrder: updatePageOrder,
    deletePage: deletePage,
    updateCanvas: updateCanvas,
    createPage: createPage
  };
});
