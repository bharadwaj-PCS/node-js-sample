/**
 * Update book
 * Generate tablet zip
 * Generate Iphone Zip
 **/

angular.module('app').controller('editBookController', function($scope, $modalInstance, $rootScope, book, toaster, appConfig, bookshelfFactory) {
  'use strict';
  $scope.book = book;
  $scope.bookPermissions = appConfig.bookPermissions;
  $scope.bookSubType = appConfig.bookSubType;
  $scope.currencyType = appConfig.currencyType;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.tabletZip = function () {
    $scope.myPromise = bookshelfFactory.tabletZip($scope.book.id).then(function (value) {
      $scope.book.zip_tablet = value.data.zip_tablet;
      toaster.pop('success', 'Successfully converted your zip.');
    });
  };

  $scope.iphoneZip = function () {
    $scope.myPromise = bookshelfFactory.iphoneZip($scope.book.id).then(function (value) {
      $scope.book.zip_iphone = value.data.zip_iphone;
      toaster.pop('success', 'Successfully converted your zip.');
    });
  };

  $scope.updateBook = function (index) {
    if ($scope.book.ImageBoxArray) {
      $scope.book.imageData = $scope.book.ImageBoxArray.Image;
      $scope.book.image = $scope.book.ImageBoxArray.ImageName;
    }
    $scope.book.bookID = $scope.book.id;

    $scope.myPromise = bookshelfFactory.updateBook($scope.book).success(function (data) {
      $scope.message = 'Saved Successfully';
      $scope.book = data;
      $modalInstance.close();
      toaster.pop('success', 'Successfully Updated Your Book.');
    }).error(function () {
          $scope.message = 'Unexpected Error';
          toaster.pop('error', 'Unexpected Error.');
        });
  };

});