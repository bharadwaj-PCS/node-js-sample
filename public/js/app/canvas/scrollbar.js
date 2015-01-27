/**
 * Get book data
 * Update page
 * Delete page
 * Update pages order
 **/
function sortCompare(property) {
  'use strict';
  return function (a, b) {
    return (parseInt(a[property], 10) < parseInt(b[property], 10)) ? -1 : (parseInt(a[property], 10) > parseInt(b[property], 10)) ? 1 : 0;
  };
}
angular.module('app').controller('pageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$modal', '$log', 'toaster', 'appConfig', 'canvasFactory',
  function ($scope, $stateParams, $rootScope, $state, $modal, $log, toaster, appConfig, canvasFactory) {
    'use strict';
    var pagesData = [];
    $scope.bid = $stateParams.BookID;
    $scope.myPromise = canvasFactory.getBook($stateParams.BookID).success(function (data, status, headers, config) {
      pagesData = data.pages;
      pagesData.sort(sortCompare('pageNo'));
      $scope.pages = pagesData;
      $state.go('book.canvas.page', { pageId: $scope.pages[0].id });
    }).error(function (data, status, headers, config) {
          toaster.pop('error', 'Error while Loading pages.');
        });
    $scope.sortableOptions = {
      stop: function (e, ui) {
        var updatedPages = pagesData.map(function (page) {
          return page.id;
        });
        canvasFactory.pageOrder({bid: $stateParams.BookID, pages: updatedPages}).success(function (data, status, headers, config) {
          toaster.pop('success', 'Page Order saved.');
        }).error(function (data, status, headers, config) {
              toaster.pop('error', 'Error while save page orders.');
            });
      }
    };
    $scope.deletePage = function (page, index) {
      canvasFactory.deletePage({bookID: $stateParams.BookID, pageID: page.id}).success(function (data, status, headers, config) {
        toaster.pop('success', 'Page successfully deletd.');
      }).error(function (data, status, headers, config) {
            toaster.pop('error', 'Error while dateing page.');
          });
      $scope.pages.splice(index, 1);
    };
    $scope.game1 = function(){
      var modalInstance = $modal.open({
        templateUrl: 'tpl/canvas/game1.html',
        controller: function($scope, $modalInstance, page){
          function format(image) {
            if (!image.Image){
              return image.ImageName;
            }  // optgroup
            return '<img class="flag" src=image.Image />' + image.ImageName;
          }
          $scope.game1Page = angular.copy(page);
          var image = $scope.game1Page.ImageBoxArray;
          $scope.draggable = [];
          $scope.droppable = [];
          $scope.select2Options = {
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function(m) { return m; }
          };
          $scope.addToDraggable = function(){
            $scope.draggable.push($scope.dragSelected);
          };
          $scope.addToDroppable = function() {
            $scope.droppable.push($scope.dropselected);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: 'lg',
        resolve:{
          page: function () {
            return $scope.updatedPageData;
          }
        }

      });
    };
    $scope.browse = function () {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/canvas/image_model.html',
        controller: function($scope, $modalInstance){
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
          $scope.addImage = function (img) {
            $modalInstance.close(img);
          };
        },
        size: 'xs'

      });
      modalInstance.result.then(function (newImage) {
        $rootScope.$broadcast('newImageElement', newImage);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    $rootScope.$on('pageData',function(event, data){
      $scope.updatedPageData = data;
    });
    $scope.saveModifications = function () {
      $scope.myOverlay = 'overlay-block';
      var canvas = $('.canvasdiv').get(0);
      html2canvas(canvas,{
        onrendered: function(can)
        {
          $('.canvas').find('.handler').remove();
          $('.canvas').find('.active').removeClass();
          var thumbnail = can.toDataURL();
          var charSeq = 'base64,';
          var indexOfBase64 = thumbnail.indexOf(charSeq);
          thumbnail = thumbnail.substring(indexOfBase64+charSeq.length);
          savePage(thumbnail);
        },
        proxy:appConfig.apiUrl+'/proxy'
      });
      function savePage(thumb){
        $scope.updatedPageData.thumbnail = thumb;
        canvasFactory.updateCanvas({bookID: $stateParams.BookID, page:$scope.updatedPageData}).success(function (data, status, headers, config) {
          $scope.updatedPageData.thumbnail = data.thumbnail;
          $scope.myOverlay = '';
          toaster.pop('success', 'Page updated.');
        }).error(function (data, status, headers, config) {
              toaster.pop('error', 'Error while Loading pages.');
            });
      }

    };
    $scope.createPage = function () {
      $scope.myPromise = canvasFactory.createPage({bookID: $stateParams.BookID}).success(function (data, status, headers, config) {
        var newPage = {id: data, top: 0, left: 0, height: 768, width: 1024, thumbnail: '', ImageBoxArray: []};
        pagesData.push(newPage);
        toaster.pop('success', 'New Page Created.');
        $state.go('book.canvas.page', { pageId: newPage.id});
      }).error(function (data, status, headers, config) {
            toaster.pop('error', 'Error while create Page.');
          });
    };
  }]);

