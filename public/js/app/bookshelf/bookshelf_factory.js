/**
 * Created with JetBrains WebStorm.
 * User: ssomu
 * Date: 12/29/14
 * Time: 12:23 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('app').factory('cueFactory', function ($http, appConfig) {
  'use strict';
  var getCueList = function () {
    console.log(appConfig.apiUrl + '/cue/get/all :: URL');
    return $http({
      method: 'GET',
      url: appConfig.apiUrl + '/cue/get/all/20/30' //whatsay-node-server-dev.herokuapp.com/api/v1/cue/get/all
    });
  };
  /*var deleteBook = function (data) {
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/user/delete',
      data: data
    });
  };
  var tabletZip = function (bid) {
    return $http.get(appConfig.apiUrl + '/generate/' + bid);
  };
  var iphoneZip = function (bid) {
    return $http.get(appConfig.apiUrl + '/publish/' + bid);
  };
  var updateBook = function (book) {
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/user/update/type',
      data: book
    });
  };*/

  return {
    getCueList: getCueList/*,
    deleteBook: deleteBook,
    tabletZip: tabletZip,
    iphoneZip: iphoneZip,
    updateBook: updateBook*/
  };

});