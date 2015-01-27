/**
 * Created by paradigm on 1/6/2015.
 */

angular.module('app').factory('createFactory', function($http, appConfig){
  'use strict';
  var createBook = function(book){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/user/create',
      data: book
    });
  };
  return {
    createBook: createBook
  };
});
