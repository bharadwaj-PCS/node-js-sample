/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
angular.module('app')
  .controller('announcementCreateController', ['$scope', '$modal', 'toaster', 'appConfig', 'announcementFactory',
    function ($scope, $modal, toaster, appConfig, announcementFactory) {
      $scope.announcement = {
        type: 'Announcement',
        text:'',
        content:''
      };
      //$scope.flag = false;
      var originalAnnoun = angular.copy($scope.announcement);
      console.log("in announcementCreateController");
      $scope.minDate = new Date();
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };
      $scope.resetAnnouncement = function () {
        $scope.announcement = angular.copy(originalAnnoun);
        $scope.addForm.$setPristine();
      };
      $scope.createAnnouncement = function () {
        if(!$scope.announcement.content){
          //$scope.flag = true;
          //console.log($scope.flag);
          //return;
        }
        $scope.myPromise = announcementFactory.createAnnouncement($scope.announcement)
          .success(function (result){
            console.log(result);
            $scope.resetAnnouncement();
            if(result.id){
              toaster.pop('success','Created announcement.');
            }else {
              toaster.pop('error','Unable to create announcement.');
            }
          });
      };
    }]);
angular.module('app')
  .controller('announcementViewController', ['$scope', '$modal', 'toaster', 'appConfig', 'announcementFactory',
    function ($scope, $modal, toaster, appConfig, announcementFactory) {
      console.log("in announcementViewController");
      $scope.announcementData = [
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
        {"id":"54dda91e81911c03005febf7","text":"test announ","content":"<p>hello</p>","created_at":1423812894,"updated_at":null},
      ];
      $scope.editAnnouncement = function (announcement,index) {
        var cpyAnnouncement = angular.copy(announcement);
        var modelInstance = $modal.open({
          templateUrl: 'tpl/announcement/announcement_edit.html',
          controller: 'announcementEditController',
          size: 'lg',
          resolve: {
            announcement: function () {
              return cpyAnnouncement;
            }
          }
        });
        modelInstance.result.then(function (updateAnnouncement) {
          console.log(updateAnnouncement);
          var data = {
            id:updateAnnouncement.id,
            text:updateAnnouncement.text,
            content:updateAnnouncement.content
          };

          announcementFactory.updateAnnouncement(data)
            .success(function (result) {
              console.log(result);
              $scope.announcementData[index] = updateAnnouncement;
              toaster.pop('success', 'Successfully updated the announcement');
            }).error(function (err) {
              console.log(err);
            })
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
      $scope.deleteAnnouncement = function (announcement,index) {
        var modalInstance = $modal.open({
          templateUrl: 'myDeleteContent.html',
          backdrop: 'static',
          size: 'sm',
          controller: 'announcementDeleteController',
          resolve: {
            announcement: function () {
              return announcement;
            }
          }
        });
        modalInstance.result.then(function (data) {
          console.log(data);
          announcementFactory.deleteAnnouncement(data)
            .success(function (result) {
              console.log(result);
              $scope.announcementData.splice(index, 1);
              toaster.pop('success','deleted successfully');
            }).error(function (err) {
              console.log(err);
            });
        });
      };
    }]);
angular.module('app')
  .controller('announcementDeleteController',['$scope','$modalInstance','announcement', function ($scope, $modalInstance, announcement) {
    $scope.deleteItem = function () {
      var data = {
        id: announcement.id
      };
      //console.log(data, "from deleCtrl");
      $modalInstance.close(data);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);