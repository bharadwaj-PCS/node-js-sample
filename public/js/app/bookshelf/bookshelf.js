/**
 * Get book list
 * redirect to canvas page
 **/

angular.module('app').controller('bookShelfCtrl', ['$scope', '$window', '$rootScope', '$modal', 'toaster', 'appConfig', 'bookshelfFactory', function ($scope, $window, $rootScope, $modal, toaster, appConfig, bookshelfFactory) {
  'use strict';
  $scope.myPromise = bookshelfFactory.getBooks().success(function (data) {
    $scope.bookList = data;
    toaster.pop('success', 'Successfully Loading books');
  }).error(function () {
    toaster.pop('error', 'Error while loading books.');
  });

  $scope.editBook = function (index) {
    $modal.open({
      templateUrl: 'tpl/bookshelf/edit_book_model.html',
      controller: 'editBookController',
      size: 'lg',
      resolve: {
        book: function () {
          return $scope.bookList[index];
        }
      }
    });
  };


  $scope.open = function (index) {

    var modalInstance = $modal.open({
      templateUrl: 'tpl/bookshelf/delete_book_model.html',
      controller: 'deleteBookCtrl',
      size: 'xs'
    });

    modalInstance.result.then(function () {

      bookshelfFactory.deleteBook({id: $scope.bookList[index].id}).success(function () {
        $scope.bookList.splice(index, 1);
        toaster.pop('success', 'Successfully Deleted Your Book.');
      });
    }, function () {

    });
  };
  $scope.canvasBook = function (index) {
    window.location = '/#/book/canvas/' + $scope.bookList[index].id;
  };

  $scope.layoutView = 'thumbnail';

}]);


