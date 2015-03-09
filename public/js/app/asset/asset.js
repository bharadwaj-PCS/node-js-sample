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
  .controller('assetController',['$scope', '$modal', 'toaster', 'appConfig', 'assetFactory','categoryFactory','$q',
    function ($scope, $modal, toaster, appConfig, assetFactory, categoryFactory,$q) {

      $scope.labelList = appConfig.label;
      $scope.assetTitle = {
        label:$scope.labelList[0].value
      };

      $scope.layoutModel = 'thumbnail';
      var paginationFlag = true;
      var offset = 0, count = 10;
      var countCpy = count;
      $scope.assetData = [];

      $scope.getAssets = function (offset,label) {
        if(paginationFlag){
          $scope.scrollClass = 'infinite-scroll-block';

          $scope.myPromise = assetFactory.getAsset(offset,count,label).success(function(result){
            if(!result.result.length){
              paginationFlag = false;
            }
            console.log(result.result);
            $scope.assetData = $scope.assetData.concat(result.result);
            if(!offset){
              toaster.pop('success', 'Successfully Loaded assets');
            }
          }).error(function (error) {
            console.log(error);
            toaster.pop('error', 'Error while loading assets.');
          });
        }

      };

      $scope.openDeleteAssetModal = function (asset, index) {

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
        modelInstance.result.then(function (categoriesList) {
          //var categoryAry = categoriesList;
          var originalAssetAry = $scope.assetData[index].categories;
          //detach category

          var oriCategory = {};
          var track = [];
          var assetId = $scope.assetData[index].id;
          originalAssetAry.forEach(function(ele){
            //oriCategory[''+ele.id] = true;
            var data = {
              asset_id:assetId,
              name:ele.name
            };
            track.push(categoryFactory.detachCategoryToAsset(data));
          });
          categoriesList.forEach(function (ele) {
              var data = {
                asset_id:assetId,
                name:ele.name
              };
              track.push(categoryFactory.attachCategoryToAsset(data))
          });
          //console.log(track);
          if(track.length){
            $scope.myPromise = $q.all(track).then(function (result) {
              if(result[0].statusText === 'OK'){
                $scope.assetData[index].categories = categoriesList;
                toaster.pop('success','Updated the asset successfully');
              }

            });
          }
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
      $scope.getPagination = function () {
        var label = setLabel();
        $scope.getAssets(offset,label);
        offset = offset + count;
      };
      function setLabel(){
        var labelAry = $scope.assetTitle.label.toLowerCase().split('');
        labelAry[0] =  labelAry[0].toUpperCase();
        var label = labelAry.join('');
        return label;
      }
      $scope.loadLabeledAssets = function (e,s) {
        var label = setLabel();
        offset = 0, count = countCpy;
        paginationFlag = true;
        console.log(label,offset,count);
        $scope.assetData = [];
        $scope.getPagination();

      }

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