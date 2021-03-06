/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
//THis module allows the user to create an announcement with the following features
//User can upload a back ground image
//user can upload a headline
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
      console.log('in announcementCreateController');
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
      console.log('in announcementViewController');
      $scope.layoutModel = 'thumbnail';
      $scope.myPromise = announcementFactory.getAllAnnouncement().success(function (data) {
        $scope.announcementData = data;
      }).error(function (error) {
        console.log(error);
      });
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
      $scope.notifiyAnnouncement = function(announcement,index){
        console.log('firing notification');
        var modelInstance = $modal.open({
          templateUrl: 'tpl/announcement/announcement_notify.html',
          controller: 'announcementNotifyController',
          size: 'lg',
          resolve: {
            announcement: function () {
              return announcement;
            }
          }
        });
        modelInstance.result.then(function (notifyAnnouncement) {
          console.log(notifyAnnouncement);
          announcementFactory.notifyAnnouncement(notifyAnnouncement)
            .success(function (result) {
              //$scope.announcementData[index] = updateAnnouncement;
              toaster.pop('success', 'sent!!');
            }).error(function (err) {
              console.log(err);
            });
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      }
    }]);
angular.module('app')
  .controller('announcementDeleteController',['$scope','$modalInstance','announcement', function ($scope, $modalInstance, announcement) {
    $scope.deleteItem = function () {
      var data = {
        id: announcement.id
      };
      //console.log(data, 'from deleCtrl');
      $modalInstance.close(data);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);//announcementNotifyController
angular.module('app')
  .controller('announcementNotifyController',['$scope','$modalInstance','announcement','$http','announcementFactory', function ($scope, $modalInstance, announcement, $http, announcementFactory) {
    $scope.itemsToNotify = [
      {name:'All Users', value:'ALL_USERS'},
      {name:'Platform', value:'PLATFORM'},
      {name:'Gender', value:'GENDER'},
      {name:'Inactive Users', value:'INACTIVE_USERS'},
      {name:'All Groups', value:'ALL_GROUPS'},
      {name:'User Group', value:'USER_GROUP'},
      {name:'Users', value:'USERS'},
      {name:'Friends', value:'FRIENDS'}
    ];
    $scope.validate = {};
    $scope.notify = true;
    $scope.announcement = announcement;
    $scope.announcement.notify_to = 'ALL_USERS';
    $scope.notifyAnnouncement = function () {
      if(validateNotifyForm()){
        if($scope.announcement.notify_to === 'FRIENDS' || $scope.announcement.notify_to === 'USER_GROUP'){
          console.log($scope.announcement);
          $scope.announcement.user_id = $scope.userInfo.selected.id;
        }else if($scope.announcement.notify_to === 'USERS'){
          $scope.announcement.users = [];
          $scope.userInfo.selectedUsers.forEach(function (ele, index) {
            $scope.announcement.users.push(ele.id);
          });
          console.log($scope.announcement,'USERS');
        }
        $modalInstance.close($scope.announcement);
      }
    };
    $scope.setModel = function (announcement) {
      if(announcement.notify_to === 'ALL_USERS' || announcement.notify_to === 'INACTIVE_USERS' || announcement.notify_to === 'ALL_GROUPS'){
        announcement.platform = '';
        announcement.gender = '';
      } else if(announcement.notify_to === 'PLATFORM'){
        announcement.gender = '';
      }else if(announcement.notify_to === 'GENDER'){
        announcement.platform = '';
      }
    };
    function validateNotifyForm(){
      var flag = true;
      if($scope.announcement.notify_to === 'PLATFORM' && !$scope.announcement.platform){
        $scope.validate.platform = true;
        flag = false;
      }else if($scope.announcement.notify_to === 'GENDER' && !$scope.announcement.gender){
        $scope.validate.gender = true;
        flag = false;
      }else if($scope.announcement.notify_to === 'USERS' && !$scope.userInfo.selectedUsers.length){
        $scope.validate.users = true;
        flag = false;
      }else if(($scope.announcement.notify_to === 'FRIENDS' || $scope.announcement.notify_to === 'USER_GROUP') && !$scope.userInfo.selectedUsers.length) {
        console.log("select user");
        $scope.validate.friends = true;
        flag = false;
      }
      return flag;
    };
    $scope.userInfo = {};
    $scope.refreshAddresses = function(address) {
      var data = {
        sort_param:'name',
        sort_order:'DESC',
        name_like:address
      };
      if(address) {
        announcementFactory.searchUsers(data).success(function(result){
          console.log(result);
          //$scope.addresses = result;
          setUserList( result);

        }).error(function(err){
          console.log(err);
        });
      }else {
        $scope.usersList = $scope.usersList || [];
      }
    };
    $scope.userInfo.selectedUsers = [];
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
    function setUserList(result){
      console.log($scope.userList);
      var temp = $scope.usersList.concat(result);
      $scope.usersList = _.uniq(temp,'id');
    };
  }]);