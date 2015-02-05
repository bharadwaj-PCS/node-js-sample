/**
 * Created by bharadwaj on 28/1/15.
 */
angular.module('app')
  .controller('cueController', ['$scope', '$modal', 'toaster', 'appConfig', 'cueFactory',
    function ($scope, $modal, toaster, appConfig, cueFactory) {
      'use strict';
      var offset = 0, count = 20;
      $scope.cueData = [];
      $scope.test = "Helo world";
      $scope.setTest = function () {
        $scope.test = 'my test';
      };
      this.message = 'hello';
      $scope.getCues = function (offset) {
        $scope.scrollClass = 'infinite-scroll-block';

        $scope.myPromise = cueFactory.getCueList(offset, count).success(function (data) {
          $scope.cueData = $scope.cueData.concat(data.result);
          if (!offset) {
            toaster.pop('success', 'Successfully Loading cues');
          }
        }).error(function () {
          toaster.pop('error', 'Error while loading books.');
        });
      };


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
        console.log("removeCue: ", cue);
      };
      $scope.openDeleteCueModal = function (cue, $index,flag) {
        //console.log(cue);
        //$scope.cueData.splice($index,1);
        var modalInstance = $modal.open({
          templateUrl: 'myDeleteContent.html',
          backdrop: 'static',
          size: 'sm',
          controller: 'cueDeleteInstanceCtrl',
          resolve: {
            cue: function () {
              return cue;
            },
            index: function () {
              return $index;
            },
            cueData: function () {
              return $scope.cueData;
            },
            flag:function(){
              return flag;
            }
          }
        });
      };
      $scope.getPagination = function () {
        $scope.getCues(offset);
        offset = offset + count;

      };
      $scope.log = [];
      $scope.superheroes = [
        'Spiderman'
      ];
      /*$scope.loadSuperheroes = function(query) {
       // An arrays of strings here will also be converted into an
       // array of objects

       return ary;
       };*/
      $scope.tagAdded = function (tag) {

      };

      $scope.tagRemoved = function (tag) {

      };

    }]);
angular.module('app')
  .controller('cueCreateController', ['$scope', 'cueFactory', function ($scope, cueFactory) {
    console.log("in cueCreatCtrl");
    $scope.cue = {};
    $scope.onBGSelect = function ($files) {
      var file = $files[0];
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);

        var reader = new FileReader();
        reader.onload = (function (theFile) {
          return function (e) {
            $scope.$apply(function () {
              //$scope.localBackgroundImage = e.target.result;
              $scope.cue.background_url = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);

      } else {
        toaster.pop('error', "File Extension", "Only JPEG/PNG are allowed.");
        $('input[name="bgimage"]').val("");
      }

    };
    $scope.onBGWideSelect = function ($files) {
      var file = $files[0];
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);

        var reader = new FileReader();
        reader.onload = (function (theFile) {
          return function (e) {
            $scope.$apply(function () {
              //$scope.localWideBackgroundImage = e.target.result;
              $scope.cue.background_url_wide = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);

        /*$scope.addCampaignPromise = $http.post(urlBase + '/s3/upload', fd, {
         transformRequest: angular.identity,
         headers: {
         'Content-Type': undefined
         }
         })
         .success(function(data) {
         $scope.campaignDefaultModel.burlwide = data.result;
         })
         .error(function() {
         toaster.pop('error', "network", "Uploading file failed.");
         });*/
      } else {
        toaster.pop('error', "File Extension", "Only JPEG/PNG are allowed.");
        $('input[name="bgimagewide"]').val("");
      }
    };
    $scope.onIconSelect = function ($files) {
      console.log("will know what else could be done here");
    };
    $scope.addCue = function (cueModel, formData) {
      console.log(cueModel);
      cueFactory.uploadImage({content: cueModel.background_url})
        .success(function (result) {
          console.log(result);
        }).error(function (error) {
          console.log(error);
        });
      /*cueFactory.createCue(cueModel).success(function (result) {
       console.log(result);
       }).error(function () {
       toaster.pop('error', 'Error while loading books.');
       })*/
    }
  }]);
angular.module('app')
  .controller('sampleCtrl', ['$scope', function ($scope) {
    console.log("sample ctrl");
    $scope.value = 'hello karma';
    $scope.password = '';
    $scope.save = true;
    $scope.grade = function () {
      var size = $scope.password.length;
      if (size > 8) {
        $scope.strength = 'strong';
      } else if (size > 3) {
        $scope.strength = 'medium';
      } else {
        $scope.strength = 'weak';
      }
    };
  }]);
angular.module('app')
  .controller('cueDeleteInstanceCtrl', function ($scope, $modalInstance, cueFactory, cue, index, cueData,flag) {

    $scope.flag = flag;
    $scope.deleteItem = function () {
      var data = {
        id: cue.id,
        hard: flag
      };

      console.log(data, "from deleCtrl");
      cueFactory.deleteCue(data).success(function (res) {
        toaster.pop('success', 'Successfully deleted the cue');
        cueData.splice(index, 1);

      }).error(function (err) {
        toaster.pop('error', 'Error while deleting the cue');
      });
      $modalInstance.close(cue);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });