/**
 * Update page Sprite
 * Update page audio
 * Update image in canvas
 * Delete image in canvas
 **/

angular.module('app').controller('canvasCtrl', ['$scope', '$modal', '$log', '$stateParams', '$rootScope', function ($scope, $modal, $log, $stateParams, $rootScope) {
  'use strict';
  var pid = $stateParams.pageId;
  var page = _.map($scope.pages, function (page) {
    if (page.id === pid) {
      $scope.page = page;
      return page;
    }
  });
  $scope.bringBack = function (data) {
    var zIndex = data.additionalInfo.zIndex;
    data.additionalInfo.zIndex = (zIndex > 0) ? (zIndex - 1) : 0;
  };
  $scope.$on('newImageElement', function (e, o) {
    var imageBox = $scope.page.ImageBoxArray;
    imageBox.push(o);
    $scope.page.ImageBoxArray = imageBox;
  });

  $scope.$emit('pageData', $scope.page);

  $scope.bringFront = function (data) {
    data.additionalInfo.zIndex += 1;
  };
  $scope.openModelToDeleteImage = function (index) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/delete.html',
      controller: function ($scope, $modalInstance) {
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
        $scope.deletePage = function () {
          $modalInstance.close();
        };
      }
    });
    modalInstance.result.then(function () {
      $scope.page.ImageBoxArray.splice(index, 1);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openModelToUpdateImage = function (data) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/update_image.html',
      controller: function ($scope, $modalInstance, image) {
        $scope.ImageBoxArray = {Image: ''};
        $scope.ImageBoxArray.Image = image;
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
        $scope.update = function (image) {
          $modalInstance.close(image.Image);
        };
      },
      resolve: {
        image: function () {
          return data.Image;
        }
      }
    });
    modalInstance.result.then(function (image) {
      $scope.page.ImageBoxArray[$scope.page.ImageBoxArray.indexOf(data)].Image = image;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openModelToTouchFX = function (data) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/touchfx_model.html',
      controller: function ($scope, $modalInstance, image, $sce) {
        $scope.imageData = image;
        if ($scope.imageData && $scope.imageData.touchfx && $scope.imageData.touchfx.tap && $scope.imageData.touchfx.tap.data) {
          $scope.url = $sce.trustAsResourceUrl($scope.imageData.touchfx.tap.data.url);
        }
        $scope.add = function (ImageBoxArray) {
          if ($scope.tap.touchOption === 'SpriteTouchFx') {
            $scope.imageData.touchfx = {tap: {'spritecount': $scope.imageData.touchfx.tap.spritecount, 'height': ImageBoxArray.additionalInfo.height, 'width': ImageBoxArray.additionalInfo.width, 'loop': $scope.imageData.touchfx.tap.loop, 'sprite': ImageBoxArray.Image, 'spritename': ImageBoxArray.ImageName}};
          } else {
            $scope.imageData.touchfx = {'tap': {action: 'audio', data: {title: ImageBoxArray.ImageName, url: ImageBoxArray.url}}};
          }
          $modalInstance.close();
        };
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      },
      resolve: {
        image: function () {
          return data;
        }
      }

    });
    modalInstance.result.then(function (image) {
      $scope.page.ImageBoxArray[$scope.page.ImageBoxArray.indexOf(data)].Image = image;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $scope.pageFX = function (data) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/pagefx.html',
      controller: function ($scope, $modalInstance, image, $sce) {
        $scope.imagePageFx = image;
        if ($scope.imagePageFx && $scope.imagePageFx.pagefx && $scope.imagePageFx.pagefx.onload && $scope.imagePageFx.pagefx.onload.data) {
          $scope.url = $sce.trustAsResourceUrl($scope.imagePageFx.pagefx.onload.data.url);
        }
        $scope.onload = {};
        $scope.add = function (ImageBoxArray) {
          if ($scope.onload.pageOption === 'AudioPageFx') {
            $scope.imagePageFx.pagefx = {'onload': {'action': 'audio', 'data': {'title': ImageBoxArray.ImageName, 'url': ImageBoxArray.url}}};
          } else {
            $scope.imagePageFx.pagefx = {'onload': {'spritecount': $scope.onload.spritecount, 'height': ImageBoxArray.additionalInfo.height, 'width': ImageBoxArray.additionalInfo.width, 'loop': $scope.onload.loop, 'sprite': ImageBoxArray.Image, 'spritename': ImageBoxArray.ImageName}};
          }
          $modalInstance.close();
        };
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      },
      resolve: {
        image: function () {
          return data;
        }
      }
    });
    modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}]);
