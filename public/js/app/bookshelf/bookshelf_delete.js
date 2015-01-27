/**
 * Delete book
 **/

angular.module('app').controller('deleteBookCtrl', function ($scope, $modalInstance) {
  'use strict';
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  $scope.deleteBook = function () {
    $modalInstance.close();
  };
});
