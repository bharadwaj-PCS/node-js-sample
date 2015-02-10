/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
angular.module('app')
  .controller('notificationCreateController', ['$scope', '$modal', 'toaster', 'appConfig', 'cueFactory',
    function ($scope, $modal, toaster, appConfig, cueFactory) {
      $scope.notification = {
        type: 'Announcement',
        text:'',
        content:'',
        push:'NOW',
        date:'',
        valid:'1',
        format:'dd/MMM/yy'
      };
      console.log("in notificationCreateController");
      $scope.minDate = new Date();
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };
      $scope.createNotification = function (addForm, notification) {
        console.log($scope.notification);
      }
    }]);