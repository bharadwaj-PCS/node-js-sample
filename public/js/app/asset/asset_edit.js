/**
 * Created by bharadwaj on 23/2/15.
 */
'use strict';
angular.module('app').controller('assetEditController',['$scope','$modalInstance', 'asset','assetFactory','categoryFactory',
  function ($scope,$modalInstance,asset,assetFactory,categoryFactory) {
    console.log("In assetEdit",asset);
    $scope.asset = asset;
    $scope.multipleDemo = {};
    $scope.multipleDemo.categories = asset.categories;


    $scope.getCategories = function(category) {
      var data = {
        sort_param:'name',
        name_like:category
      };
      if(category) {
        categoryFactory.searchCategory(data).success(function (data) {
          console.log(data);
          setCategoryList(data);
        }).error(function (error) {
          console.log(error);
        });
      }else {
        asset.categories = asset.categories;
      }
    };
    function setCategoryList(result){
      var temp = asset.categories.concat(result);
      asset.categories = _.uniq(temp,'id');
    };
    $scope.editAsset = function () {

    $modalInstance.close($scope.multipleDemo.categories);
    };
  }]);
