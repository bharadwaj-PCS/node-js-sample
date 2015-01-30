/**
 * Created by bharadwaj on 29/1/15.
 */

angular.module('app').controller('cueEditController',['$scope', 'cue', function ($scope,cue) {
    //console.log("In CueEdit",cue);
    var originalCue = angular.copy(cue);
    $scope.cue = cue;
    /*$scope.localWideBackgroundImage = cue.background_url_wide;
    $scope.localBackgroundImage = cue.background_url ;*/
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
              $scope.cue.background_url = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);

       /* $scope.addCampaignPromise = $http.post(urlBase + '/s3/upload', fd, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        })
          .success(function(data) {
            $scope.campaignDefaultModel.burl = data.result;
          })
          .error(function() {
            toaster.pop('error', "network", "Uploading file failed.");
          });*/
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
    $scope.updateCue = function (cueModel,formData) {
      console.log(cueModel,formData);
    };
    $scope.resetCue = function (cueModel, formData) {
      $scope.cue = originalCue;
      $scope.cue.text = originalCue.text;
    };
    $scope.cancel = function () {

    };

  }]);