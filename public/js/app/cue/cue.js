/**
 * Created by bharadwaj on 28/1/15.
 */
angular.module('app')
  .controller('cueController', ['$scope', '$window', '$rootScope', '$modal', 'toaster', 'appConfig', 'cueFactory',
  function ($scope, $window, $rootScope, $modal, toaster, appConfig, cueFactory) {
  'use strict';
    cueFactory.getCueList().success(function (data) {
      $scope.cueData = data.result;
      toaster.pop('success', 'Successfully Loading cues');
    }).error(function () {
      toaster.pop('error', 'Error while loading books.');
    });
    $scope.editCue = function (cue) {
      $modal.open({
        templateUrl: 'tpl/cue/cue_edit.html',
        controller: 'cueEditController',
        size: 'lg',
        resolve: {
          cue: function () {
            return cue;
          }
        }
      });
    };
    $scope.removeCue = function (cue) {
      console.log("removeCue: ",cue);
    };
    $scope.deleteCue = function (cue) {
      //console.log("deleteCue: ",cue);
      $modal.open({
        templateUrl: 'tpl/cue/cue_delete.html',
        controller: 'cueEditController',
        size:'sm'
      });
      /*$scope.openEditModel = function(obj) {
        var modalInstance = $modal.open({
          backdrop: 'static',
          templateUrl: 'myEditContent.html',
          controller: 'campaignEditInstanceCtrl',
          resolve: {
            data: function() {
              return obj;
            }
          }
        });
      }*/
    };
}]);