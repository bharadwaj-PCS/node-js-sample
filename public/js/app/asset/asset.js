/**
 * Created by bharadwaj on 23/2/15.
 */
angular.module('app')
  .controller('assetCreateController', ['$scope', '$modal', 'toaster', 'appConfig', 'assetFactory',
    function ($scope, $modal, toaster, appConfig, assetFactory) {
      //console.log("in asset create controller");
      $scope.typesOfAsset = [
        //{name:'Book', value:'BOOK'},
        {name:'Image', value:'IMAGE'},
        {name:'Text', value:'TEXT'}
      ];
      $scope.asset = {};
      $scope.asset.type = 'IMAGE';
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
        console.log($scope.asset,fd);
        for(var keys in $scope.asset){
          //console.log($scope.asset[keys]);
          fd.append(keys,$scope.asset[keys]);
        }
        $scope.mypromise = assetFactory.createAsset(fd).success(function(result){
          console.log(result);
        }).error(function(err){
          console.log(err);
        });
      };
    }]);
angular.module('app')
  .controller('assetController',['$scope', '$modal', 'toaster', 'appConfig', 'assetFactory',
    function ($scope, $modal, toaster, appConfig, assetFactory) {
      console.log('in assetControl');
      var data = {
        coverage:'ALL',
        type:'POLL',
        label:'Expression'
      };
      $scope.layoutModel = 'thumbnail';
      //$scope.assetData = [];
      assetFactory.getAsset(data).success(function(result){
        //console.log(result);
        $scope.assetData = result.result;
      }).error(function (error) {
        console.log(error);
      });
      $scope.openDeleteAssetModal = function (asset, $index) {
        //console.log(cue);
        //$scope.cueData.splice($index,1);
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