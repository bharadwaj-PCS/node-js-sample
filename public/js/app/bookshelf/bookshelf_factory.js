/**
 * Created with JetBrains WebStorm.
 * User: ssomu
 * Date: 12/29/14
 * Time: 12:23 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('app').factory('bookshelfFactory', function ($http, appConfig) {
  'use strict';
  var getBookList = function () {
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/user/list'
    });
  };
  var deleteBook = function (data) {
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
  };

  return {
    getBooks: getBookList,
    deleteBook: deleteBook,
    tabletZip: tabletZip,
    iphoneZip: iphoneZip,
    updateBook: updateBook
  };

});