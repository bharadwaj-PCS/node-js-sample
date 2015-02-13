/**
 * Created by bharadwaj on 13/2/15.
 */
'use strict';
angular.module('app').controller('announcementEditController',['$scope','$modalInstance', 'announcement','announcementFactory',
  function ($scope,$modalInstance,announcement,announcementFactory){
    console.log("announcement edit");
    var originalAnnouncement = angular.copy(announcement);
    $scope.announcement = announcement;
    $scope.EditAnnouncement = function (announcement,announcementEdit) {
      $modalInstance.close(announcement);
    };
  }]);