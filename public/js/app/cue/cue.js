/**
 * Created by bharadwaj on 28/1/15.
 */
'use strict';
/**
 * This would enable the
 */
angular.module('app')
  .controller('cueController', ['$scope', '$modal', 'toaster', 'appConfig', 'cueFactory',
    function ($scope, $modal, toaster, appConfig, cueFactory) {
      'use strict';
      $scope.layoutModel = 'thumbnail';
      var offset = 0, count = 20;
      $scope.cueData = [];
      $scope.test = "Helo world";
      $scope.setTest = function () {
        $scope.test = 'my test';
      };
      var flag = true;
      this.message = 'hello';
      $scope.getCues = function (offset) {
        if(flag){
          $scope.scrollClass = 'infinite-scroll-block';

          $scope.myPromise = cueFactory.getCueList(offset, count).success(function (data) {
            if(!data.length){
              flag = false;
            }
            $scope.cueData = $scope.cueData.concat(data.result);
            if (!offset) {
              toaster.pop('success', 'Successfully Loading cues');
            }
          }).error(function () {
            toaster.pop('error', 'Error while loading books.');
          });
        }

      };

      $scope.getPollOptions = function (cueData) {
        console.log(cueData,'getPollOptions');
        cueFactory.getPollCueOptions(cueData.id).success(function (data) {
          console.log(data);
          cueData.options = data.result.options;
        }).error(function (err) {
          console.log(err);
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
          $scope.myPromise = cueFactory.updateCue(updateCue)
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
  .controller('cueCreateController', ['$scope', 'cueFactory', 'toaster', 'assetFactory','appConfig','$q',
    function ($scope, cueFactory, toaster, assetFactory,appConfig, $q) {
    $scope.cue = {
      text:'',
      bgcolor:'',
      type:'',
      background_url:'',
      //background_url_data:'',
      //background_url_wide_data:'',
      background_url_wide:''
    };
      var optionFormCollection = {};

      $scope.background_url_data = '';
      $scope.background_url_wide_data = '';
      $scope.options = {
        option1:{
          text:'',
          content:''
        },
        option2:{
          text:'',
          content:''
        },
        option3:{
          text:'',
          content:''
        },
        option4:{
          text:'',
          content:''
        },
        count:''
      };
    var originalCue = angular.copy($scope.cue);
    var originalOptions = angular.copy($scope.options);
      //imageBrowse.onBGSelect();

    $scope.onBGSelect = function ($files) {
      var file = $files[0];
      if(!file){return;}
      console.log(file,"file");
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);
        fd.append('key', 'cue/'+file.name);

        var reader = new FileReader();
        reader.onload = (function (theFile) {
          return function (e) {
            $scope.$apply(function () {
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
    $scope.onOptionSelect = function ($files, value) {
      var file = $files[0];
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        var fd = new FormData();
        fd.append('content', file);
        optionFormCollection[value] = fd;

        var reader = new FileReader();
        reader.onload = (function (theFile) {
          return function (e) {
            $scope.$apply(function () {
              //$scope.localWideBackgroundImage = e.target.result;
              //optionModel = e.target.result;
              switch (value){
                case 1:
                  $scope.options.option1.content = e.target.result;
                  break;
                case 2:
                  $scope.options.option2.content = e.target.result;
                  break;
                case 3:
                  $scope.options.option3.content = e.target.result;
                  break;
                case 4:
                  $scope.options.option4.content = e.target.result;
                  break;
              }
            });
          };
        })(file);

        reader.readAsDataURL(file);
      } else {
        toaster.pop('error', "File Extension", "Only JPEG/PNG are allowed.");
        //$('input[name="bgimagewide"]').val("");
      }
    };
    $scope.addCue = function (cueModel, formData) {
      console.log(cueModel);
      if(validateCueCreation(cueModel)){
        if(cueModel.type === 'POLL'){
          //update image to assert
          var track = [];
          var assetsIdCollection = [];
          for(var keys in optionFormCollection){
            var fd = optionFormCollection[keys];
            fd.append('type','IMAGE');
            fd.append('description',$scope.options["option"+keys].text);
            fd.append('label','Poll');
            fd.append('created_at',+(new Date()));
            track.push(assetFactory.createAsset(fd));
          }


          /*_.each(optionFormCollection, function (col) {
           track.push(assetFactory.createAsset(col));
           });*/
          $scope.myPromise = $q.all(track).then(function (data){
            //console.log(arguments,'arguments');
            data.forEach(function(ele,index){
              //console.log(ele.data.asset_id);
              assetsIdCollection.push(ele.data.asset_id);
            });
            cueModel.polls = assetsIdCollection;
            console.log(assetsIdCollection,cueModel);
            $scope.myPromise = cueFactory.createCue(cueModel).success(function (result) {
              toaster.pop('success','Successfully create a poll cue');
              $scope.resetCue();
            }).error(function (err) {
              console.log(err);
              toaster.pop('error', 'Error while creating cue.');
            });
          },function (err){
            console.log(err);
          });
        }else if(cueModel.type === 'GENERAL'){
          $scope.myPromise = cueFactory.createCue(cueModel).success(function (result) {
            console.log(result);
          }).error(function (err) {
            console.log(err);
            toaster.pop('error', 'Error while creating cue.');
          }).then(function(data){
            if(data.status === 200){
              toaster.pop('success', 'cue created sucessfuly.');
              var result = data.data.result;
              console.log($scope.options);
              $scope.resetCue();
            }
            console.log('called at then');
          });
        }
      }


    };
    $scope.resetCue = function () {
      $scope.cue = angular.copy(originalCue);
      $scope.options = angular.copy(originalOptions);
      $scope.background_url_data = '';
      $scope.background_url_wide_data = '';
      $scope.addForm.$setPristine();
    };
    function validateCueCreation(cueModel){
      var flag = true;
      console.log(cueModel);
      for(var keys in cueModel){
        if(!cueModel[keys]){
          console.log(keys);
          flag = false;
          toaster.pop('warning','Please fill all the values to create a cue.');
          break;
        }
      }
      if(!flag){
        return flag;
      }
      if(cueModel.type === 'POLL' && $scope.options.count){
        //check for options;
        var count = 0;
        for(var keys in $scope.options){
          if(keys !== 'count'){
            if($scope.options[keys].text && $scope.options[keys].content){
              count++;
            }
          }
        }
        if((count !== 2 && $scope.options.count === 'TWO') || (count !== 4 && $scope.options.count === 'FOUR')){
          flag = false;
          toaster.pop('warning','Please fill all the option of poll cue');
        }
      }else if(cueModel.type === 'POLL') {
        flag = false;
        toaster.pop('warning','Please select options for poll cue');
      }
      return flag;
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