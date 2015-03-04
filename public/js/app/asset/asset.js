/**
 * Created by bharadwaj on 23/2/15.
 */
angular.module('app')
  .controller('assetCreateController', ['$scope', '$modal', 'toaster', 'appConfig', 'assetFactory','categoryFactory',
    function ($scope, $modal, toaster, appConfig, assetFactory,categoryFactory) {
      //console.log("in asset create controller");
      $scope.typesOfAsset = [
        //{name:'Book', value:'BOOK'},
        {name:'Image', value:'IMAGE'},
        {name:'Text', value:'TEXT'}
      ];
      $scope.labelList = appConfig.label;
      $scope.asset = {};
      $scope.asset.type = 'IMAGE';
      $scope.asset.label = 'EXPRESSION';
      $scope.categoryList = {};
      var copyAsset = angular.copy($scope.asset);
      var fd;
      $scope.onBGSelect = function ($files) {
        var file = $files[0];
        if(!file){return;}
        console.log(file,"file");
        if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
          fd = new FormData();
          fd.append('content', file);
          //fd.append('key', 'cue/'+file.name);

          var reader = new FileReader();
          reader.onload = (function (theFile) {
            return function (e) {
              $scope.$apply(function () {
                $scope.asset.content = e.target.result;
                //$scope.asset.files = fd;
              });
            };
          })(file);

          reader.readAsDataURL(file);

        } else {
          toaster.pop('error', "File Extension", "Only JPEG/PNG are allowed.");
          $('input[name="bgimage"]').val("");
        }

      };

      $scope.createAsset = function(){
        if(validateCreateAsset()){
          $scope.asset.categories = [];
          $scope.categoryList.selectedCategories.forEach(function(ele,index){
            console.log(ele.name);
            $scope.asset.categories.push(ele.name);
          });
          for(var keys in $scope.asset){
            //console.log($scope.asset[keys]);
            fd.append(keys,$scope.asset[keys]);
          }
          $scope.myPromise = assetFactory.createAsset(fd).success(function(result){
            console.log(result);
            toaster.pop('success','Asset created successfully.');
            $scope.resetAsset();

          }).error(function(err){
            console.log(err);
          });
        }
        console.log($scope.asset,fd);
        console.log($scope.categoryList.selectedCategories);

      };
      $scope.resetAsset = function () {
        $scope.asset = copyAsset;
      };
      $scope.totalCategoryList = [];
      $scope.refreshAddresses = function(category) {
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
          $scope.totalCategoryList = $scope.totalCategoryList || [];
        }
      };
      function setCategoryList(result){
        var temp = $scope.totalCategoryList.concat(result);
        $scope.totalCategoryList = _.uniq(temp,'id');
      };
      function validateCreateAsset(){
        var flag = true;
        return flag;
      }
    }]);
angular.module('app')
  .controller('assetController',['$scope', '$modal', 'toaster', 'appConfig', 'assetFactory',
    function ($scope, $modal, toaster, appConfig, assetFactory) {
      var data = {
        coverage:'ALL',
        type:'POLL',
        label:'Expression'
      };
      $scope.layoutModel = 'thumbnail';
      var paginationFlag = true;
      var offset = 0, count = 20;
      $scope.assetData = [];

      $scope.getAssets = function (offset) {
        if(paginationFlag){
          $scope.scrollClass = 'infinite-scroll-block';

          $scope.myPromise = assetFactory.getAsset(data,offset,count).success(function(result){
            if(!result.length){
              paginationFlag = false;
            }
            //console.log(result);
            $scope.assetData = $scope.assetData.concat(result.result);
            toaster.pop('success', 'Successfully Loading assets');
          }).error(function (error) {
            console.log(error);
            toaster.pop('error', 'Error while loading assets.');
          });
        }

      };

      $scope.openDeleteAssetModal = function (asset, $index) {

        var modalInstance = $modal.open({
          templateUrl: 'myDeleteContent.html',
          backdrop: 'static',
          size: 'sm',
          controller: 'assetDeleteInstanceCtrl',
          resolve: {
            asset: function () {
              return asset;
            }
          }
        });
        modalInstance.result.then(function (data) {
          console.log(data);
          assetFactory.deleteAsset(data).success(function (res) {
            toaster.pop('success', 'Successfully deleted the asset');
            $scope.assetData.splice($index, 1);

          }).error(function (err) {
            toaster.pop('error', 'Error while deleting the asset');
          });
        },function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
      $scope.editAsset = function (asset,index) {
        var cpyAsset = angular.copy(asset);
        var modelInstance = $modal.open({
          templateUrl: 'tpl/asset/asset_edit.html',
          controller: 'assetEditController',
          size: 'lg',
          resolve: {
            asset: function () {
              return cpyAsset;
            }
          }
        });
        modelInstance.result.then(function (updateAsset) {
          //console.log(updateCue);
          $scope.myPromise = cueFactory.updateAsset(updateAsset)
            .success(function (result) {
              //console.log(result);
              $scope.assetData[index] = updateAsset;
              toaster.pop('success', 'Successfully updated the cue');
            }).error(function (err) {
              console.log(err);
            })
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
      $scope.getPagination = function () {
        $scope.getAssets(data,offset);
        offset = offset + count;
      };

    }]);
angular.module('app')
  .controller('assetDeleteInstanceCtrl',['$scope','$modalInstance','asset',
    function ($scope, $modalInstance, asset) {
      console.log('in del inst ctrl');
      $scope.deleteItem = function () {
        var data = {
          asset_id: asset.id
        };
        //console.log(data, "from deleCtrl");
        $modalInstance.close(data);
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);