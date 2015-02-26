/**
 * Created by bharadwaj on 29/1/15.
 */
'use strict';
angular.module('app').controller('cueEditController',['$scope','$modalInstance', 'cue','cueFactory',
  function ($scope,$modalInstance,cue,cueFactory) {
    //console.log("In CueEdit",cue);
    var originalCue = angular.copy(cue);
    $scope.cue = cue;
    $scope.background_url_data = '';
    $scope.background_url_wide_data = '';
  var originalCue = angular.copy(cue);
    $scope.onBGSelect = function($files) {
      var file = $files[0];
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);

        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            $scope.$apply(function() {
              //$scope.localBackgroundImage = e.target.result;
              $scope.background_url_data = e.target.result;
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
    $scope.onBGWideSelect = function($files) {
      var file = $files[0];
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);

        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            $scope.$apply(function() {
              //$scope.localWideBackgroundImage = e.target.result;
              $scope.background_url_wide_data = e.target.result;
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
    $scope.updateCue = function (cueModel,formData) {
      console.log(cueModel,formData);
      cueModel.cue_id = cueModel.id;
      //cueModel.bgcolor = '#'+cueModel.bgcolor;
      $modalInstance.close(cueModel);
    };
    $scope.resetCue = function (cueModel, formData) {
      $scope.cue =  angular.copy(originalCue);
      $scope.cue.text = originalCue.text;
    };
    $scope.cancel = function () {
      $scope.cue =  angular.copy(originalCue);
      $modalInstance.dismiss('cancel');
      //$scope.$apply();
    };

  }]);