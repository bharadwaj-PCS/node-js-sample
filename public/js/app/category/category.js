/**
 * Created by bharadwaj on 26/2/15.
 */
angular.module('app')
  .controller('categoryController', ['$scope', '$modal', 'toaster', 'appConfig', 'categoryFactory','$q',
    function ($scope, $modal, toaster, appConfig, categoryFactory,$q) {
      'use strict';
      $scope.layoutModel = 'thumbnail';
      var offset = 0, count = 20;
      $scope.categoriesData = [];
      var paginationFlag = true;
      console.log('ion cat ctrl');
      $scope.getAllCategories = function (offset) {
        if(paginationFlag){
          $scope.scrollClass = 'infinite-scroll-block';

          $scope.myPromise = categoryFactory.getCategoriesList(offset, count).success(function (data) {
            console.log(data);
            if(!data.length){
              paginationFlag = false;
            }
            $scope.categoriesData = $scope.categoriesData.concat(data.result);
            if (!offset) {
              toaster.pop('success', 'Successfully Loading cues');
            }
          }).error(function () {
            toaster.pop('error', 'Error while loading books.');
          });
        }

      };
      $scope.getPagination = function () {
        $scope.getAllCategories(offset);
        offset = offset + count;
      };
      $scope.editCategory = function (category,index) {
        var cpyCategory = angular.copy(category);
        var modelInstance = $modal.open({
          templateUrl: 'tpl/category/category_edit.html',
          controller: 'categoryEditController',
          size: 'lg',
          backdrop: 'static',
          resolve: {
            category: function () {
              return cpyCategory;
            }
          }
        });
        modelInstance.result.then(function (updateCategory) {
          console.log(updateCategory,'in update func');
          categoryFactory.updateCategory(updateCategory).success(function (result) {
            $scope.categoriesData[index] = updateCategory;
            toaster.pop('success', 'Successfully updated the category');
          }).error(function (err) {
            console.log(err);
            toaster.pop('error','Unable to update category');
          });
        }, function () {
          //console.log('Modal dismissed at: ' + new Date());
        });
      };
    }]);
angular.module('app')
  .controller('categoryCreateController', ['$scope', 'categoryFactory', 'toaster', 'cueFactory','appConfig','$q',
    function ($scope, categoryFactory, toaster, cueFactory,appConfig, $q) {
      var track = [];
      $scope.category = {
        name: '',
        description: '',
        icon_url: '',
        background_url:''
      };
      $scope.background_url_data = '';
      $scope.icon_url_data = '';
      var originalCategory = angular.copy($scope.category);
      $scope.resetCategory = function () {
        $scope.category = originalCategory;
        $scope.addForm.$setPristine();
        $scope.background_url_data = '';
        $scope.icon_url_data = '';
      };
      /*$scope.openDeleteCategoryModal = function (category, $index) {
        var modalInstance = $modal.open({
          templateUrl: 'myDeleteContent.html',
          backdrop: 'static',
          size: 'sm',
          controller: 'categoryDeleteInstanceCtrl',
          resolve: {
            category: function () {
              return category;
            }
          }
        });
        modalInstance.result.then(function (data) {
          console.log(data);
          categoryFactory.deleteCategory(data).success(function (res) {
            toaster.pop('success', 'Successfully deleted the category');
            $scope.categoriesData.splice($index, 1);

          }).error(function (err) {
            toaster.pop('error', 'Error while deleting the cue');
          });
        },function () {
          console.log('Modal dismissed at: ' + new Date());
        })
      };*/

      $scope.addCategory = function () {
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
          $scope.myPromise = categoryFactory.createCategory($scope.category)
            .success(function (data) {
              console.log(data);
              toaster.pop('success','Category created successfully');
              $scope.resetCategory();
            })
            .error(function (err) {
                toaster.pop('error','Unable to create category');
              });
        });
      };
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
        } else {
          toaster.pop('error', "File Extension", "Only JPEG/PNG are allowed.");
          $('input[name="bgimagewide"]').val("");
        }
      };

    }]);