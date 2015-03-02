/**
 * Created by bharadwaj on 26/2/15.
 */
'use strict';
angular.module('app').controller('categoryEditController',['$scope','$modalInstance', 'category','categoryFactory','cueFactory','$q',
  function ($scope,$modalInstance,category,categoryFactory, cueFactory,$q) {
    console.log('in category edit ctrl');
    $scope.category = category;
    var oriCategory = angular.copy(category);
    var track = [];
    $scope.onBGSelect = function ($files) {
      var file = $files[0];
      if(!file){return;}
      console.log(file,"file");
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);
        fd.append('key', 'category/icon/'+file.name);

        var reader = new FileReader();
        reader.onload = (function (theFile) {
          return function (e) {
            $scope.$apply(function () {
              $scope.icon_url_data = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);
        track.push(cueFactory.uploadImage(fd));
        /*cueFactory.uploadImage(fd).success(function (result) {
         console.log(result);
         $scope.cue.background_url = result.url;
         }).error(function (err) {
         console.log(err);
         });*/

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
        fd.append('key', 'category/bg/'+file.name);

        var reader = new FileReader();
        reader.onload = (function (theFile) {
          return function (e) {
            $scope.$apply(function () {
              //$scope.localWideBackgroundImage = e.target.result;
              $scope.background_url_data = e.target.result;
            });
          };
        })(file);

        reader.readAsDataURL(file);
        track.push(cueFactory.uploadImage(fd));
        /*cueFactory.uploadImage(fd).success(function (result) {
         $scope.cue.background_url_wide = result.url;
         }).error(function (err) {
         console.log(err);
         });*/
      } else {
        toaster.pop('error', "File Extension", "Only JPEG/PNG are allowed.");
        $('input[name="bgimagewide"]').val("");
      }
    };
    $scope.updateCategory = function () {
      console.log($scope.category,track);
      $scope.myPromise = $q.all(track).then(function (result) {
        result.forEach(function (ele) {
          var url = ele.data.url;
          if(url.indexOf('category/icon') != -1){
            $scope.category.icon_url = url;
          }else if(url.indexOf('category/bg')){
            $scope.category.background_url = url;
          }
        });
        console.log($scope.category,'category gng to create');
        $modalInstance.close($scope.category);
        /*$scope.myPromise = categoryFactory.updateCategory($scope.category)
          .success(function (data) {
            console.log(data);
            toaster.pop('success','Category updated successfully');
            $scope.resetCategory();
          })
          .error(function (err) {
            toaster.pop('error','Unable to update category');
          });*/
      });

    };
    $scope.cancel = function(){
      $scope.category =  angular.copy(oriCategory);
      $modalInstance.dismiss('cancel');
    };
  }]);