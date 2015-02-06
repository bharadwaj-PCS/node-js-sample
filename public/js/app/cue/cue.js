/**
 * Created by bharadwaj on 28/1/15.
 */
'use strict';
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


      $scope.editCue = function (cue,index) {
        var cpyCue = angular.copy(cue);
        var modelInstance = $modal.open({
          templateUrl: 'tpl/cue/cue_edit.html',
          controller: 'cueEditController',
          size: 'lg',
          resolve: {
            cue: function () {
              return cpyCue;
            }
          }
        });
        modelInstance.result.then(function (updateCue) {
          //console.log(updateCue);
          cueFactory.updateCue(updateCue)
            .success(function (result) {
              //console.log(result);
              $scope.cueData[index] = updateCue;
              toaster.pop('success', 'Successfully updated the cue');
            }).error(function (err) {
              console.log(err);
            })
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };

      $scope.openDeleteCueModal = function (cue, $index, flag) {
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
            flag: function () {
              return flag;
            }
          }
        });
        modalInstance.result.then(function (data) {
          console.log(data);
          cueFactory.deleteCue(data).success(function (res) {
            toaster.pop('success', 'Successfully deleted the cue');
            $scope.cueData.splice($index, 1);

          }).error(function (err) {
            toaster.pop('error', 'Error while deleting the cue');
          });
        },function () {
          console.log('Modal dismissed at: ' + new Date());
        })
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
  .controller('cueCreateController', ['$scope', 'cueFactory', 'toaster', function ($scope, cueFactory, toaster) {
    console.log("in cueCreatCtrl");
    $scope.cue = {
      text:'',
      bgcolor:'',
      type:'',
      background_url:'',
      background_url_data:'',
      background_url_wide:'',
      background_url_wide_data:''
    };
    var originalCue = angular.copy($scope.cue);

    $scope.onBGSelect = function ($files) {
      var file = $files[0];
      console.log(file,"file");
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);
        fd.append('key', 'cue/'+file.name);

        var reader = new FileReader();
        reader.onload = (function (theFile) {
          return function (e) {
            $scope.$apply(function () {
              $scope.cue.background_url_data = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);
        cueFactory.uploadImage(fd).success(function (result) {
          console.log(result);
          $scope.cue.background_url = result.url;
        }).error(function (err) {
          console.log(err);
        });

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
              $scope.cue.background_url_wide_data = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);
        cueFactory.uploadImage(fd).success(function (result) {
          $scope.cue.background_url_wide = result.url;
        }).error(function (err) {
          console.log(err);
        });

      } else {
        toaster.pop('error', "File Extension", "Only JPEG/PNG are allowed.");
        $('input[name="bgimagewide"]').val("");
      }
    };
    $scope.addCue = function (cueModel, formData) {

      $scope.myPromise = cueFactory.createCue(cueModel).success(function (result) {
        console.log(result);
        toaster.pop('success', 'cues created sucessfuly.');
        $scope.resetCue();
      }).error(function () {
        toaster.pop('error', 'Error while creating cues.');
      })
    };
    $scope.resetCue = function () {
      $scope.cue = angular.copy(originalCue);
      $scope.addForm.$setPristine();
    };

  }]);

angular.module('app')
  .controller('cueDeleteInstanceCtrl',['$scope','$modalInstance','cue','flag', function ($scope, $modalInstance, cue, flag) {

    $scope.flag = flag;
    $scope.deleteItem = function () {
      var data = {
        id: cue.id,
        hard: flag
      };
      //console.log(data, "from deleCtrl");
      $modalInstance.close(data);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);