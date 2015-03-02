/**
 * Created by bharadwaj on 29/1/15.
 * Handles the update functionality of the cue.
 *
 */
'use strict';
angular.module('app').controller('cueEditController',['$scope','$modalInstance', 'cue','cueFactory','$q',
  function ($scope,$modalInstance,cue,cueFactory,$q) {
    //console.log("In CueEdit",cue);
    var originalCue = angular.copy(cue);
    $scope.cue = cue;
    $scope.background_url_data = '';
    $scope.background_url_wide_data = '';
    var originalCue = angular.copy(cue);
    var fileDataAry = [];
    /**
     * This method is called when the background image file button is clicked.
     * @param $files
     */
    $scope.onBGSelect = function($files) {
      var file = $files[0];
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);
        fd.append('key', 'cue/bg/'+file.name);

        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            $scope.$apply(function() {
              $scope.background_url_data = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);
        fileDataAry.push(cueFactory.uploadImage(fd));

      } else {
        toaster.pop('error', 'File Extension', 'Only JPEG/PNG are allowed.');
        $('input[name="bgimage"]').val("");
      }


    };
    /**
     * This method is called when the wide background button button is clicked and a file is uploaded
     * @param $files accepts the file that is present in a file button Ref: ng-file upload
     */
    $scope.onBGWideSelect = function($files) {
      var file = $files[0];
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);
        fd.append('key', 'cue/bg_wide/'+file.name);

        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            $scope.$apply(function() {
              $scope.background_url_wide_data = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);
        fileDataAry.push(cueFactory.uploadImage(fd));

      } else {
        toaster.pop('error', 'File Extension', 'Only JPEG/PNG are allowed.');
        $('input[name="bgimagewide"]').val("");
      }
    };
    /**
     * This method is called when update button of cue_view.html is clicked
     * @param cueModel $scope.cueModel, it has all the data required for cue
     */
    $scope.updateCue = function (cueModel) {
      cueModel.cue_id = cueModel.id;
      $scope.imagePromise = $q.all(fileDataAry).then(function (result) {
        result.forEach(function (ele) {
          var url = ele.data.url;
          if(url.indexOf('cue/bg_wide') != -1){
            cueModel.background_url_wide = url;
          }else if(url.indexOf('cue/bg')){
            cueModel.background_url = url;
          }
        });
        $modalInstance.close(cueModel);//mytrack

      });

    };
    $scope.resetCue = function (cueModel, formData) {
      $scope.cue =  angular.copy(originalCue);
      $scope.cue.text = originalCue.text;
    };
    $scope.cancel = function () {
      $scope.cue =  angular.copy(originalCue);
      $modalInstance.dismiss('cancel');
    };

  }]);