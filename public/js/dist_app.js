'use strict';

angular.module('app', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngMessages',
  'ngTouch',
  'ngStorage',
  'ui.router',
  'ui.bootstrap',
  'ngTagsInput',
  'ui.load',
  'ui.jq',
  'ui.validate',
  'oc.lazyLoad',
  'pascalprecht.translate',
  'colorpicker.module',
  'cgBusy',
  'angularFileUpload',
  'infinite-scroll',
  'toaster',
  'ng-context-menu',
  'ui.sortable',
  'ngSanitize',
  'ui.select',
  'textAngular',
  'facebook'
]);
// config

var app =
  angular.module('app')
    .config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
      function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        'use strict';
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;
      }
    ])
    .config(['$translateProvider', function ($translateProvider) {
      // Register a loader for the static files
      // So, the module will search missing translation tables under the specified urls.
      // Those urls are [prefix][langKey][suffix].
      'use strict';
      $translateProvider.useStaticFilesLoader({
        prefix: 'l10n/',
        suffix: '.json'
      });
      // Tell the module what language to use by default
      $translateProvider.preferredLanguage('en');
      // Tell the module to store the language in the local storage
      $translateProvider.useLocalStorage();
    }])
    .config(['FacebookProvider',function(FacebookProvider){
      FacebookProvider.init('804274249657423');
    }])
    .constant('appConfig', {apiUrl: 'https://smacx-node-server-dev.herokuapp.com/api/v1',groupId: '2323435234654356',
      label:[{name:'Poll',
              value:'POLL'},
        {name:'Expression',
          value:'EXPRESSION'},
        {name:'Emotion',
          value:'EMOTION'},
        {name:'Background',
          value:'BACKGROUND'},
        {name:'Feedback',
          value:'FEEDBACK'},
        {name:'Sticker',
          value:'STICKER'},
        {name:'Explore',
          value:'EXPLORE'},
        {name:'Theme',
          value:'THEME'},
        {name:'Story',
          value:'STORY'},
        {name:'Background',
          value:'BACKGROUND'}]
    });
// lazyload config

angular.module('app')
/**
 * jQuery plugin config use ui-jq directive , config the js and css files that required
 * key: function name of the jQuery plugin
 * value: array of the css js file located
 */
  .constant('JQ_CONFIG', {
    easyPieChart: ['vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
    sparkline: ['vendor/jquery/charts/sparkline/jquery.sparkline.min.js'],
    plot: ['vendor/jquery/charts/flot/jquery.flot.min.js',
      'vendor/jquery/charts/flot/jquery.flot.resize.js',
      'vendor/jquery/charts/flot/jquery.flot.tooltip.min.js',
      'vendor/jquery/charts/flot/jquery.flot.spline.js',
      'vendor/jquery/charts/flot/jquery.flot.orderBars.js',
      'vendor/jquery/charts/flot/jquery.flot.pie.min.js'],
    slimScroll: ['vendor/jquery/slimscroll/jquery.slimscroll.min.js'],
    sortable: ['vendor/jquery/sortable/jquery.sortable.js'],
    nestable: ['vendor/jquery/nestable/jquery.nestable.js',
      'vendor/jquery/nestable/nestable.css'],
    filestyle: ['vendor/jquery/file/bootstrap-filestyle.min.js'],
    slider: ['vendor/jquery/slider/bootstrap-slider.js',
      'vendor/jquery/slider/slider.css'],
    chosen: ['vendor/jquery/chosen/chosen.jquery.min.js',
      'vendor/jquery/chosen/chosen.css'],
    TouchSpin: ['vendor/jquery/spinner/jquery.bootstrap-touchspin.min.js',
      'vendor/jquery/spinner/jquery.bootstrap-touchspin.css'],
    wysiwyg: ['vendor/jquery/wysiwyg/bootstrap-wysiwyg.js',
      'vendor/jquery/wysiwyg/jquery.hotkeys.js'],
    dataTable: ['vendor/jquery/datatables/jquery.dataTables.min.js',
      'vendor/jquery/datatables/dataTables.bootstrap.js',
      'vendor/jquery/datatables/dataTables.bootstrap.css'],
    vectorMap: ['vendor/jquery/jvectormap/jquery-jvectormap.min.js',
      'vendor/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
      'vendor/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
      'vendor/jquery/jvectormap/jquery-jvectormap.css'],
    footable: ['vendor/jquery/footable/footable.all.min.js',
      'vendor/jquery/footable/footable.core.css']
  }
)
  // oclazyload config
  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    // We configure ocLazyLoad to use the lib script.js as the async loader
    'use strict';
    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      modules: [
        {
          name: 'ngGrid',
          files: [
            'vendor/modules/ng-grid/ng-grid.min.js',
            'vendor/modules/ng-grid/ng-grid.min.css',
            'vendor/modules/ng-grid/theme.css'
          ]
        },
        {
          name: 'ui.select',
          files: [
            'vendor/modules/angular-ui-select/select.min.js',
            'vendor/modules/angular-ui-select/select.min.css'
          ]
        },
        {
          name: 'angularFileUpload',
          files: [
            'vendor/modules/angular-file-upload/angular-file-upload.min.js'
          ]
        },
        {
          name: 'ui.calendar',
          files: ['vendor/modules/angular-ui-calendar/calendar.js']
        },
        {
          name: 'ngImgCrop',
          files: [
            'vendor/modules/ngImgCrop/ng-img-crop.js',
            'vendor/modules/ngImgCrop/ng-img-crop.css'
          ]
        },
        {
          name: 'angularBootstrapNavTree',
          files: [
            'vendor/modules/angular-bootstrap-nav-tree/abn_tree_directive.js',
            'vendor/modules/angular-bootstrap-nav-tree/abn_tree.css'
          ]
        },
        {
          name: 'toaster',
          files: [
            'vendor/modules/angularjs-toaster/toaster.js',
            'vendor/modules/angularjs-toaster/toaster.css'
          ]
        },
        {
          name: 'textAngular',
          files: [
            'vendor/modules/textAngular/textAngular-sanitize.min.js',
            'vendor/modules/textAngular/textAngular.min.js'
          ]
        },
        {
          name: 'vr.directives.slider',
          files: [
            'vendor/modules/angular-slider/angular-slider.min.js',
            'vendor/modules/angular-slider/angular-slider.css'
          ]
        }
      ]
    });
  }])
;
/**
 * Config for the router
 */
angular.module('app')
  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      'use strict';
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)
  .config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      'use strict';
      /*======================================================*/
      $urlRouterProvider
        .otherwise('whatsay/login');
      $stateProvider
        .state('whatsay', {
          abstract: true,
          url: '/whatsay',
          template: '<div ui-view class="fade-in-right-big smooth"></div>'
        })
        .state('whatsay.login', {
          url: '/login',
          templateUrl: 'tpl/page_signin.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/controllers/signin.js']);
              }
            ]
          }
        })
        .state('whatsay.signup', {
          url: '/signup',
          templateUrl: 'tpl/page_signup.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/controllers/signup.js']);
              }
            ]
          }
        })
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'tpl/app.html',
          controller:''
        })

        .state('app.cue', {
          url: '/cue',
          template: '<div ui-view class="fade-in-up"><div class="bg-light lter b-b wrapper-md">'+
                    '<h1 class="m-n font-thin h3">Select left panel to operate.</h1>'+
                    '</div></div>'
        })
        .state('app.cue.view', {
          url: '/view',
          views: {
            '': {
              templateUrl: 'tpl/cue/cue_view.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/cue/cue.js']);
              }
            ]
          }
        })

        .state('app.cue.create', {
          url: '/create',
          views: {
            '': {
              templateUrl: 'tpl/cue/cue_create.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/cue/cue.js']);
              }
            ]
          }
        })
        .state('app.announcement', {
          url: '/announcement',
          template: '<div ui-view class="fade-in-up"></div>'
        })
        .state('app.announcement.view', {
          url: '/view',
          views: {
            '': {
              templateUrl: 'tpl/announcement/announcement_view.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/announcement/announcement.js']);
              }
            ]
          }
        })
        .state('app.announcement.create', {
          url: '/create',
          views: {
            '': {
              templateUrl: 'tpl/announcement/announcement_create.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/announcement/announcement.js']);
              }
            ]
          }
        })
        .state('app.asset', {
          url: '/asset',
          template: '<div ui-view class="fade-in-up"></div>'
        })
        .state('app.asset.view', {
          url: '/view',
          views: {
            '': {
              templateUrl: 'tpl/asset/asset_view.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/asset/asset.js']);
              }
            ]
          }
        })
        .state('app.asset.create', {
          url: '/create',
          views: {
            '': {
              templateUrl: 'tpl/asset/asset_create.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/asset/asset.js']);
              }
            ]
          }
        })
        .state('app.category', {
          url: '/category',
          template: '<div ui-view class="fade-in-up"></div>'
        })
        .state('app.category.view', {
          url: '/view',
          views: {
            '': {
              templateUrl: 'tpl/category/category_view.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/category/category.js']);
              }
            ]
          }
        })
        .state('app.category.create', {
          url: '/create',
          views: {
            '': {
              templateUrl: 'tpl/category/category_create.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/category/category.js']);
              }
            ]
          }
        })

        /*.state('book.canvas', {
          url: '/canvas/:BookID',
          views: {
            '': {
              templateUrl: 'tpl/canvas/scrollbar.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/canvas/scrollbar.js']);
              }
            ]
          }
        })
        .state('book.canvas.page', {
          url: '/:pageId',
          views: {
            '': {
              templateUrl: 'tpl/canvas/canvas.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/canvas/canvas.js']);
              }
            ]
          }
        })*/
        /*.state('signin', {
          url:'/signin',
          views: {
            '':{
              templateUrl: 'tpl/page_signin.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/controllers/signin.js']);
              }
            ]
          }
        })*/;
    }
  ]
);
/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window',
    function ($scope, $translate, $localStorage, $window) {
      // add 'ie' classes to html
      'use strict';
      function isSmartDevice($window) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'WHATSAY',
        version: '0.0.1',
        // for chart colors
        color: {
          primary: '#7266ba',
          info: '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger: '#f05050',
          light: '#e8eff0',
          dark: '#3a3f51',
          black: '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      };

      // save settings to local storage
      if (angular.isDefined($localStorage.settings)) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function () {
        if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = {isopen: false};
      $scope.langs = {en: 'English', tel: 'తెలుగు'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || 'English';
      $scope.setLang = function (langKey) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

    }]);
/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 *
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('ui.load', [])
  .service('uiLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
    'use strict';
    var loaded = [];
    var promise = false;
    var deferred = $q.defer();

    /**
     * Chain loads the given sources
     * @param srcs array, script or css
     * @returns {*} Promise that will be resolved once the sources has been loaded.
     */
    this.load = function (srcs) {
      srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
      var self = this;
      if (!promise) {
        promise = deferred.promise;
      }
      angular.forEach(srcs, function (src) {
        promise = promise.then(function () {
          return src.indexOf('.css') >= 0 ? self.loadCSS(src) : self.loadScript(src);
        });
      });
      deferred.resolve();
      return promise;
    };

    /**
     * Dynamically loads the given script
     * @param src The url of the script to load dynamically
     * @returns {*} Promise that will be resolved once the script has been loaded.
     */
    this.loadScript = function (src) {
      if (loaded[src]) {
        return loaded[src].promise;
      }

      var deferred = $q.defer();
      var script = $document[0].createElement('script');
      script.src = src;
      script.onload = function (e) {
        $timeout(function () {
          deferred.resolve(e);
        });
      };
      script.onerror = function (e) {
        $timeout(function () {
          deferred.reject(e);
        });
      };
      $document[0].body.appendChild(script);
      loaded[src] = deferred;

      return deferred.promise;
    };

    /**
     * Dynamically loads the given CSS file
     * @param href The url of the CSS to load dynamically
     * @returns {*} Promise that will be resolved once the CSS file has been loaded.
     */
    this.loadCSS = function (href) {
      if (loaded[href]) {
        return loaded[href].promise;
      }

      var deferred = $q.defer();
      var style = $document[0].createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = href;
      style.onload = function (e) {
        $timeout(function () {
          deferred.resolve(e);
        });
      };
      style.onerror = function (e) {
        $timeout(function () {
          deferred.reject(e);
        });
      };
      $document[0].head.appendChild(style);
      loaded[href] = deferred;

      return deferred.promise;
    };
  }]);

angular.module('app').directive('browse', function () {
  'use strict';
  function uploadCtrl($scope, $http, browseFactory, toaster, $sce) {
    $scope.onUpload = function ($file) {
      $scope.uploadModel = {
        url:''
        }
      };

      var file = $file[0],
       fd = new FormData(),
       reader = new FileReader();
      fd.append('file', file);
      if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
        reader.onload = (function () {
          return function (e) {
            $scope.$apply(function () {
              $scope.uploadModel.url = e.target.result;
            });
          };
        })(file);
        reader.readAsDataURL(file);
      }

      $scope.myPromise = browseFactory.uploadTos3(fd)
        .success(function (url) {
          if ((/\.(jpg|jpeg|png)$/i).test(file.name)) {
            var img = new Image();
            reader.onload = (function () {
              return function (e) {
                $scope.$apply(function () {
                  $scope.uploadModel.url = url;
                });
              };
            })(file);
            reader.readAsDataURL(file);
          }
          toaster.pop('success', 'File Successfully Uploaded');
        }).error(function () {
          toaster.pop('error', 'Error while file upload.');
        });
    };


  return {
    restrict: 'EA',
    scope: {
      uploadModel: '=',
      myPromise: '='
    },
    controller: uploadCtrl,
    templateUrl: 'tpl/browse.html'
  };
});
angular.module('app').directive('createBook', ['$modal', '$window',
  function ($modal, $window) {
    'use strict';
    function createCtrl($scope, $modalInstance, createFactory, toaster, appConfig) {
      $scope.book = {
        title: '',
        author: '',
        imageData: '',
        zoom: 0,
        permission: 'PUBLIC',
        subType: 'FREE',
        tags: [],
        trailPeriod: 0,
        price: 0,
        currency: 'USD'
      };
      $scope.hascover = true;
      $scope.bookPermissions = appConfig.bookPermissions;
      $scope.bookSubType = appConfig.bookSubType;
      $scope.currencyType = appConfig.currencyType;

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

      $scope.createBook = function () {
        $scope.book.image = $scope.book.ImageBoxArray.ImageName;
        $scope.book.imageData = $scope.book.ImageBoxArray.Image;
        $scope.myPromise = createFactory.createBook($scope.book).success(function (data) {
          toaster.pop('success', 'Successfully created Your Book');
          $modalInstance.close();
          $window.location = '/#/book/canvas/' + data['book_id'];
        }).error(function () {
          $scope.message = 'Unexpected Error';
          toaster.pop('error', 'Unexpected Error');
        });
      };
      $scope.resetForm = function () {
        $scope.book = {
          title: '',
          author: '',
          permission: '',
          zoom: '',
          imageData: '',
          subType: '',
          tags: []
        };
        $scope.hascover = false;
      };
    }


    return {
      restrict: 'A',
      scope: {
        createBook: '&'
      },
      link: function (scope, element) {

        element.click(function () {
          $modal.open({
            templateUrl: 'tpl/bookshelf/create_book_model.html',
            controller: createCtrl,
            size: 'lg'
          });

        });
      }
    };
  }
]);



angular.module('app').directive('resizable', function () {
  'use strict';
  return {
    restrict: 'A',
    scope: {
      elementStyle: '='
    },
    link: function (scope, element) {

      element.on('click', function () {
        element.addClass('ele-active');
        element.append('<div class="handler"></div>');
        element.draggable({
          handle: '.handler',
          containment: '.canvasdiv',
          revert: false,
          stop: function (event, ui) {
            scope.$apply(function () {
              scope.elementStyle.x = ui.position.left;
              scope.elementStyle.y = ui.position.top;
            });
          }
        }).resizable({
          stop: function (event, ui) {
            scope.$apply(function () {
              scope.elementStyle.width = ui.size.width;
              scope.elementStyle.height = ui.size.height;
            });
          },
          aspectRatio: true
        });
      });

      scope.$on('$destroy', function () {
        element.removeClass('active');
      });
    }
  };
});

angular.module('app')
  .directive('setNgAnimate', ['$animate', function ($animate) {
    'use strict';
    return {
      link: function ($scope, $element, $attrs) {
        $scope.$watch(function () {
          return $scope.$eval($attrs.setNgAnimate, $scope);
        }, function (valnew) {
          $animate.enabled(!!valnew, $element);
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiButterbar', ['$rootScope', '$anchorScroll', function ($rootScope, $anchorScroll) {
    'use strict';
    return {
      restrict: 'AC',
      template: '<span class="bar"></span>',
      link: function (scope, el, attrs) {
        el.addClass('butterbar hide');
        scope.$on('$stateChangeStart', function (event) {
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });
        scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            el.addClass('hide').removeClass('active');
          });
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiFocus', function ($timeout, $parse) {
    'use strict';
    return {
      link: function (scope, element, attr) {
        var model = $parse(attr.uiFocus);
        scope.$watch(model, function (value) {
          if (value === true) {
            $timeout(function () {
              element[0].focus();
            });
          }
        });
        element.bind('blur', function () {
          scope.$apply(model.assign(scope, false));
        });
      }
    };
  });
angular.module('app')
  .directive('uiFullscreen', ['uiLoad', '$document', '$window', function (uiLoad, $document, $window) {
    'use strict';
    return {
      restrict: 'AC',
      template: '<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
      link: function (scope, el, attr) {
        el.addClass('hide');
        uiLoad.load('vendor/libs/screenfull.min.js').then(function () {
          // disable on ie11
          if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
            el.removeClass('hide');
          }
          el.on('click', function () {
            var target;
            attr.target && ( target = $(attr.target)[0] );
            screenfull.toggle(target);
          });
          $document.on(screenfull.raw.fullscreenchange, function () {
            if (screenfull.isFullscreen) {
              el.addClass('active');
            } else {
              el.removeClass('active');
            }
          });
        });
      }
    };
  }]);
/**
 * 0.1.1
 * General-purpose jQuery wrapper. Simply pass the plugin name as the expression.
 *
 * It is possible to specify a default set of parameters for each jQuery plugin.
 * Under the jq key, namespace each plugin by that which will be passed to ui-jq.
 * Unfortunately, at this time you can only pre-define the first parameter.
 * @example { jq : { datepicker : { showOn:'click' } } }
 *
 * @param ui-jq {string} The $elm.[pluginName]() to call.
 * @param [ui-options] {mixed} Expression to be evaluated and passed as options to the function
 *     Multiple parameters can be separated by commas
 * @param [ui-refresh] {expression} Watch expression and refire plugin on changes
 *
 * @example <input ui-jq="datepicker" ui-options="{showOn:'click'},secondParameter,thirdParameter" ui-refresh="iChange">
 */
angular.module('ui.jq', ['ui.load']).
  value('uiJqConfig', {}).
  directive('uiJq', ['uiJqConfig', 'JQ_CONFIG', 'uiLoad', '$timeout', function uiJqInjectingFunction(uiJqConfig, JQ_CONFIG, uiLoad, $timeout) {
    'use strict';
    return {
      restrict: 'A',
      compile: function uiJqCompilingFunction(tElm, tAttrs) {

        if (!angular.isFunction(tElm[tAttrs.uiJq]) && !JQ_CONFIG[tAttrs.uiJq]) {
          throw new Error('ui-jq: The "' + tAttrs.uiJq + '" function does not exist');
        }
        var options = uiJqConfig && uiJqConfig[tAttrs.uiJq];

        return function uiJqLinkingFunction(scope, elm, attrs) {

          function getOptions() {
            var linkOptions = [];

            // If ui-options are passed, merge (or override) them onto global defaults and pass to the jQuery method
            if (attrs.uiOptions) {
              linkOptions = scope.$eval('[' + attrs.uiOptions + ']');
              if (angular.isObject(options) && angular.isObject(linkOptions[0])) {
                linkOptions[0] = angular.extend({}, options, linkOptions[0]);
              }
            } else if (options) {
              linkOptions = [options];
            }
            return linkOptions;
          }

          // If change compatibility is enabled, the form input's "change" event will trigger an "input" event
          if (attrs.ngModel && elm.is('select,input,textarea')) {
            elm.bind('change', function () {
              elm.trigger('input');
            });
          }

          // Call jQuery method and pass relevant options
          function callPlugin() {
            $timeout(function () {
              elm[attrs.uiJq].apply(elm, getOptions());
            }, 0, false);
          }

          function refresh() {
            // If ui-refresh is used, re-fire the the method upon every change
            if (attrs.uiRefresh) {
              scope.$watch(attrs.uiRefresh, function () {
                callPlugin();
              });
            }
          }

          if (JQ_CONFIG[attrs.uiJq]) {
            uiLoad.load(JQ_CONFIG[attrs.uiJq]).then(function () {
              callPlugin();
              refresh();
            }).catch(function () {

            });
          } else {
            callPlugin();
            refresh();
          }
        };
      }
    };
  }]);
angular.module('app')
  .directive('uiModule', ['MODULE_CONFIG', 'uiLoad', '$compile', function (MODULE_CONFIG, uiLoad, $compile) {
    'use strict';
    return {
      restrict: 'A',
      compile: function (el, attrs) {
        var contents = el.contents().clone();
        return function (scope, el, attrs) {
          el.contents().remove();
          uiLoad.load(MODULE_CONFIG[attrs.uiModule])
            .then(function () {
              $compile(contents)(scope, function (clonedElement, scope) {
                el.append(clonedElement);
              });
            });
        };
      }
    };
  }]);
angular.module('app')
  .directive('uiNav', ['$timeout', function ($timeout) {
    'use strict';
    return {
      restrict: 'AC',
      link: function (scope, el, attr) {
        var _window = $(window),
          _mb = 768,
          wrap = $('.app-aside'),
          next,
          backdrop = '.dropdown-backdrop';
        // unfolded
        el.on('click', 'a', function (e) {
          next && next.trigger('mouseleave.nav');
          var _this = $(this);
          _this.parent().siblings('.active').toggleClass('active');
          _this.next().is('ul') && _this.parent().toggleClass('active') && e.preventDefault();
          // mobile
          _this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
        });

        // folded & fixed
        el.on('mouseenter', 'a', function (e) {
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
          if (!$('.app-aside-fixed.app-aside-folded').length || ( _window.width() < _mb ) || $('.app-aside-dock').length) {
            return;
          }
          var _this = $(e.target),
            top,
            w_h = $(window).height(),
            offset = 50,
            min = 150;

          !_this.is('a') && (_this = _this.closest('a'));
          if (_this.next().is('ul')) {
            next = _this.next();
          } else {
            return;
          }

          _this.parent().addClass('active');
          top = _this.parent().position().top + offset;
          next.css('top', top);
          if (top + next.height() > w_h) {
            next.css('bottom', 0);
          }
          if (top + min > w_h) {
            next.css('bottom', w_h - top - offset).css('top', 'auto');
          }
          next.appendTo(wrap);

          next.on('mouseleave.nav', function (e) {
            $(backdrop).remove();
            next.appendTo(_this.parent());
            next.off('mouseleave.nav').css('top', 'auto').css('bottom', 'auto');
            _this.parent().removeClass('active');
          });

          $('.smart').length && $('<div class="dropdown-backdrop"/>').insertAfter('.app-aside').on('click', function (next) {
            next && next.trigger('mouseleave.nav');
          });

        });

        wrap.on('mouseleave', function (e) {
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiScroll', ['$location', '$anchorScroll', function ($location, $anchorScroll) {
    'use strict';
    return {
      restrict: 'AC',
      link: function (scope, el, attr) {
        el.on('click', function (e) {
          $location.hash(attr.uiScroll);
          $anchorScroll();
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiShift', ['$timeout', function ($timeout) {
    'use strict';
    return {
      restrict: 'A',
      link: function (scope, el, attr) {
        // get the $prev or $parent of this el
        var _el = $(el),
          _window = $(window),
          prev = _el.prev(),
          parent,
          width = _window.width()
          ;

        !prev.length && (parent = _el.parent());

        function sm() {
          $timeout(function () {
            var method = attr.uiShift;
            var target = attr.target;
            _el.hasClass('in') || _el[method](target).addClass('in');
          });
        }

        function md() {
          parent && parent['prepend'](el);
          !parent && _el['insertAfter'](prev);
          _el.removeClass('in');
        }

        (width < 768 && sm()) || md();

        _window.resize(function () {
          if (width !== _window.width()) {
            $timeout(function () {
              (_window.width() < 768 && sm()) || md();
              width = _window.width();
            });
          }
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiToggleClass', ['$timeout', '$document', function ($timeout, $document) {
    'use strict';
    return {
      restrict: 'AC',
      link: function (scope, el, attr) {
        el.on('click', function (e) {
          e.preventDefault();
          var classes = attr.uiToggleClass.split(','),
            targets = (attr.target && attr.target.split(',')) || Array(el),
            key = 0;
          angular.forEach(classes, function (_class) {
            var target = targets[(targets.length && key)];
            ( _class.indexOf('*') !== -1 ) && magic(_class, target);
            $(target).toggleClass(_class);
            key++;
          });
          $(el).toggleClass('active');

          function magic(_class, target) {
            var patt = new RegExp('\\s' +
            _class.
              replace(/\*/g, '[A-Za-z0-9-_]+').
              split(' ').
              join('\\s|\\s') +
            '\\s', 'g');
            var cn = ' ' + $(target)[0].className + ' ';
            while (patt.test(cn)) {
              cn = cn.replace(patt, ' ');
            }
            $(target)[0].className = $.trim(cn);
          }
        });
      }
    };
  }]);
/**
 * General-purpose validator for ngModel.
 * angular.js comes with several built-in validation mechanism for input fields (ngRequired, ngPattern etc.) but using
 * an arbitrary validation function requires creation of a custom formatters and / or parsers.
 * The ui-validate directive makes it easy to use any function(s) defined in scope as a validator function(s).
 * A validator function will trigger validation on both model and input changes.
 *
 * @example <input ui-validate=" 'myValidatorFunction($value)' ">
 * @example <input ui-validate="{ foo : '$value > anotherModel', bar : 'validateFoo($value)' }">
 * @example <input ui-validate="{ foo : '$value > anotherModel' }" ui-validate-watch=" 'anotherModel' ">
 * @example <input ui-validate="{ foo : '$value > anotherModel', bar : 'validateFoo($value)' }" ui-validate-watch=" { foo : 'anotherModel' } ">
 *
 * @param ui-validate {string|object literal} If strings is passed it should be a scope's function to be used as a validator.
 * If an object literal is passed a key denotes a validation error key while a value should be a validator function.
 * In both cases validator function should take a value to validate as its argument and should return true/false indicating a validation result.
 */
angular.module('ui.validate', []).directive('uiValidate', function () {
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      var validateFn, validators = {},
        validateExpr = scope.$eval(attrs.uiValidate);

      if (!validateExpr) {
        return;
      }

      if (angular.isString(validateExpr)) {
        validateExpr = {validator: validateExpr};
      }

      angular.forEach(validateExpr, function (exprssn, key) {
        validateFn = function (valueToValidate) {
          var expression = scope.$eval(exprssn, {'$value': valueToValidate});
          if (angular.isObject(expression) && angular.isFunction(expression.then)) {
            // expression is a promise
            expression.then(function () {
              ctrl.$setValidity(key, true);
            }, function () {
              ctrl.$setValidity(key, false);
            });
            return valueToValidate;
          } else if (expression) {
            // expression is true
            ctrl.$setValidity(key, true);
            return valueToValidate;
          } else {
            // expression is false
            ctrl.$setValidity(key, false);
            return valueToValidate;
          }
        };
        validators[key] = validateFn;
        ctrl.$formatters.push(validateFn);
        ctrl.$parsers.push(validateFn);
      });

      function apply_watch(watch) {
        //string - update all validators on expression change
        if (angular.isString(watch)) {
          scope.$watch(watch, function () {
            angular.forEach(validators, function (validatorFn) {
              validatorFn(ctrl.$modelValue);
            });
          });
          return;
        }

        //array - update all validators on change of any expression
        if (angular.isArray(watch)) {
          angular.forEach(watch, function (expression) {
            scope.$watch(expression, function () {
              angular.forEach(validators, function (validatorFn) {
                validatorFn(ctrl.$modelValue);
              });
            });
          });
          return;
        }

        //object - update appropriate validator
        if (angular.isObject(watch)) {
          angular.forEach(watch, function (expression, validatorKey) {
            //value is string - look after one expression
            if (angular.isString(expression)) {
              scope.$watch(expression, function () {
                validators[validatorKey](ctrl.$modelValue);
              });
            }

            //value is array - look after all expressions in array
            if (angular.isArray(expression)) {
              angular.forEach(expression, function (intExpression) {
                scope.$watch(intExpression, function () {
                  validators[validatorKey](ctrl.$modelValue);
                });
              });
            }
          });
        }
      }

      // Support for ui-validate-watch
      if (attrs.uiValidateWatch) {
        apply_watch(scope.$eval(attrs.uiValidateWatch));
      }
    }
  };
});

/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
//THis module allows the user to create an announcement with the following features
//User can upload a back ground image
//user can upload a headline
angular.module('app')
  .controller('announcementCreateController', ['$scope', '$modal', 'toaster', 'appConfig', 'announcementFactory',
    function ($scope, $modal, toaster, appConfig, announcementFactory) {
      $scope.announcement = {
        type: 'Announcement',
        text:'',
        content:''
      };
      //$scope.flag = false;
      var originalAnnoun = angular.copy($scope.announcement);
      console.log('in announcementCreateController');
      $scope.minDate = new Date();
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };
      $scope.resetAnnouncement = function () {
        $scope.announcement = angular.copy(originalAnnoun);
        $scope.addForm.$setPristine();
      };
      $scope.createAnnouncement = function () {
        if(!$scope.announcement.content){
          //$scope.flag = true;
          //console.log($scope.flag);
          //return;
        }
        $scope.myPromise = announcementFactory.createAnnouncement($scope.announcement)
          .success(function (result){
            console.log(result);
            $scope.resetAnnouncement();
            if(result.id){
              toaster.pop('success','Created announcement.');
            }else {
              toaster.pop('error','Unable to create announcement.');
            }
          });
      };
    }]);
angular.module('app')
  .controller('announcementViewController', ['$scope', '$modal', 'toaster', 'appConfig', 'announcementFactory',
    function ($scope, $modal, toaster, appConfig, announcementFactory) {
      console.log('in announcementViewController');
      $scope.layoutModel = 'thumbnail';
      $scope.myPromise = announcementFactory.getAllAnnouncement().success(function (data) {
        $scope.announcementData = data;
      }).error(function (error) {
        console.log(error);
      });
      $scope.editAnnouncement = function (announcement,index) {
        var cpyAnnouncement = angular.copy(announcement);
        var modelInstance = $modal.open({
          templateUrl: 'tpl/announcement/announcement_edit.html',
          controller: 'announcementEditController',
          size: 'lg',
          resolve: {
            announcement: function () {
              return cpyAnnouncement;
            }
          }
        });
        modelInstance.result.then(function (updateAnnouncement) {
          console.log(updateAnnouncement);
          var data = {
            id:updateAnnouncement.id,
            text:updateAnnouncement.text,
            content:updateAnnouncement.content
          };

          announcementFactory.updateAnnouncement(data)
            .success(function (result) {
              console.log(result);
              $scope.announcementData[index] = updateAnnouncement;
              toaster.pop('success', 'Successfully updated the announcement');
            }).error(function (err) {
              console.log(err);
            })
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
      $scope.deleteAnnouncement = function (announcement,index) {
        var modalInstance = $modal.open({
          templateUrl: 'myDeleteContent.html',
          backdrop: 'static',
          size: 'sm',
          controller: 'announcementDeleteController',
          resolve: {
            announcement: function () {
              return announcement;
            }
          }
        });
        modalInstance.result.then(function (data) {
          console.log(data);
          announcementFactory.deleteAnnouncement(data)
            .success(function (result) {
              console.log(result);
              $scope.announcementData.splice(index, 1);
              toaster.pop('success','deleted successfully');
            }).error(function (err) {
              console.log(err);
            });
        });
      };
      $scope.notifiyAnnouncement = function(announcement,index){
        console.log('firing notification');
        var modelInstance = $modal.open({
          templateUrl: 'tpl/announcement/announcement_notify.html',
          controller: 'announcementNotifyController',
          size: 'lg',
          resolve: {
            announcement: function () {
              return announcement;
            }
          }
        });
        modelInstance.result.then(function (notifyAnnouncement) {
          console.log(notifyAnnouncement);
          announcementFactory.notifyAnnouncement(notifyAnnouncement)
            .success(function (result) {
              //$scope.announcementData[index] = updateAnnouncement;
              toaster.pop('success', 'sent!!');
            }).error(function (err) {
              console.log(err);
            });
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      }
    }]);
angular.module('app')
  .controller('announcementDeleteController',['$scope','$modalInstance','announcement', function ($scope, $modalInstance, announcement) {
    $scope.deleteItem = function () {
      var data = {
        id: announcement.id
      };
      //console.log(data, 'from deleCtrl');
      $modalInstance.close(data);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);//announcementNotifyController
angular.module('app')
  .controller('announcementNotifyController',['$scope','$modalInstance','announcement','$http','announcementFactory', function ($scope, $modalInstance, announcement, $http, announcementFactory) {
    $scope.itemsToNotify = [
      {name:'All Users', value:'ALL_USERS'},
      {name:'Platform', value:'PLATFORM'},
      {name:'Gender', value:'GENDER'},
      {name:'Inactive Users', value:'INACTIVE_USERS'},
      {name:'All Groups', value:'ALL_GROUPS'},
      {name:'User Group', value:'USER_GROUP'},
      {name:'Users', value:'USERS'},
      {name:'Friends', value:'FRIENDS'}
    ];
    $scope.validate = {};
    $scope.notify = true;
    $scope.announcement = announcement;
    $scope.announcement.notify_to = 'ALL_USERS';
    $scope.notifyAnnouncement = function () {
      if(validateNotifyForm()){
        if($scope.announcement.notify_to === 'FRIENDS' || $scope.announcement.notify_to === 'USER_GROUP'){
          console.log($scope.announcement);
          $scope.announcement.user_id = $scope.userInfo.selected.id;
        }else if($scope.announcement.notify_to === 'USERS'){
          $scope.announcement.users = [];
          $scope.userInfo.selectedUsers.forEach(function (ele, index) {
            $scope.announcement.users.push(ele.id);
          });
          console.log($scope.announcement,'USERS');
        }
        $modalInstance.close($scope.announcement);
      }
    };
    $scope.setModel = function (announcement) {
      if(announcement.notify_to === 'ALL_USERS' || announcement.notify_to === 'INACTIVE_USERS' || announcement.notify_to === 'ALL_GROUPS'){
        announcement.platform = '';
        announcement.gender = '';
      } else if(announcement.notify_to === 'PLATFORM'){
        announcement.gender = '';
      }else if(announcement.notify_to === 'GENDER'){
        announcement.platform = '';
      }
    };
    function validateNotifyForm(){
      var flag = true;
      if($scope.announcement.notify_to === 'PLATFORM' && !$scope.announcement.platform){
        $scope.validate.platform = true;
        flag = false;
      }else if($scope.announcement.notify_to === 'GENDER' && !$scope.announcement.gender){
        $scope.validate.gender = true;
        flag = false;
      }else if($scope.announcement.notify_to === 'USERS' && !$scope.userInfo.selectedUsers.length){
        $scope.validate.users = true;
        flag = false;
      }else if(($scope.announcement.notify_to === 'FRIENDS' || $scope.announcement.notify_to === 'USER_GROUP') && !$scope.userInfo.selectedUsers.length) {
        console.log("select user");
        $scope.validate.friends = true;
        flag = false;
      }
      return flag;
    };
    $scope.userInfo = {};
    $scope.refreshAddresses = function(address) {
      var data = {
        sort_param:'name',
        sort_order:'DESC',
        name_like:address
      };
      if(address) {
        announcementFactory.searchUsers(data).success(function(result){
          console.log(result);
          //$scope.addresses = result;
          setUserList( result);

        }).error(function(err){
          console.log(err);
        });
      }else {
        $scope.usersList = $scope.usersList || [];
      }
    };
    $scope.userInfo.selectedUsers = [];
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
    function setUserList(result){
      console.log($scope.userList);
      var temp = $scope.usersList.concat(result);
      $scope.usersList = _.uniq(temp,'id');
    };
  }]);
/**
 * Created by bharadwaj on 13/2/15.
 */
'use strict';
angular.module('app').controller('announcementEditController',['$scope','$modalInstance', 'announcement','announcementFactory',
  function ($scope,$modalInstance,announcement,announcementFactory){
    console.log("announcement edit");
    var originalAnnouncement = angular.copy(announcement);
    $scope.announcement = announcement;
    $scope.EditAnnouncement = function (announcement,announcementEdit) {
      $modalInstance.close(announcement);
    };
  }]);
/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
angular.module('app').factory('announcementFactory', ['$http', 'appConfig', function ($http, appConfig) {
  function createAnnouncement(data){
    var url = appConfig.apiUrl + '/announcement/create';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function updateAnnouncement(data){
    var url = appConfig.apiUrl+'/announcement/update';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function deleteAnnouncement(data){
    var url = appConfig.apiUrl+'/announcement/remove/'+data.id;
    return $http({
      method:'POST',
      url:url
    });
  };
  function getAllAnnouncement(){
    var url = appConfig.apiUrl+'/announcement/list/all';
    return $http({
      method:'GET',
      url:url
    });
  };
  function notifyAnnouncement(data){
    var url = appConfig.apiUrl+'/announcement/notify';
    console.log(data);
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function searchUsers(data){
    var url = appConfig.apiUrl+'/search/user/namelike';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  return {
    createAnnouncement:createAnnouncement,
    updateAnnouncement:updateAnnouncement,
    deleteAnnouncement:deleteAnnouncement,
    getAllAnnouncement:getAllAnnouncement,
    notifyAnnouncement:notifyAnnouncement,
    searchUsers:searchUsers
  };
}]);
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
/**
 * Created by bharadwaj on 23/2/15.
 */
'use strict';
angular.module('app').controller('assetEditController',['$scope','$modalInstance', 'asset','assetFactory',
  function ($scope,$modalInstance,asset,assetFactory) {
    //console.log("In CueEdit",cue);

  }]);

/**
 * Created by bharadwaj on 23/2/15.
 */
'use strict';
angular.module('app').factory('assetFactory', ['$http', 'appConfig','$cookies', function ($http, appConfig,$cookies) {
   var userId = $cookies['userId'];
 function getAssets(data,offset,count){
   var maxValue = (offset+count-1);
   var url = appConfig.apiUrl + '/asset/by/label/Theme/'+offset+'/'+maxValue;
   data.user_id = $cookies['userId'] || '9ff61f0c-961c-4867-9455-d142ff081c90';
   console.log(userId);
   return $http({
     method:'POST',
     url:url,
     data:data
   });
 };
  function createAsset(file){
    var url = appConfig.apiUrl+'/asset/put';

    //var url = 'http://localhost:5000/api/v1/asset/put';
    file.append('user_id',$cookies['userId'] || '9ff61f0c-961c-4867-9455-d142ff081c90');

    return $http({
      method:'POST',
      url:url,
      headers:{
        'Content-Type':undefined
      },
      transformRequest: angular.identity,
      data:file
    })

  };
  function deleteAsset(data){
    var url = appConfig.apiUrl + '/asset/delete';
    data.user_id = $cookies['userId'] || '9ff61f0c-961c-4867-9455-d142ff081c90';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  }
  return {
    getAsset:getAssets,
    createAsset:createAsset,
    deleteAsset:deleteAsset
  }
}]);
/**
 * Get book list
 * redirect to canvas page
 **/

angular.module('app').controller('bookShelfCtrl', ['$scope', '$window', '$rootScope', '$modal', 'toaster', 'appConfig', 'bookshelfFactory', function ($scope, $window, $rootScope, $modal, toaster, appConfig, bookshelfFactory) {
  'use strict';
  $scope.myPromise = bookshelfFactory.getBooks().success(function (data) {
    $scope.bookList = data;
    toaster.pop('success', 'Successfully Loading books');
  }).error(function () {
    toaster.pop('error', 'Error while loading books.');
  });

  $scope.editBook = function (index) {
    $modal.open({
      templateUrl: 'tpl/bookshelf/edit_book_model.html',
      controller: 'editBookController',
      size: 'lg',
      resolve: {
        book: function () {
          return $scope.bookList[index];
        }
      }
    });
  };


  $scope.open = function (index) {

    var modalInstance = $modal.open({
      templateUrl: 'tpl/bookshelf/delete_book_model.html',
      controller: 'deleteBookCtrl',
      size: 'xs'
    });

    modalInstance.result.then(function () {

      bookshelfFactory.deleteBook({id: $scope.bookList[index].id}).success(function () {
        $scope.bookList.splice(index, 1);
        toaster.pop('success', 'Successfully Deleted Your Book.');
      });
    }, function () {

    });
  };
  $scope.canvasBook = function (index) {
    window.location = '/#/book/canvas/' + $scope.bookList[index].id;
  };

  $scope.layoutView = 'thumbnail';

}]);



/**
 * Delete book
 **/

angular.module('app').controller('deleteBookCtrl', function ($scope, $modalInstance) {
  'use strict';
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  $scope.deleteBook = function () {
    $modalInstance.close();
  };
});

/**
 * Update book
 * Generate tablet zip
 * Generate Iphone Zip
 **/

angular.module('app').controller('editBookController', function($scope, $modalInstance, $rootScope, book, toaster, appConfig, bookshelfFactory) {
  'use strict';
  $scope.book = book;
  $scope.bookPermissions = appConfig.bookPermissions;
  $scope.bookSubType = appConfig.bookSubType;
  $scope.currencyType = appConfig.currencyType;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.tabletZip = function () {
    $scope.myPromise = bookshelfFactory.tabletZip($scope.book.id).then(function (value) {
      $scope.book.zip_tablet = value.data.zip_tablet;
      toaster.pop('success', 'Successfully converted your zip.');
    });
  };

  $scope.iphoneZip = function () {
    $scope.myPromise = bookshelfFactory.iphoneZip($scope.book.id).then(function (value) {
      $scope.book.zip_iphone = value.data.zip_iphone;
      toaster.pop('success', 'Successfully converted your zip.');
    });
  };

  $scope.updateBook = function (index) {
    if ($scope.book.ImageBoxArray) {
      $scope.book.imageData = $scope.book.ImageBoxArray.Image;
      $scope.book.image = $scope.book.ImageBoxArray.ImageName;
    }
    $scope.book.bookID = $scope.book.id;

    $scope.myPromise = bookshelfFactory.updateBook($scope.book).success(function (data) {
      $scope.message = 'Saved Successfully';
      $scope.book = data;
      $modalInstance.close();
      toaster.pop('success', 'Successfully Updated Your Book.');
    }).error(function () {
          $scope.message = 'Unexpected Error';
          toaster.pop('error', 'Unexpected Error.');
        });
  };

});
/*
angular.module('app').factory('cueFactory', ['$http', 'appConfig', function ($http, appConfig) {
  'use strict';
  function getCueList () {
    console.log(appConfig.apiUrl + '/cue/get/all :: URL');
    return $http({
      method: 'GET',
      url: appConfig.apiUrl + '/cue/get/all/30/50'
    });
  };
  return {
    getCueList: getCueList
  };

}]);*/

/**
 * calendarDemoApp - 0.1.3
 */

angular.module('app').controller('FullcalendarCtrl', ['$scope', function ($scope) {
  'use strict';
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  /* event source that pulls from google.com */
  $scope.eventSource = {
    url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
    className: 'gcal-event',           // an option!
    currentTimezone: 'America/Chicago' // an option!
  };

  /* event source that contains custom events on the scope */
  $scope.events = [
    {
      title: 'All Day Event',
      start: new Date(y, m, 1),
      className: ['b-l b-2x b-info'],
      location: 'New York',
      info: 'This a all day event that will start from 9:00 am to 9:00 pm, have fun!'
    },
    {
      title: 'Dance class',
      start: new Date(y, m, 3),
      end: new Date(y, m, 4, 9, 30),
      allDay: false,
      className: ['b-l b-2x b-danger'],
      location: 'London',
      info: 'Two days dance training class.'
    },
    {
      title: 'Game racing',
      start: new Date(y, m, 6, 16, 0),
      className: ['b-l b-2x b-info'],
      location: 'Hongkong',
      info: 'The most big racing of this year.'
    },
    {
      title: 'Soccer',
      start: new Date(y, m, 8, 15, 0),
      className: ['b-l b-2x b-info'],
      location: 'Rio',
      info: 'Do not forget to watch.'
    },
    {
      title: 'Family',
      start: new Date(y, m, 9, 19, 30),
      end: new Date(y, m, 9, 20, 30),
      className: ['b-l b-2x b-success'],
      info: 'Family party'
    },
    {
      title: 'Long Event',
      start: new Date(y, m, d - 5),
      end: new Date(y, m, d - 2),
      className: ['bg-success bg'],
      location: 'HD City',
      info: 'It is a long long event'
    },
    {
      title: 'Play game',
      start: new Date(y, m, d - 1, 16, 0),
      className: ['b-l b-2x b-info'],
      location: 'Tokyo',
      info: 'Tokyo Game Racing'
    },
    {
      title: 'Birthday Party',
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false,
      className: ['b-l b-2x b-primary'],
      location: 'New York',
      info: 'Party all day'
    },
    {
      title: 'Repeating Event',
      start: new Date(y, m, d + 4, 16, 0),
      alDay: false,
      className: ['b-l b-2x b-warning'],
      location: 'Home Town',
      info: 'Repeat every day'
    },
    {
      title: 'Click for Google',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://google.com/',
      className: ['b-l b-2x b-primary']
    },
    {title: 'Feed cat', start: new Date(y, m + 1, 6, 18, 0), className: ['b-l b-2x b-info']}
  ];

  /* alert on dayClick */
  $scope.precision = 400;
  $scope.lastClickTime = 0;
  $scope.alertOnEventClick = function (date) {
    var time = new Date().getTime();
    if (time - $scope.lastClickTime <= $scope.precision) {
      $scope.events.push({
        title: 'New Event',
        start: date,
        className: ['b-l b-2x b-info']
      });
    }
    $scope.lastClickTime = time;
  };
  /* alert on Drop */
  $scope.alertOnDrop = function (event, delta) {
    $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
  };
  /* alert on Resize */
  $scope.alertOnResize = function (event, delta) {
    $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
  };

  $scope.overlay = $('.fc-overlay');
  $scope.alertOnMouseOver = function (event, jsEvent) {
    $scope.event = event;
    $scope.overlay.removeClass('left right').find('.arrow').removeClass('left right top pull-up');
    var wrap = $(jsEvent.target).closest('.fc-event');
    var cal = wrap.closest('.calendar');
    var left = wrap.offset().left - cal.offset().left;
    var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
    if (right > $scope.overlay.width()) {
      $scope.overlay.addClass('left').find('.arrow').addClass('left pull-up');
    } else if (left > $scope.overlay.width()) {
      $scope.overlay.addClass('right').find('.arrow').addClass('right pull-up');
    } else {
      $scope.overlay.find('.arrow').addClass('top');
    }
    (wrap.find('.fc-overlay').length === 0) && wrap.append($scope.overlay);
  };

  /* config object */
  $scope.uiConfig = {
    calendar: {
      height: 450,
      editable: true,
      header: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      dayClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventMouseover: $scope.alertOnMouseOver
    }
  };

  /* add custom event*/
  $scope.addEvent = function () {
    $scope.events.push({
      title: 'New Event',
      start: new Date(y, m, d),
      className: ['b-l b-2x b-info']
    });
  };

  /* remove event */
  $scope.remove = function (index) {
    $scope.events.splice(index, 1);
  };

  /* Change View */
  $scope.changeView = function (view, calendar) {
    $('.calendar').fullCalendar('changeView', view);
  };

  $scope.today = function (calendar) {
    $('.calendar').fullCalendar('today');
  };

  /* event sources array*/
  $scope.eventSources = [$scope.events];
}]);
/* EOF */
/**
 * Update page Sprite
 * Update page audio
 * Update image in canvas
 * Delete image in canvas
 **/

angular.module('app').controller('canvasCtrl', ['$scope', '$modal', '$log', '$stateParams', '$rootScope', function ($scope, $modal, $log, $stateParams, $rootScope) {
  'use strict';
  var pid = $stateParams.pageId;
  var page = _.map($scope.pages, function (page) {
    if (page.id === pid) {
      $scope.page = page;
      return page;
    }
  });
  $scope.bringBack = function (data) {
    var zIndex = data.additionalInfo.zIndex;
    data.additionalInfo.zIndex = (zIndex > 0) ? (zIndex - 1) : 0;
  };
  $scope.$on('newImageElement', function (e, o) {
    var imageBox = $scope.page.ImageBoxArray;
    imageBox.push(o);
    $scope.page.ImageBoxArray = imageBox;
  });

  $scope.$emit('pageData', $scope.page);

  $scope.bringFront = function (data) {
    data.additionalInfo.zIndex += 1;
  };
  $scope.openModelToDeleteImage = function (index) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/delete.html',
      controller: function ($scope, $modalInstance) {
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
        $scope.deletePage = function () {
          $modalInstance.close();
        };
      }
    });
    modalInstance.result.then(function () {
      $scope.page.ImageBoxArray.splice(index, 1);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openModelToUpdateImage = function (data) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/update_image.html',
      controller: function ($scope, $modalInstance, image) {
        $scope.ImageBoxArray = {Image: ''};
        $scope.ImageBoxArray.Image = image;
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
        $scope.update = function (image) {
          $modalInstance.close(image.Image);
        };
      },
      resolve: {
        image: function () {
          return data.Image;
        }
      }
    });
    modalInstance.result.then(function (image) {
      $scope.page.ImageBoxArray[$scope.page.ImageBoxArray.indexOf(data)].Image = image;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openModelToTouchFX = function (data) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/touchfx_model.html',
      controller: function ($scope, $modalInstance, image, $sce) {
        $scope.imageData = image;
        if ($scope.imageData && $scope.imageData.touchfx && $scope.imageData.touchfx.tap && $scope.imageData.touchfx.tap.data) {
          $scope.url = $sce.trustAsResourceUrl($scope.imageData.touchfx.tap.data.url);
        }
        $scope.add = function (ImageBoxArray) {
          if ($scope.tap.touchOption === 'SpriteTouchFx') {
            $scope.imageData.touchfx = {tap: {'spritecount': $scope.imageData.touchfx.tap.spritecount, 'height': ImageBoxArray.additionalInfo.height, 'width': ImageBoxArray.additionalInfo.width, 'loop': $scope.imageData.touchfx.tap.loop, 'sprite': ImageBoxArray.Image, 'spritename': ImageBoxArray.ImageName}};
          } else {
            $scope.imageData.touchfx = {'tap': {action: 'audio', data: {title: ImageBoxArray.ImageName, url: ImageBoxArray.url}}};
          }
          $modalInstance.close();
        };
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      },
      resolve: {
        image: function () {
          return data;
        }
      }

    });
    modalInstance.result.then(function (image) {
      $scope.page.ImageBoxArray[$scope.page.ImageBoxArray.indexOf(data)].Image = image;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $scope.pageFX = function (data) {
    var modalInstance = $modal.open({
      templateUrl: 'tpl/canvas/pagefx.html',
      controller: function ($scope, $modalInstance, image, $sce) {
        $scope.imagePageFx = image;
        if ($scope.imagePageFx && $scope.imagePageFx.pagefx && $scope.imagePageFx.pagefx.onload && $scope.imagePageFx.pagefx.onload.data) {
          $scope.url = $sce.trustAsResourceUrl($scope.imagePageFx.pagefx.onload.data.url);
        }
        $scope.onload = {};
        $scope.add = function (ImageBoxArray) {
          if ($scope.onload.pageOption === 'AudioPageFx') {
            $scope.imagePageFx.pagefx = {'onload': {'action': 'audio', 'data': {'title': ImageBoxArray.ImageName, 'url': ImageBoxArray.url}}};
          } else {
            $scope.imagePageFx.pagefx = {'onload': {'spritecount': $scope.onload.spritecount, 'height': ImageBoxArray.additionalInfo.height, 'width': ImageBoxArray.additionalInfo.width, 'loop': $scope.onload.loop, 'sprite': ImageBoxArray.Image, 'spritename': ImageBoxArray.ImageName}};
          }
          $modalInstance.close();
        };
        $scope.cancel = function () {
          $modalInstance.dismiss('cancel');
        };
      },
      resolve: {
        image: function () {
          return data;
        }
      }
    });
    modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}]);

/**
 * Created with JetBrains WebStorm.
 * User: ssomu
 * Date: 12/29/14
 * Time: 2:39 PM
 * To change this template use File | Settings | File Templates.
 */

angular.module('app').factory('canvasFactory', function($http, appConfig){
  'use strict';
  var getBookData = function(bid){
    return $http({
      method: 'GET',
      url: appConfig.apiUrl +'/rest/book/get/' + bid
    });
  };
  var updatePageOrder = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/page/order',
      data: data
    });
  };
  var deletePage = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl +'/rest/book/page/user/delete',
      data: data
    });
  };
  var updateCanvas = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl +'/rest/book/page/user/update',
      data: data
    });
  };
  var createPage = function(bid){
    return  $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/page/user/create',
      data: bid
    });
  };


  return {
    getBook: getBookData,
    pageOrder: updatePageOrder,
    deletePage: deletePage,
    updateCanvas: updateCanvas,
    createPage: createPage
  };
});

/**
 * Get book data
 * Update page
 * Delete page
 * Update pages order
 **/
function sortCompare(property) {
  'use strict';
  return function (a, b) {
    return (parseInt(a[property], 10) < parseInt(b[property], 10)) ? -1 : (parseInt(a[property], 10) > parseInt(b[property], 10)) ? 1 : 0;
  };
}
angular.module('app').controller('pageCtrl', ['$scope', '$stateParams', '$rootScope', '$state', '$modal', '$log', 'toaster', 'appConfig', 'canvasFactory',
  function ($scope, $stateParams, $rootScope, $state, $modal, $log, toaster, appConfig, canvasFactory) {
    'use strict';
    var pagesData = [];
    $scope.bid = $stateParams.BookID;
    $scope.myPromise = canvasFactory.getBook($stateParams.BookID).success(function (data, status, headers, config) {
      pagesData = data.pages;
      pagesData.sort(sortCompare('pageNo'));
      $scope.pages = pagesData;
      $state.go('book.canvas.page', { pageId: $scope.pages[0].id });
    }).error(function (data, status, headers, config) {
          toaster.pop('error', 'Error while Loading pages.');
        });
    $scope.sortableOptions = {
      stop: function (e, ui) {
        var updatedPages = pagesData.map(function (page) {
          return page.id;
        });
        canvasFactory.pageOrder({bid: $stateParams.BookID, pages: updatedPages}).success(function (data, status, headers, config) {
          toaster.pop('success', 'Page Order saved.');
        }).error(function (data, status, headers, config) {
              toaster.pop('error', 'Error while save page orders.');
            });
      }
    };
    $scope.deletePage = function (page, index) {
      canvasFactory.deletePage({bookID: $stateParams.BookID, pageID: page.id}).success(function (data, status, headers, config) {
        toaster.pop('success', 'Page successfully deletd.');
      }).error(function (data, status, headers, config) {
            toaster.pop('error', 'Error while dateing page.');
          });
      $scope.pages.splice(index, 1);
    };
    $scope.game1 = function(){
      var modalInstance = $modal.open({
        templateUrl: 'tpl/canvas/game1.html',
        controller: function($scope, $modalInstance, page){
          function format(image) {
            if (!image.Image){
              return image.ImageName;
            }  // optgroup
            return '<img class="flag" src=image.Image />' + image.ImageName;
          }
          $scope.game1Page = angular.copy(page);
          var image = $scope.game1Page.ImageBoxArray;
          $scope.draggable = [];
          $scope.droppable = [];
          $scope.select2Options = {
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function(m) { return m; }
          };
          $scope.addToDraggable = function(){
            $scope.draggable.push($scope.dragSelected);
          };
          $scope.addToDroppable = function() {
            $scope.droppable.push($scope.dropselected);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        size: 'lg',
        resolve:{
          page: function () {
            return $scope.updatedPageData;
          }
        }

      });
    };
    $scope.browse = function () {
      var modalInstance = $modal.open({
        templateUrl: 'tpl/canvas/image_model.html',
        controller: function($scope, $modalInstance){
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
          $scope.addImage = function (img) {
            $modalInstance.close(img);
          };
        },
        size: 'xs'

      });
      modalInstance.result.then(function (newImage) {
        $rootScope.$broadcast('newImageElement', newImage);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    $rootScope.$on('pageData',function(event, data){
      $scope.updatedPageData = data;
    });
    $scope.saveModifications = function () {
      $scope.myOverlay = 'overlay-block';
      var canvas = $('.canvasdiv').get(0);
      html2canvas(canvas,{
        onrendered: function(can)
        {
          $('.canvas').find('.handler').remove();
          $('.canvas').find('.active').removeClass();
          var thumbnail = can.toDataURL();
          var charSeq = 'base64,';
          var indexOfBase64 = thumbnail.indexOf(charSeq);
          thumbnail = thumbnail.substring(indexOfBase64+charSeq.length);
          savePage(thumbnail);
        },
        proxy:appConfig.apiUrl+'/proxy'
      });
      function savePage(thumb){
        $scope.updatedPageData.thumbnail = thumb;
        canvasFactory.updateCanvas({bookID: $stateParams.BookID, page:$scope.updatedPageData}).success(function (data, status, headers, config) {
          $scope.updatedPageData.thumbnail = data.thumbnail;
          $scope.myOverlay = '';
          toaster.pop('success', 'Page updated.');
        }).error(function (data, status, headers, config) {
              toaster.pop('error', 'Error while Loading pages.');
            });
      }

    };
    $scope.createPage = function () {
      $scope.myPromise = canvasFactory.createPage({bookID: $stateParams.BookID}).success(function (data, status, headers, config) {
        var newPage = {id: data, top: 0, left: 0, height: 768, width: 1024, thumbnail: '', ImageBoxArray: []};
        pagesData.push(newPage);
        toaster.pop('success', 'New Page Created.');
        $state.go('book.canvas.page', { pageId: newPage.id});
      }).error(function (data, status, headers, config) {
            toaster.pop('error', 'Error while create Page.');
          });
    };
  }]);


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
/**
 * Created by bharadwaj on 26/2/15.
 */
angular.module('app').factory('categoryFactory', ['$http', 'appConfig', function ($http, appConfig) {
  'use strict';
  function getCategoriesList (offset,count) {
    var maxValue = (offset+count-1),url = appConfig.apiUrl + '/categories/list/'+offset+'/'+maxValue;
    console.log(url);
    return $http({
      method: 'GET',
      url: url
    });
  };
  function createCategory(data){
    var url = appConfig.apiUrl + '/category';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function updateCategory(data){
    var url = appConfig.apiUrl+'/category/update';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function searchCategory(data){
    var url = appConfig.apiUrl+'/search/category/namelike';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };

  /*function uploadImage(data,name){
    var url = appConfig.apiUrl + '/file/upload';
    return $http.post(url,data,{
      transformRequest: angular.identity,
      headers: {
        'Content-Type':undefined
      }
    });
  };
   function deleteCategory(data){
   var url = appConfig.apiUrl+'/cue/delete';
   return $http({
   'method':'POST',
   'url':url,
   data:data
   });
   };


  function getPollCueOptions(id){
    var url = appConfig.apiUrl+'/poll/get/'+id;
    return $http({
      method: 'GET',
      url: url
    });
  };*/
  return {
    getCategoriesList: getCategoriesList,
     createCategory:createCategory,
    updateCategory:updateCategory,
    searchCategory:searchCategory/*,
    deleteCategory:deleteCategory,
    uploadImage:uploadImage,
    updateCue:updateCue,
    deleteCue:deleteCue,
    getPollCueOptions:getPollCueOptions*/
  };

}]);
angular.module('app').controller('ContactCtrl', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
  'use strict';
  $http.get('js/app/contact/contacts.json').then(function (resp) {
    $scope.items = resp.data.items;
    $scope.item = $filter('orderBy')($scope.items, 'first')[0];
    $scope.item.selected = true;
  });

  $scope.filter = '';
  $scope.groups = [
    {name: 'Coworkers'},
    {name: 'Family'},
    {name: 'Friends'},
    {name: 'Partners'},
    {name: 'Group'}
  ];

  $scope.createGroup = function () {
    var group = {name: 'New Group'};
    group.name = $scope.checkItem(group, $scope.groups, 'name');
    $scope.groups.push(group);
  };

  $scope.checkItem = function (obj, arr, key) {
    var i = 0;
    angular.forEach(arr, function (item) {
      if (item[key].indexOf(obj[key]) === 0) {
        var j = item[key].replace(obj[key], '').trim();
        if (j) {
          i = Math.max(i, parseInt(j,10) + 1);
        } else {
          i = 1;
        }
      }
    });
    return obj[key] + (i ? ' ' + i : '');
  };

  $scope.deleteGroup = function (item) {
    $scope.groups.splice($scope.groups.indexOf(item), 1);
  };

  $scope.selectGroup = function (item) {
    angular.forEach($scope.groups, function (item) {
      item.selected = false;
    });
    $scope.group = item;
    $scope.group.selected = true;
    $scope.filter = item.name;
  };

  $scope.selectItem = function (item) {
    angular.forEach($scope.items, function (item) {
      item.selected = false;
      item.editing = false;
    });
    $scope.item = item;
    $scope.item.selected = true;
  };

  $scope.deleteItem = function (item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
    $scope.item = $filter('orderBy')($scope.items, 'first')[0];
    if ($scope.item) {
      $scope.item.selected = true;
    }
  };

  $scope.createItem = function () {
    var item = {
      group: 'Friends',
      avatar: 'img/a0.jpg'
    };
    $scope.items.push(item);
    $scope.selectItem(item);
    $scope.item.editing = true;
  };

  $scope.editItem = function (item) {
    if (item && item.selected) {
      item.editing = true;
    }
  };

  $scope.doneEditing = function (item) {
    item.editing = false;
  };

}]);
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
/**
 * Created by bharadwaj on 30/1/15.
 */
'use strict';
angular.module('app').factory('cueFactory', ['$http', 'appConfig', function ($http, appConfig) {
  'use strict';
  function getCueList (offset,count) {
    var maxValue = (offset+count-1),url = appConfig.apiUrl + '/cue/get/all/'+offset+'/'+maxValue;
    console.log(url);
    return $http({
      method: 'GET',
      url: url
    });
  };
  function createCue(data){
    var url = appConfig.apiUrl + '/cue/create';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function uploadImage(data,name){
    var url = appConfig.apiUrl + '/file/upload';
    return $http.post(url,data,{
      transformRequest: angular.identity,
      headers: {
        'Content-Type':undefined
      }
    });
  };
  function updateCue(data){
    var url = appConfig.apiUrl+'/cue/update';
    return $http({
      method:'POST',
      url:url,
      data:data
    });
  };
  function deleteCue(data){
    var url = appConfig.apiUrl+'/cue/delete';
    return $http({
      'method':'POST',
      'url':url,
      data:data
    });
  };
  function getPollCueOptions(id){
    var url = appConfig.apiUrl+'/poll/get/'+id;
    return $http({
      method: 'GET',
      url: url
    });
  };
  return {
    getCueList: getCueList,
    createCue:createCue,
    uploadImage:uploadImage,
    updateCue:updateCue,
    deleteCue:deleteCue,
    getPollCueOptions:getPollCueOptions
  };

}]);


/**
 * Created by bharadwaj on 28/1/15.
 */
'use strict';
/**
 * This would enable the
 */
angular.module('app')
  .controller('cueController', ['$scope', '$modal', 'toaster', 'appConfig', 'cueFactory','$q',
    function ($scope, $modal, toaster, appConfig, cueFactory,$q) {
      'use strict';
      $scope.layoutModel = 'thumbnail';
      var offset = 0, count = 20;
      $scope.cueData = [];
      var paginationFlag = true;
      $scope.getCues = function (offset) {
        if(paginationFlag){
          $scope.scrollClass = 'infinite-scroll-block';

          $scope.myPromise = cueFactory.getCueList(offset, count).success(function (data) {
            if(!data.length){
              paginationFlag = false;
            }
            $scope.cueData = $scope.cueData.concat(data.result);
            if (!offset) {
              toaster.pop('success', 'Successfully Loading cues');
            }
          }).error(function () {
            toaster.pop('error', 'Error while loading cues.');
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
          backdrop: 'static',
          size: 'lg',
          resolve: {
            cue: function () {
              return cpyCue;
            }
          }
        });
        modelInstance.result.then(function (updateCue) {
          $scope.myPromise = cueFactory.updateCue(updateCue)
            .success(function (result) {
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
      //var backgroundImageFi
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
        var track = [];
        //code to update the background images.

        if(cueModel.type === 'POLL'){
          //update image to assert
          var assetsIdCollection = [];
          for(var keys in optionFormCollection){
            var fd = optionFormCollection[keys];
            fd.append('type','IMAGE');
            fd.append('description',$scope.options["option"+keys].text);
            fd.append('label','Poll');
            fd.append('created_at',+(new Date()));
            track.push(assetFactory.createAsset(fd));
          }

          $scope.myPromise = $q.all(track).then(function (data){
            data.forEach(function(ele,index){
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
// A RESTful factory for retreiving mails from 'mails.json'
angular.module('app').factory('mails', ['$http', function ($http) {
  'use strict';
  var path = 'js/app/mail/mails.json';
  var mails = $http.get(path).then(function (resp) {
    return resp.data.mails;
  });

  var factory = {};
  factory.all = function () {
    return mails;
  };
  factory.get = function (id) {
    return mails.then(function (mails) {
      for (var i = 0; i < mails.length; i++) {
        if (mails[i].id === id) {
          return mails[i];
        }
      }
      return null;
    });
  };
  return factory;
}]);
angular.module('app').controller('MailCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.folds = [
    {name: 'Inbox', filter: ''},
    {name: 'Starred', filter: 'starred'},
    {name: 'Sent', filter: 'sent'},
    {name: 'Important', filter: 'important'},
    {name: 'Draft', filter: 'draft'},
    {name: 'Trash', filter: 'trash'}
  ];

  $scope.labels = [
    {name: 'Angular', filter: 'angular', color: '#23b7e5'},
    {name: 'Bootstrap', filter: 'bootstrap', color: '#7266ba'},
    {name: 'Client', filter: 'client', color: '#fad733'},
    {name: 'Work', filter: 'work', color: '#27c24c'}
  ];

  $scope.addLabel = function () {
    $scope.labels.push(
      {
        name: $scope.newLabel.name,
        filter: angular.lowercase($scope.newLabel.name),
        color: '#ccc'
      }
    );
    $scope.newLabel.name = '';
  };

  $scope.labelClass = function (label) {
    return {
      'b-l-info': angular.lowercase(label) === 'angular',
      'b-l-primary': angular.lowercase(label) === 'bootstrap',
      'b-l-warning': angular.lowercase(label) === 'client',
      'b-l-success': angular.lowercase(label) === 'work'
    };
  };

}]);

angular.module('app').controller('MailListCtrl', ['$scope', 'mails', '$stateParams', function ($scope, mails, $stateParams) {
  'use strict';
  $scope.fold = $stateParams.fold;
  mails.all().then(function (mails) {
    $scope.mails = mails;
  });
}]);

angular.module('app').controller('MailDetailCtrl', ['$scope', 'mails', '$stateParams', function ($scope, mails, $stateParams) {
  'use strict';
  mails.get($stateParams.mailId).then(function (mail) {
    $scope.mail = mail;
  });
}]);

angular.module('app').controller('MailNewCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.mail = {
    to: '',
    subject: '',
    content: ''
  };
  $scope.tolist = [
    {name: 'James', email: 'james@gmail.com'},
    {name: 'Luoris Kiso', email: 'luoris.kiso@hotmail.com'},
    {name: 'Lucy Yokes', email: 'lucy.yokes@gmail.com'}
  ];
}]);

angular.module('app').directive('labelColor', function () {
  'use strict';
  return function (scope, $el, attrs) {
    $el.css({'color': attrs.color});
  };
});
/*!
 * JavaScript - loadGoogleMaps( version, apiKey, language )
 *
 * - Load Google Maps API using jQuery Deferred. 
 *   Useful if you want to only load the Google Maps API on-demand.
 * - Requires jQuery 1.5
 * 
 * Copyright (c) 2011 Glenn Baker
 * Dual licensed under the MIT and GPL licenses.
 */
/*globals window, google, jQuery*/
var loadGoogleMaps = (function ($) {
  'use strict';
  var now = $.now(),

    promise;

  return function (version, apiKey, language) {

    if (promise) {
      return promise;
    }

    //Create a Deferred Object
    var deferred = $.Deferred(),

    //Declare a resolve function, pass google.maps for the done functions
      resolve = function () {
        deferred.resolve(window.google && google.maps ? google.maps : false);
      },

    //global callback name
      callbackName = 'loadGoogleMaps_' + ( now++ ),

    // Default Parameters
      params = $.extend(
        {'sensor': false},
        apiKey ? {'key': apiKey} : {},
        language ? {'language': language} : {}
      );


    //If google.maps exists, then Google Maps API was probably loaded with the <script> tag
    if (window.google && google.maps) {

      resolve();

      //If the google.load method exists, lets load the Google Maps API in Async.
    } else if (window.google && google.load) {

      google.load('maps', version || 3, {'other_params': $.param(params), 'callback': resolve});

      //Last, try pure jQuery Ajax technique to load the Google Maps API in Async.
    } else {

      //Ajax URL params
      params = $.extend(params, {
        'v': version || 3,
        'callback': callbackName
      });

      //Declare the global callback
      window[callbackName] = function () {

        resolve();

        //Delete callback
        setTimeout(function () {
          try {
            delete window[callbackName];
          } catch (e) {
          }
        }, 20);
      };

      //Can't use the jXHR promise because 'script' doesn't support 'callback=?'
      $.ajax({
        dataType: 'script',
        data: params,
        url: 'http://maps.google.com/maps/api/js'
      });

    }

    promise = deferred.promise();

    return promise;
  };

}(jQuery));

/* global console:false, google:false */
/*jshint unused:false */

angular.module('app').controller('MapCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.myMarkers = [];

  $scope.mapOptions = {
    center: new google.maps.LatLng(35.784, -78.670),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  $scope.addMarker = function ($event, $params) {
    $scope.myMarkers.push(new google.maps.Marker({
      map: $scope.myMap,
      position: $params[0].latLng
    }));
  };

  $scope.setZoomMessage = function (zoom) {
    $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
    console.log(zoom, 'zoomed');
  };

  $scope.openMarkerInfo = function (marker) {
    $scope.currentMarker = marker;
    $scope.currentMarkerLat = marker.getPosition().lat();
    $scope.currentMarkerLng = marker.getPosition().lng();
    $scope.myInfoWindow.open($scope.myMap, marker);
  };

  $scope.setMarkerPosition = function (marker, lat, lng) {
    marker.setPosition(new google.maps.LatLng(lat, lng));
  };
}])
;

angular.module('app').directive('uiEvent', ['$parse',
  function ($parse) {
    'use strict';
    return function ($scope, elm, attrs) {
      var events = $scope.$eval(attrs.uiEvent);
      angular.forEach(events, function (uiEvent, eventName) {
        var fn = $parse(uiEvent);
        elm.bind(eventName, function (evt) {
          var params = Array.prototype.slice.call(arguments);
          //Take out first paramater (event object);
          params = params.splice(1);
          fn($scope, {$event: evt, $params: params});
          if (!$scope.$$phase) {
            $scope.$apply();
          }
        });
      });
    };
  }]);
(function () {
  'use strict';
  //Setup map events from a google map object to trigger on a given element too,
  //then we just use ui-event to catch events from an element
  function bindMapEvents(scope, eventsStr, googleObject, element) {
    angular.forEach(eventsStr.split(' '), function (eventName) {
      //Prefix all googlemap events with 'map-', so eg 'click'
      //for the googlemap doesn't interfere with a normal 'click' event
      window.google.maps.event.addListener(googleObject, eventName, function (event) {
        element.triggerHandler('map-' + eventName, event);
        //We create an $apply if it isn't happening. we need better support for this
        //We don't want to use timeout because tons of these events fire at once,
        //and we only need one $apply
        if (!scope.$$phase) {
          scope.$apply();
        }
      });
    });
  }

  angular.module('app').value('uiMapConfig', {});
  angular.module('app').directive('uiMap',
    ['uiMapConfig', '$parse', function (uiMapConfig, $parse) {
      var mapEvents = 'bounds_changed center_changed click dblclick drag dragend ' +
        'dragstart heading_changed idle maptypeid_changed mousemove mouseout ' +
        'mouseover projection_changed resize rightclick tilesloaded tilt_changed ' +
        'zoom_changed';
      var options = uiMapConfig || {};

      return {
        restrict: 'A',
        //doesn't work as E for unknown reason
        link: function (scope, elm, attrs) {
          var opts = angular.extend({}, options, scope.$eval(attrs.uiOptions));
          var map = new window.google.maps.Map(elm[0], opts);
          var model = $parse(attrs.uiMap);

          //Set scope variable for the map
          model.assign(scope, map);

          bindMapEvents(scope, mapEvents, map, elm);
        }
      };
    }]);

  angular.module('app').value('uiMapInfoWindowConfig', {});
  angular.module('app').directive('uiMapInfoWindow',
    ['uiMapInfoWindowConfig', '$parse', '$compile', function (uiMapInfoWindowConfig, $parse, $compile) {
      var infoWindowEvents = 'closeclick content_change domready ' +
        'position_changed zindex_changed';
      var options = uiMapInfoWindowConfig || {};

      return {
        link: function (scope, elm, attrs) {
          var opts = angular.extend({}, options, scope.$eval(attrs.uiOptions));
          opts.content = elm[0];
          var model = $parse(attrs.uiMapInfoWindow);
          var infoWindow = model(scope);

          if (!infoWindow) {
            infoWindow = new window.google.maps.InfoWindow(opts);
            model.assign(scope, infoWindow);
          }

          bindMapEvents(scope, infoWindowEvents, infoWindow, elm);

          /* The info window's contents dont' need to be on the dom anymore,
           google maps has them stored.  So we just replace the infowindow element
           with an empty div. (we don't just straight remove it from the dom because
           straight removing things from the dom can mess up angular) */
          elm.replaceWith('<div></div>');

          //Decorate infoWindow.open to $compile contents before opening
          var _open = infoWindow.open;
          infoWindow.open = function open(a1, a2, a3, a4, a5, a6) {
            $compile(elm.contents())(scope);
            _open.call(infoWindow, a1, a2, a3, a4, a5, a6);
          };
        }
      };
    }]);

  /*
   * Map overlay directives all work the same. Take map marker for example
   * <ui-map-marker="myMarker"> will $watch 'myMarker' and each time it changes,
   * it will hook up myMarker's events to the directive dom element.  Then
   * ui-event will be able to catch all of myMarker's events. Super simple.
   */
  function mapOverlayDirective(directiveName, events) {
    angular.module('app').directive(directiveName, [function () {
      return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
          scope.$watch(attrs[directiveName], function (newObject) {
            if (newObject) {
              bindMapEvents(scope, events, newObject, elm);
            }
          });
        }
      };
    }]);
  }

  mapOverlayDirective('uiMapMarker',
    'animation_changed click clickable_changed cursor_changed ' +
    'dblclick drag dragend draggable_changed dragstart flat_changed icon_changed ' +
    'mousedown mouseout mouseover mouseup position_changed rightclick ' +
    'shadow_changed shape_changed title_changed visible_changed zindex_changed');

  mapOverlayDirective('uiMapPolyline',
    'click dblclick mousedown mousemove mouseout mouseover mouseup rightclick');

  mapOverlayDirective('uiMapPolygon',
    'click dblclick mousedown mousemove mouseout mouseover mouseup rightclick');

  mapOverlayDirective('uiMapRectangle',
    'bounds_changed click dblclick mousedown mousemove mouseout mouseover ' +
    'mouseup rightclick');

  mapOverlayDirective('uiMapCircle',
    'center_changed click dblclick mousedown mousemove ' +
    'mouseout mouseover mouseup radius_changed rightclick');

  mapOverlayDirective('uiMapGroundOverlay',
    'click dblclick');

})();

angular.module('app').controller('NoteCtrl', ['$scope', '$http', function ($scope, $http) {
  'use strict';
  $http.get('js/app/note/notes.json').then(function (resp) {
    $scope.notes = resp.data.notes;
    // set default note
    $scope.note = $scope.notes[0];
    $scope.notes[0].selected = true;
  });

  $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

  $scope.createNote = function () {
    var note = {
      content: 'New note',
      color: $scope.colors[Math.floor((Math.random() * 3))],
      date: Date.now()
    };
    $scope.notes.push(note);
    $scope.selectNote(note);
  };

  $scope.deleteNote = function (note) {
    $scope.notes.splice($scope.notes.indexOf(note), 1);
    if (note.selected) {
      $scope.note = $scope.notes[0];
      $scope.notes.length && ($scope.notes[0].selected = true);
    }
  };

  $scope.selectNote = function (note) {
    angular.forEach($scope.notes, function (note) {
      note.selected = false;
    });
    $scope.note = note;
    $scope.note.selected = true;
  };

}]);
/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
angular.module('app')
  .controller('notificationCreateController', ['$scope', '$modal', 'toaster', 'appConfig', 'cueFactory',
    function ($scope, $modal, toaster, appConfig, cueFactory) {
      $scope.notification = {
        type: 'Announcement',
        text:'',
        content:'',
        push:'NOW',
        date:'',
        valid:'1',
        format:'dd/MMM/yy'
      };
      console.log("in notificationCreateController");
      $scope.minDate = new Date();
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };
      $scope.createNotification = function (addForm, notification) {
        console.log($scope.notification);
      }
    }]);
/**
 * Created by bharadwaj on 10/2/15.
 */
'use strict';
/*
angular.module('app').factory('announcementFactory', ['$http', 'appConfig', function ($http, appConfig) {
  function createNotification(data){
    var url = appConfig.apiUrl + '/announcement/create';
    return $http({
      method:'POST',
      url:url,
      data:data
    })
  }
}]);*/

var angularSkycons = angular.module('angular-skycons', []);


angularSkycons.directive('skycon', function () {
  'use strict';
  return {
    restrict: 'E',
    replace: true,
    scope: {
      icon: '=',
      size: '='
    },
    link: function (scope, element, attrs) {

      // make a canvas for our icon
      var canvas = document.createElement('canvas');

      // set the CSS class from attribute
      if (!attrs.class) {
        canvas.className = '';
      } else {
        canvas.className = attrs.class;
      }

      // set default color if 'color' attribute not present
      var config = {};
      if (!attrs.color) {
        config.color = 'black';
      } else {
        config.color = attrs.color;
      }

      var skycons = new Skycons(config);

      // watch the size property from the controller
      scope.$watch('size', function (newVal, oldVal) {
        if (newVal) {
          canvas.height = newVal;
          canvas.width = newVal;
        } else {
          canvas.height = scope.size || 64;
          canvas.width = scope.size || 64;
        }
      }, true);

      // watch the icon property from the controller
      scope.$watch('icon', function () {
        skycons.set(canvas, scope.icon);
      }, true);

      skycons.play();

      if (element[0].nodeType === 8) {
        element.replaceWith(canvas);
      } else {
        element[0].appendChild(canvas);
      }

      scope.$on('$destroy', function () {
        skycons.remove(canvas);
        if (skycons.list.length === 0) {
          skycons.pause(canvas);
        }
      });
    }
  };
});

angular.module('app').controller('WeatherCtrl', ['$scope', 'yahooApi', 'geoApi', function ($scope, yahooApi, geoApi) {
  'use strict';
  $scope.userSearchText = '';
  $scope.search = {};
  $scope.forcast = {};
  $scope.place = {};
  $scope.data = {};

  // get place
  geoApi.then(function (res) {
    $scope.userSearchText = res.data.city + ', ' + res.data.country_code;
    $scope.getLocations();
  });

  // get locations
  $scope.getLocations = function () {
    var query = 'select * from geo.places where text="" + $scope.userSearchText + ""';
    yahooApi.query({'q': query, 'format': 'json'}, {}, function (response) {
      $scope.search = response;
      if (response.query.count === 1 && !response.query.results.channel) {
        $scope.getWeather(response.query.results.place.woeid, response.query.results.place.name, response.query.results.place.country.content);
      }
    });
  };

  // get weather
  $scope.getWeather = function (woeid, city, country) {
    $scope.place.city = city;
    $scope.place.country = country;
    var query = 'select item from weather.forecast where woeid=' + woeid;
    yahooApi.query({'q': query, 'format': 'json'}, {}, function (response) {
      response.query.results.channel.item.forecast.forEach(function (i, v) {
        i.icon = $scope.getCustomIcon(i.code);
      });
      response.query.results.channel.item.condition.icon = $scope.getCustomIcon(response.query.results.channel.item.condition.code);
      $scope.data = response;
    });
  };

  $scope.getCustomIcon = function (condition) {
    switch (condition) {
    case '0':
    case '1':
    case '2':
    case '24':
    case '25':
      return 'wind';
    case '5':
    case '6':
    case '7':
    case '18':
      return 'sleet';
    case '3':
    case '4':
    case '8':
    case '9':
    case '10':
    case '11':
    case '12':
    case '35':
    case '37':
    case '38':
    case '39':
    case '40':
    case '45':
    case '47':
      return 'rain';
    case '13':
    case '14':
    case '15':
    case '16':
    case '17':
    case '41':
    case '42':
    case '43':
    case '46':
      return 'snow';
    case '19':
    case '20':
    case '21':
    case '22':
    case '23':
      return 'fog';
    case '26':
    case '27':
    case '28':
    case '44':
      return 'cloudy';
    case '29':
      return 'partly-cloudy-night';
    case '30':
      return 'partly-cloudy-day';
    case '31':
    case '33':
      return 'clear-night';
    case '32':
    case '34':
    case '36':
      return 'clear-day';
    default:
      return '';
    }
  };
}
]);

angular.module('app').factory('yahooApi', ['$resource', function ($resource) {
  'use strict';
  return $resource('http://query.yahooapis.com/v1/public/yql', {},
    {
      'query': {
        method: 'GET',
        isArray: false
      }
    }
  );
}]);

angular.module('app').factory('geoApi', ['$http', function ($http) {
  'use strict';
  return $http.jsonp('http://muslimsalat.com/daily.json?callback=JSON_CALLBACK');
}
]);

function JSON_CALLBACK() {
  // Nothing
}
(function (global) {
  'use strict';

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function () {
    var raf = global.requestAnimationFrame ||
        global.webkitRequestAnimationFrame ||
        global.mozRequestAnimationFrame ||
        global.oRequestAnimationFrame ||
        global.msRequestAnimationFrame,
      caf = global.cancelAnimationFrame ||
        global.webkitCancelAnimationFrame ||
        global.mozCancelAnimationFrame ||
        global.oCancelAnimationFrame ||
        global.msCancelAnimationFrame;

    if (raf && caf) {
      requestInterval = function (fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function (handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
   function upsample(n, spline) {
   var polyline = [],
   len = spline.length,
   bx  = spline[0],
   by  = spline[1],
   cx  = spline[2],
   cy  = spline[3],
   dx  = spline[4],
   dy  = spline[5],
   i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

   for(i = 6; i !== spline.length; i += 2) {
   ax = bx;
   bx = cx;
   cx = dx;
   dx = spline[i    ];
   px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
   qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
   rx = -0.5 * ax            + 0.5 * cx           ;
   sx =                   bx                      ;

   ay = by;
   by = cy;
   cy = dy;
   dy = spline[i + 1];
   py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
   qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
   ry = -0.5 * ay            + 0.5 * cy           ;
   sy =                   by                      ;

   for(j = 0; j !== n; ++j) {
   t = j / n;

   polyline.push(
   ((px * t + qx) * t + rx) * t + sx,
   ((py * t + qy) * t + ry) * t + sy
   );
   }
   }

   polyline.push(
   px + qx + rx + sx,
   py + qy + ry + sy
   );

   return polyline;
   }

   function downsample(n, polyline) {
   var len = 0,
   i, dx, dy;

   for(i = 2; i !== polyline.length; i += 2) {
   dx = polyline[i    ] - polyline[i - 2];
   dy = polyline[i + 1] - polyline[i - 1];
   len += Math.sqrt(dx * dx + dy * dy);
   }

   len /= n;

   var small = [],
   target = len,
   min = 0,
   max, t;

   small.push(polyline[0], polyline[1]);

   for(i = 2; i !== polyline.length; i += 2) {
   dx = polyline[i    ] - polyline[i - 2];
   dy = polyline[i + 1] - polyline[i - 1];
   max = min + Math.sqrt(dx * dx + dy * dy);

   if(max > target) {
   t = (target - min) / (max - min);

   small.push(
   polyline[i - 2] + dx * t,
   polyline[i - 1] + dy * t
   );

   target += len;
   }

   min = max;
   }

   small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

   return small;
   }
   */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
    STROKE = 0.08,
    TAU = 2.0 * Math.PI,
    TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
      s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for (i = 5; i--;) {
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
    }
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
      b = cw * 0.12,
      c = cw * 0.24,
      d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
      b = cw * 0.32 + s * 0.5,
      c = cw * 0.50 - s * 0.5,
      i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for (i = 8; i--;) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
      b = cw * 0.05,
      c = Math.cos(t * TAU),
      p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
      b = TAU * 11 / 12,
      c = TAU * 7 / 12,
      i, p, x, y;

    ctx.fillStyle = color;

    for (i = 4; i--;) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
      b = TAU * 11 / 12,
      c = TAU * 7 / 12,
      i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (i = 4; i--;) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a = cw * 0.16,
      b = s * 0.75,
      u = t * TAU * 0.7,
      ux = Math.cos(u) * b,
      uy = Math.sin(u) * b,
      v = u + TAU / 3,
      vx = Math.cos(v) * b,
      vy = Math.sin(v) * b,
      w = u + TAU * 2 / 3,
      wx = Math.cos(w) * b,
      wy = Math.sin(w) * b,
      i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (i = 4; i--;) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
      b = cw * 0.06,
      c = cw * 0.21,
      d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
   var WIND_PATHS = [
   downsample(63, upsample(8, [
   -1.00, -0.28,
   -0.75, -0.18,
   -0.50,  0.12,
   -0.20,  0.12,
   -0.04, -0.04,
   -0.07, -0.18,
   -0.19, -0.18,
   -0.23, -0.05,
   -0.12,  0.11,
   0.02,  0.16,
   0.20,  0.15,
   0.50,  0.07,
   0.75,  0.18,
   1.00,  0.28
   ])),
   downsample(31, upsample(16, [
   -1.00, -0.10,
   -0.75,  0.00,
   -0.50,  0.10,
   -0.25,  0.14,
   0.00,  0.10,
   0.25,  0.00,
   0.50, -0.10,
   0.75, -0.14,
   1.00, -0.10
   ]))
   ];
   */

  var WIND_PATHS = [
      [
        -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
        -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
        -0.6083, 0.0065, -0.5868, 0.0396, -0.5643, 0.0731,
        -0.5372, 0.1041, -0.5033, 0.1259, -0.4662, 0.1406,
        -0.4275, 0.1493, -0.3881, 0.1530, -0.3487, 0.1526,
        -0.3095, 0.1488, -0.2708, 0.1421, -0.2319, 0.1342,
        -0.1943, 0.1217, -0.1600, 0.1025, -0.1290, 0.0785,
        -0.1012, 0.0509, -0.0764, 0.0206, -0.0547, -0.0120,
        -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
        -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
        -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
        -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
        -0.2064, 0.0033, -0.1853, 0.0362, -0.1613, 0.0672,
        -0.1350, 0.0961, -0.1051, 0.1213, -0.0706, 0.1397,
        -0.0332, 0.1512, 0.0053, 0.1580, 0.0442, 0.1624,
        0.0833, 0.1636, 0.1224, 0.1615, 0.1613, 0.1565,
        0.1999, 0.1500, 0.2378, 0.1402, 0.2749, 0.1279,
        0.3118, 0.1147, 0.3487, 0.1015, 0.3858, 0.0892,
        0.4236, 0.0787, 0.4621, 0.0715, 0.5012, 0.0702,
        0.5398, 0.0766, 0.5768, 0.0890, 0.6123, 0.1055,
        0.6466, 0.1244, 0.6805, 0.1440, 0.7147, 0.1630,
        0.7500, 0.1800
      ],
      [
        -0.7500, 0.0000, -0.7033, 0.0195, -0.6569, 0.0399,
        -0.6104, 0.0600, -0.5634, 0.0789, -0.5155, 0.0954,
        -0.4667, 0.1089, -0.4174, 0.1206, -0.3676, 0.1299,
        -0.3174, 0.1365, -0.2669, 0.1398, -0.2162, 0.1391,
        -0.1658, 0.1347, -0.1157, 0.1271, -0.0661, 0.1169,
        -0.0170, 0.1046, 0.0316, 0.0903, 0.0791, 0.0728,
        0.1259, 0.0534, 0.1723, 0.0331, 0.2188, 0.0129,
        0.2656, -0.0064, 0.3122, -0.0263, 0.3586, -0.0466,
        0.4052, -0.0665, 0.4525, -0.0847, 0.5007, -0.1002,
        0.5497, -0.1130, 0.5991, -0.1240, 0.6491, -0.1325,
        0.6994, -0.1380, 0.7500, -0.1400
      ]
    ],
    WIND_OFFSETS = [
      {start: 0.36, end: 0.11},
      {start: 0.56, end: 0.16}
    ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
      b = a / 3,
      c = 2 * b,
      d = (t % 1) * TAU,
      e = Math.cos(d),
      f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.arc(x, y, a, d, d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
      a = (t + index - WIND_OFFSETS[index].start) % total,
      c = (t + index - WIND_OFFSETS[index].end  ) % total,
      e = (t + index                            ) % total,
      b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if (c < 1) {
        c *= path.length / 2 - 1;
        d = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for (i = b; i !== d; i += 2) {
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
        }
        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else {
        for (i = b; i !== path.length; i += 2) {
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
        }
      }
      ctx.stroke();
    }

    else if (c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for (i = 2; i !== d; i += 2) {
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
      }
      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if (e < 1) {
      e *= path.length / 2 - 1;
      f = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function (opts) {
    this.list = [];
    this.interval = null;
    this.color = opts && opts.color ? opts.color : 'black';
    this.resizeClear = !!(opts && opts.resizeClear);
  };

  Skycons.CLEAR_DAY = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function (ctx, t, color) {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      s = Math.min(w, h),
      k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
      b = Math.cos((t + 0.25) * TAU) * s * 0.02,
      c = Math.cos((t + 0.50) * TAU) * s * 0.02,
      d = Math.cos((t + 0.75) * TAU) * s * 0.02,
      n = h * 0.936,
      e = Math.floor(n - k * 0.5) + 0.5,
      f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    _determineDrawingFunction: function (draw) {
      if (typeof draw === 'string') {
        draw = Skycons[draw.toUpperCase().replace(/-/g, '_')] || null;
      }
      return draw;
    },
    add: function (el, draw) {
      var obj;

      if (typeof el === 'string') {
        el = document.getElementById(el);
      }
      // Does nothing if canvas name doesn't exists
      if (el === null) {
        return;
      }
      draw = this._determineDrawingFunction(draw);

      // Does nothing if the draw function isn't actually a function
      if (typeof draw !== 'function') {
        return;
      }
      obj = {
        element: el,
        context: el.getContext('2d'),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function (el, draw) {
      var i;

      if (typeof el === 'string') {
        el = document.getElementById(el);
      }
      for (i = this.list.length; i--;) {
        if (this.list[i].element === el) {
          this.list[i].drawing = this._determineDrawingFunction(draw);
          this.draw(this.list[i], KEYFRAME);
          return;
        }
      }
      this.add(el, draw);
    },
    remove: function (el) {
      var i;

      if (typeof el === 'string') {
        el = document.getElementById(el);
      }
      for (i = this.list.length; i--;) {
        if (this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
      }
    },
    draw: function (obj, time) {
      var canvas = obj.context.canvas;

      if (this.resizeClear) {
        canvas.width = canvas.width;
      } else {
        obj.context.clearRect(0, 0, canvas.width, canvas.height);
      }
      obj.drawing(obj.context, time, this.color);
    },
    play: function () {
      var self = this;

      this.pause();
      this.interval = requestInterval(function () {
        var now = Date.now(),
          i;

        for (i = self.list.length; i--;) {
          self.draw(self.list[i], now);
        }
      }, 1000 / 60);
    },
    pause: function () {
      var i;

      if (this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));


angular.module('app').factory('browseFactory', function($http, appConfig){
  'use strict';
  var uploadTos3 = function(data){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl+'/rest/cloud/store',
      data: data,
      headers: {'Content-Type': undefined },
      transformRequest: angular.identity
    });
  };
  return {
    uploadTos3: uploadTos3
  };
});

/**
 * Created by paradigm on 1/6/2015.
 */

angular.module('app').factory('createFactory', function($http, appConfig){
  'use strict';
  var createBook = function(book){
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/rest/book/user/create',
      data: book
    });
  };
  return {
    createBook: createBook
  };
});

/**
 * Created by bharadwaj on 8/2/15.
 */
/*
'use strict';
angular.module('app').factory('imageBrowse', ['$http', 'appConfig','toaster', function ($http, appConfig,toaster) {
  function onBGSelect(){
    console.log("done??, from imageBrowse");
  }
  return {
    onBGSelect: onBGSelect
  }
}]);*/

/**
 * Created by bharadwaj on 9/2/15.
 */
angular.module('app').factory('userManagement', ['$http','appConfig','$q',  function($http, appConfig,$q){
  'use strict';

  var signUp = function(data){
    var deferred = $q.defer();
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/profile/user',
      headers: {
        'Content-Type': 'application/json',
        'J290EeGRFyIYRdXES7outLUbZKr':'l0FQ5cmpRcADmREyUY4DKwH3CnxejQtpb1cM'
      },
      data: data
    });
  };
  var login = function(data){
    var deferred = $q.defer();

    /*$http(data).success(function(data,status){
      
    }).error(function (err,status) {
      
    })*/
    return $http({
      method: 'POST',
      url: appConfig.apiUrl + '/user/action/signin',
      headers: {
        'Content-Type': 'application/json',
        'J290EeGRFyIYRdXES7outLUbZKr':'l0FQ5cmpRcADmREyUY4DKwH3CnxejQtpb1cM'
      },
      data: data
    });
  };
  return {
    signUp: signUp,
    login:login
  };
}]);
/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
  .filter('fromNow', function () {
    'use strict';
    return function (date) {
      return moment(date).fromNow();
    };
  });
/* Controllers */

// bootstrap controller
angular.module('app').controller('AccordionDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Accordion group header - #1',
      content: 'Dynamic group body - #1'
    },
    {
      title: 'Accordion group header - #2',
      content: 'Dynamic group body - #2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function () {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
}])
;
angular.module('app').controller('AlertDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.alerts = [
    {type: 'success', msg: 'Well done! You successfully read this important alert message.'},
    {type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.'},
    {type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...'}
  ];

  $scope.addAlert = function () {
    $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
  };

  $scope.closeAlert = function (index) {
    $scope.alerts.splice(index, 1);
  };
}])
;
angular.module('app').controller('ButtonsDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
}])
;
angular.module('app').controller('CarouselDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function () {
    slides.push({
      image: 'img/c' + slides.length + '.jpg',
      text: ['Carousel text #0', 'Carousel text #1', 'Carousel text #2', 'Carousel text #3'][slides.length % 4]
    });
  };
  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
}])
;
angular.module('app').controller('DropdownDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function (open) {
    //console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
}])
;
angular.module('app').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {
  'use strict';
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}])
;
angular.module('app').controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
  'use strict';
  $scope.items = ['item1', 'item2', 'item3'];
  $scope.open = function (size) {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}])
;
angular.module('app').controller('PaginationDemoCtrl', ['$scope', '$log', function ($scope, $log) {
  'use strict';
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function () {
    $log.info('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
}])
;
angular.module('app').controller('PopoverDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
}])
;
angular.module('app').controller('ProgressDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.max = 200;

  $scope.random = function () {
    var value = Math.floor((Math.random() * 100) + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    $scope.showWarning = (type === 'danger' || type === 'warning');

    $scope.dynamic = value;
    $scope.type = type;
  };
  $scope.random();

  $scope.randomStacked = function () {
    $scope.stacked = [];
    var types = ['success', 'info', 'warning', 'danger'];

    for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
      var index = Math.floor((Math.random() * 4));
      $scope.stacked.push({
        value: Math.floor((Math.random() * 30) + 1),
        type: types[index]
      });
    }
  };
  $scope.randomStacked();
}])
;
angular.module('app').controller('TabsDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.tabs = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true}
  ];
}])
;
angular.module('app').controller('RatingDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function (value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
}])
;
angular.module('app').controller('TooltipDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.dynamicTooltip = 'Hello, World!';
  $scope.dynamicTooltipText = 'dynamic';
  $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
}])
;
angular.module('app').controller('TypeaheadDemoCtrl', ['$scope', '$http', function ($scope, $http) {
  'use strict';
  $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  // Any function returning a promise object can be used to load values asynchronously
  $scope.getLocation = function (val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function (res) {
      var addresses = [];
      angular.forEach(res.data.results, function (item) {
        addresses.push(item.formatted_address);
      });
      return addresses;
    });
  };
}])
;
angular.module('app').controller('DatepickerDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.today = function () {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function (date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function () {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function ($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,
    class: 'datepicker'
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
}])
;
angular.module('app').controller('TimepickerDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function () {
    $scope.ismeridian = !$scope.ismeridian;
  };

  $scope.update = function () {
    var d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    $scope.mytime = d;
  };

  $scope.changed = function () {
    //console.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function () {
    $scope.mytime = null;
  };
}]);
/* Controllers */

angular.module('app')
  // Flot Chart controller
  .controller('FlotChartDemoCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.d = [
      [1, 6.5],
      [2, 6.5],
      [3, 7],
      [4, 8],
      [5, 7.5],
      [6, 7],
      [7, 6.8],
      [8, 7],
      [9, 7.2],
      [10, 7],
      [11, 6.8],
      [12, 7]
    ];

    $scope.d0_1 = [
      [0, 7],
      [1, 6.5],
      [2, 12.5],
      [3, 7],
      [4, 9],
      [5, 6],
      [6, 11],
      [7, 6.5],
      [8, 8],
      [9, 7]
    ];

    $scope.d0_2 = [
      [0, 4],
      [1, 4.5],
      [2, 7],
      [3, 4.5],
      [4, 3],
      [5, 3.5],
      [6, 6],
      [7, 3],
      [8, 4],
      [9, 3]
    ];

    $scope.d1_1 = [
      [10, 120],
      [20, 70],
      [30, 70],
      [40, 60]
    ];

    $scope.d1_2 = [
      [10, 50],
      [20, 60],
      [30, 90],
      [40, 35]
    ];

    $scope.d1_3 = [
      [10, 80],
      [20, 40],
      [30, 30],
      [40, 20]
    ];

    $scope.d2 = [];

    for (var i = 0; i < 20; ++i) {
      $scope.d2.push([i, Math.sin(i)]);
    }

    $scope.d3 = [
      {label: 'iPhone5S', data: 40},
      {label: 'iPad Mini', data: 10},
      {label: 'iPad Mini Retina', data: 20},
      {label: 'iPhone4S', data: 12},
      {label: 'iPad Air', data: 18}
    ];

    $scope.refreshData = function () {
      $scope.d0_1 = $scope.d0_2;
    };

    $scope.getRandomData = function () {
      var data = [],
        totalPoints = 150;
      if (data.length > 0) {
        data = data.slice(1);
      }
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50,
          y = prev + Math.random() * 10 - 5;
        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }
        data.push(y);
      }
      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
      }
      return res;
    };

    $scope.d4 = $scope.getRandomData();
  }]);
angular.module('app').controller('EditorCtrl', function ($scope) {
  'use strict';
  $scope.htmlVariable = '<h3>Try me!</h3><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';
});
angular.module('app').controller('FileUploadCtrl', ['$scope', 'FileUploader', function ($scope, FileUploader) {
  'use strict';
  var uploader = $scope.uploader = new FileUploader({
    url: 'js/controllers/upload.php'
  });

  // FILTERS

  uploader.filters.push({
    name: 'customFilter',
    fn: function (item /*{File|FileLikeObject}*/, options) {
      return this.queue.length < 10;
    }
  });

  // CALLBACKS

  uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
    console.info('onWhenAddingFileFailed', item, filter, options);
  };
  uploader.onAfterAddingFile = function (fileItem) {
    console.info('onAfterAddingFile', fileItem);
  };
  uploader.onAfterAddingAll = function (addedFileItems) {
    console.info('onAfterAddingAll', addedFileItems);
  };
  uploader.onBeforeUploadItem = function (item) {
    console.info('onBeforeUploadItem', item);
  };
  uploader.onProgressItem = function (fileItem, progress) {
    console.info('onProgressItem', fileItem, progress);
  };
  uploader.onProgressAll = function (progress) {
    console.info('onProgressAll', progress);
  };
  uploader.onSuccessItem = function (fileItem, response, status, headers) {
    console.info('onSuccessItem', fileItem, response, status, headers);
  };
  uploader.onErrorItem = function (fileItem, response, status, headers) {
    console.info('onErrorItem', fileItem, response, status, headers);
  };
  uploader.onCancelItem = function (fileItem, response, status, headers) {
    console.info('onCancelItem', fileItem, response, status, headers);
  };
  uploader.onCompleteItem = function (fileItem, response, status, headers) {
    console.info('onCompleteItem', fileItem, response, status, headers);
  };
  uploader.onCompleteAll = function () {
    console.info('onCompleteAll');
  };

  console.info('uploader', uploader);
}]);
/* Controllers */

// Form controller
angular.module('app').controller('FormDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.notBlackListed = function (value) {
    var blacklist = ['bad@domain.com', 'verybad@domain.com'];
    return blacklist.indexOf(value) === -1;
  };

  $scope.val = 15;
  var updateModel = function (val) {
    $scope.$apply(function () {
      $scope.val = val;
    });
  };
  angular.element('#slider').on('slideStop', function (data) {
    updateModel(data.value);
  });

  $scope.select2Number = [
    {text: 'First', value: 'One'},
    {text: 'Second', value: 'Two'},
    {text: 'Third', value: 'Three'}
  ];

  $scope.list_of_string = ['tag1', 'tag2'];
  $scope.select2Options = {
    'multiple': true,
    'simple_tags': true,
    'tags': ['tag1', 'tag2', 'tag3', 'tag4']  // Can be empty list.
  };

}])
;
angular.module('app').controller('GridDemoCtrl', ['$scope', '$http', function ($scope, $http) {
  'use strict';
  $scope.filterOptions = {
    filterText: '',
    useExternalFilter: true
  };
  $scope.totalServerItems = 0;
  $scope.pagingOptions = {
    pageSizes: [250, 500, 1000],
    pageSize: 250,
    currentPage: 1
  };
  $scope.setPagingData = function (data, page, pageSize) {
    var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
    $scope.myData = pagedData;
    $scope.totalServerItems = data.length;
    if (!$scope.$$phase) {
      $scope.$apply();
    }
  };
  $scope.getPagedDataAsync = function (pageSize, page, searchText) {
    setTimeout(function () {
      var data;
      if (searchText) {
        var ft = searchText.toLowerCase();
        $http.get('js/controllers/largeLoad.json').success(function (largeLoad) {
          data = largeLoad.filter(function (item) {
            return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
          });
          $scope.setPagingData(data, page, pageSize);
        });
      } else {
        $http.get('js/controllers/largeLoad.json').success(function (largeLoad) {
          $scope.setPagingData(largeLoad, page, pageSize);
        });
      }
    }, 100);
  };

  $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

  $scope.$watch('pagingOptions', function (newVal, oldVal) {
    if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);
  $scope.$watch('filterOptions', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);

  $scope.gridOptions = {
    data: 'myData',
    enablePaging: true,
    showFooter: true,
    totalServerItems: 'totalServerItems',
    pagingOptions: $scope.pagingOptions,
    filterOptions: $scope.filterOptions
  };
}]);
angular.module('app').controller('ImgCropCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.myImage = '';
  $scope.myCroppedImage = '';
  $scope.cropType = 'circle';

  var handleFileSelect = function (evt) {
    var file = evt.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (evt) {
      $scope.$apply(function ($scope) {
        $scope.myImage = evt.target.result;
      });
    };
    reader.readAsDataURL(file);
  };
  angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
}]);
// this is a lazy load controller, 
// so start with "app." to register this controller

angular.module('app').filter('propsFilter', function () {
  'use strict';
  return function (items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function (item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});
angular.module('app').controller('SelectCtrl', function ($scope, $http, $timeout) {
  'use strict';
  $scope.disabled = undefined;
  $scope.searchEnabled = undefined;

  $scope.enable = function () {
    $scope.disabled = false;
  };

  $scope.disable = function () {
    $scope.disabled = true;
  };

  $scope.enableSearch = function () {
    $scope.searchEnabled = true;
  };

  $scope.disableSearch = function () {
    $scope.searchEnabled = false;
  };

  $scope.clear = function () {
    $scope.person.selected = undefined;
    $scope.address.selected = undefined;
    $scope.country.selected = undefined;
  };

  $scope.someGroupFn = function (item) {

    if (item.name[0] >= 'A' && item.name[0] <= 'M') {
      return 'From A - M';
    }

    if (item.name[0] >= 'N' && item.name[0] <= 'Z') {
      return 'From N - Z';
    }

  };

  $scope.personAsync = {selected: 'wladimir@email.com'};
  $scope.peopleAsync = [];

  $timeout(function () {
    $scope.peopleAsync = [
      {name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States'},
      {name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina'},
      {name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina'},
      {name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador'},
      {name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador'},
      {name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States'},
      {name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia'},
      {name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador'},
      {name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia'},
      {name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia'}
    ];
  }, 3000);

  $scope.counter = 0;
  $scope.someFunction = function (item, model) {
    $scope.counter++;
    $scope.eventResult = {item: item, model: model};
  };

  $scope.removed = function (item, model) {
    $scope.lastRemoved = {
      item: item,
      model: model
    };
  };

  $scope.person = {};
  $scope.people = [
    {name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States'},
    {name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina'},
    {name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina'},
    {name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador'},
    {name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador'},
    {name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States'},
    {name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia'},
    {name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador'},
    {name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia'},
    {name: 'Nicolás', email: 'nicolas@email.com', age: 43, country: 'Colombia'}
  ];

  $scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

  $scope.multipleDemo = {};
  $scope.multipleDemo.colors = ['Blue', 'Red'];
  $scope.multipleDemo.selectedPeople = [$scope.people[5], $scope.people[4]];
  $scope.multipleDemo.selectedPeopleWithGroupBy = [$scope.people[8], $scope.people[6]];
  $scope.multipleDemo.selectedPeopleSimple = ['samantha@email.com', 'wladimir@email.com'];


  $scope.address = {};
  $scope.refreshAddresses = function (address) {
    var params = {address: address, sensor: false};
    return $http.get(
      'http://maps.googleapis.com/maps/api/geocode/json',
      {params: params}
    ).then(function (response) {
        $scope.addresses = response.data.results;
      });
  };

  $scope.country = {};
  $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'Andorra', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antarctica', code: 'AQ'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'Argentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Aruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'Austria', code: 'AT'},
    {name: 'Azerbaijan', code: 'AZ'},
    {name: 'Bahamas', code: 'BS'},
    {name: 'Bahrain', code: 'BH'},
    {name: 'Bangladesh', code: 'BD'},
    {name: 'Barbados', code: 'BB'},
    {name: 'Belarus', code: 'BY'},
    {name: 'Belgium', code: 'BE'},
    {name: 'Belize', code: 'BZ'},
    {name: 'Benin', code: 'BJ'},
    {name: 'Bermuda', code: 'BM'},
    {name: 'Bhutan', code: 'BT'},
    {name: 'Bolivia', code: 'BO'},
    {name: 'Bosnia and Herzegovina', code: 'BA'},
    {name: 'Botswana', code: 'BW'},
    {name: 'Bouvet Island', code: 'BV'},
    {name: 'Brazil', code: 'BR'},
    {name: 'British Indian Ocean Territory', code: 'IO'},
    {name: 'Brunei Darussalam', code: 'BN'},
    {name: 'Bulgaria', code: 'BG'},
    {name: 'Burkina Faso', code: 'BF'},
    {name: 'Burundi', code: 'BI'},
    {name: 'Cambodia', code: 'KH'},
    {name: 'Cameroon', code: 'CM'},
    {name: 'Canada', code: 'CA'},
    {name: 'Cape Verde', code: 'CV'},
    {name: 'Cayman Islands', code: 'KY'},
    {name: 'Central African Republic', code: 'CF'},
    {name: 'Chad', code: 'TD'},
    {name: 'Chile', code: 'CL'},
    {name: 'China', code: 'CN'},
    {name: 'Christmas Island', code: 'CX'},
    {name: 'Cocos (Keeling) Islands', code: 'CC'},
    {name: 'Colombia', code: 'CO'},
    {name: 'Comoros', code: 'KM'},
    {name: 'Congo', code: 'CG'},
    {name: 'Congo, The Democratic Republic of the', code: 'CD'},
    {name: 'Cook Islands', code: 'CK'},
    {name: 'Costa Rica', code: 'CR'},
    {name: 'Cote D\'Ivoire', code: 'CI'},
    {name: 'Croatia', code: 'HR'},
    {name: 'Cuba', code: 'CU'},
    {name: 'Cyprus', code: 'CY'},
    {name: 'Czech Republic', code: 'CZ'},
    {name: 'Denmark', code: 'DK'},
    {name: 'Djibouti', code: 'DJ'},
    {name: 'Dominica', code: 'DM'},
    {name: 'Dominican Republic', code: 'DO'},
    {name: 'Ecuador', code: 'EC'},
    {name: 'Egypt', code: 'EG'},
    {name: 'El Salvador', code: 'SV'},
    {name: 'Equatorial Guinea', code: 'GQ'},
    {name: 'Eritrea', code: 'ER'},
    {name: 'Estonia', code: 'EE'},
    {name: 'Ethiopia', code: 'ET'},
    {name: 'Falkland Islands (Malvinas)', code: 'FK'},
    {name: 'Faroe Islands', code: 'FO'},
    {name: 'Fiji', code: 'FJ'},
    {name: 'Finland', code: 'FI'},
    {name: 'France', code: 'FR'},
    {name: 'French Guiana', code: 'GF'},
    {name: 'French Polynesia', code: 'PF'},
    {name: 'French Southern Territories', code: 'TF'},
    {name: 'Gabon', code: 'GA'},
    {name: 'Gambia', code: 'GM'},
    {name: 'Georgia', code: 'GE'},
    {name: 'Germany', code: 'DE'},
    {name: 'Ghana', code: 'GH'},
    {name: 'Gibraltar', code: 'GI'},
    {name: 'Greece', code: 'GR'},
    {name: 'Greenland', code: 'GL'},
    {name: 'Grenada', code: 'GD'},
    {name: 'Guadeloupe', code: 'GP'},
    {name: 'Guam', code: 'GU'},
    {name: 'Guatemala', code: 'GT'},
    {name: 'Guernsey', code: 'GG'},
    {name: 'Guinea', code: 'GN'},
    {name: 'Guinea-Bissau', code: 'GW'},
    {name: 'Guyana', code: 'GY'},
    {name: 'Haiti', code: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
    {name: 'Holy See (Vatican City State)', code: 'VA'},
    {name: 'Honduras', code: 'HN'},
    {name: 'Hong Kong', code: 'HK'},
    {name: 'Hungary', code: 'HU'},
    {name: 'Iceland', code: 'IS'},
    {name: 'India', code: 'IN'},
    {name: 'Indonesia', code: 'ID'},
    {name: 'Iran, Islamic Republic Of', code: 'IR'},
    {name: 'Iraq', code: 'IQ'},
    {name: 'Ireland', code: 'IE'},
    {name: 'Isle of Man', code: 'IM'},
    {name: 'Israel', code: 'IL'},
    {name: 'Italy', code: 'IT'},
    {name: 'Jamaica', code: 'JM'},
    {name: 'Japan', code: 'JP'},
    {name: 'Jersey', code: 'JE'},
    {name: 'Jordan', code: 'JO'},
    {name: 'Kazakhstan', code: 'KZ'},
    {name: 'Kenya', code: 'KE'},
    {name: 'Kiribati', code: 'KI'},
    {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
    {name: 'Korea, Republic of', code: 'KR'},
    {name: 'Kuwait', code: 'KW'},
    {name: 'Kyrgyzstan', code: 'KG'},
    {name: 'Lao People\'s Democratic Republic', code: 'LA'},
    {name: 'Latvia', code: 'LV'},
    {name: 'Lebanon', code: 'LB'},
    {name: 'Lesotho', code: 'LS'},
    {name: 'Liberia', code: 'LR'},
    {name: 'Libyan Arab Jamahiriya', code: 'LY'},
    {name: 'Liechtenstein', code: 'LI'},
    {name: 'Lithuania', code: 'LT'},
    {name: 'Luxembourg', code: 'LU'},
    {name: 'Macao', code: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
    {name: 'Madagascar', code: 'MG'},
    {name: 'Malawi', code: 'MW'},
    {name: 'Malaysia', code: 'MY'},
    {name: 'Maldives', code: 'MV'},
    {name: 'Mali', code: 'ML'},
    {name: 'Malta', code: 'MT'},
    {name: 'Marshall Islands', code: 'MH'},
    {name: 'Martinique', code: 'MQ'},
    {name: 'Mauritania', code: 'MR'},
    {name: 'Mauritius', code: 'MU'},
    {name: 'Mayotte', code: 'YT'},
    {name: 'Mexico', code: 'MX'},
    {name: 'Micronesia, Federated States of', code: 'FM'},
    {name: 'Moldova, Republic of', code: 'MD'},
    {name: 'Monaco', code: 'MC'},
    {name: 'Mongolia', code: 'MN'},
    {name: 'Montserrat', code: 'MS'},
    {name: 'Morocco', code: 'MA'},
    {name: 'Mozambique', code: 'MZ'},
    {name: 'Myanmar', code: 'MM'},
    {name: 'Namibia', code: 'NA'},
    {name: 'Nauru', code: 'NR'},
    {name: 'Nepal', code: 'NP'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Netherlands Antilles', code: 'AN'},
    {name: 'New Caledonia', code: 'NC'},
    {name: 'New Zealand', code: 'NZ'},
    {name: 'Nicaragua', code: 'NI'},
    {name: 'Niger', code: 'NE'},
    {name: 'Nigeria', code: 'NG'},
    {name: 'Niue', code: 'NU'},
    {name: 'Norfolk Island', code: 'NF'},
    {name: 'Northern Mariana Islands', code: 'MP'},
    {name: 'Norway', code: 'NO'},
    {name: 'Oman', code: 'OM'},
    {name: 'Pakistan', code: 'PK'},
    {name: 'Palau', code: 'PW'},
    {name: 'Palestinian Territory, Occupied', code: 'PS'},
    {name: 'Panama', code: 'PA'},
    {name: 'Papua New Guinea', code: 'PG'},
    {name: 'Paraguay', code: 'PY'},
    {name: 'Peru', code: 'PE'},
    {name: 'Philippines', code: 'PH'},
    {name: 'Pitcairn', code: 'PN'},
    {name: 'Poland', code: 'PL'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Puerto Rico', code: 'PR'},
    {name: 'Qatar', code: 'QA'},
    {name: 'Reunion', code: 'RE'},
    {name: 'Romania', code: 'RO'},
    {name: 'Russian Federation', code: 'RU'},
    {name: 'Rwanda', code: 'RW'},
    {name: 'Saint Helena', code: 'SH'},
    {name: 'Saint Kitts and Nevis', code: 'KN'},
    {name: 'Saint Lucia', code: 'LC'},
    {name: 'Saint Pierre and Miquelon', code: 'PM'},
    {name: 'Saint Vincent and the Grenadines', code: 'VC'},
    {name: 'Samoa', code: 'WS'},
    {name: 'San Marino', code: 'SM'},
    {name: 'Sao Tome and Principe', code: 'ST'},
    {name: 'Saudi Arabia', code: 'SA'},
    {name: 'Senegal', code: 'SN'},
    {name: 'Serbia and Montenegro', code: 'CS'},
    {name: 'Seychelles', code: 'SC'},
    {name: 'Sierra Leone', code: 'SL'},
    {name: 'Singapore', code: 'SG'},
    {name: 'Slovakia', code: 'SK'},
    {name: 'Slovenia', code: 'SI'},
    {name: 'Solomon Islands', code: 'SB'},
    {name: 'Somalia', code: 'SO'},
    {name: 'South Africa', code: 'ZA'},
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
    {name: 'Spain', code: 'ES'},
    {name: 'Sri Lanka', code: 'LK'},
    {name: 'Sudan', code: 'SD'},
    {name: 'Suriname', code: 'SR'},
    {name: 'Svalbard and Jan Mayen', code: 'SJ'},
    {name: 'Swaziland', code: 'SZ'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Switzerland', code: 'CH'},
    {name: 'Syrian Arab Republic', code: 'SY'},
    {name: 'Taiwan, Province of China', code: 'TW'},
    {name: 'Tajikistan', code: 'TJ'},
    {name: 'Tanzania, United Republic of', code: 'TZ'},
    {name: 'Thailand', code: 'TH'},
    {name: 'Timor-Leste', code: 'TL'},
    {name: 'Togo', code: 'TG'},
    {name: 'Tokelau', code: 'TK'},
    {name: 'Tonga', code: 'TO'},
    {name: 'Trinidad and Tobago', code: 'TT'},
    {name: 'Tunisia', code: 'TN'},
    {name: 'Turkey', code: 'TR'},
    {name: 'Turkmenistan', code: 'TM'},
    {name: 'Turks and Caicos Islands', code: 'TC'},
    {name: 'Tuvalu', code: 'TV'},
    {name: 'Uganda', code: 'UG'},
    {name: 'Ukraine', code: 'UA'},
    {name: 'United Arab Emirates', code: 'AE'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'United States', code: 'US'},
    {name: 'United States Minor Outlying Islands', code: 'UM'},
    {name: 'Uruguay', code: 'UY'},
    {name: 'Uzbekistan', code: 'UZ'},
    {name: 'Vanuatu', code: 'VU'},
    {name: 'Venezuela', code: 'VE'},
    {name: 'Vietnam', code: 'VN'},
    {name: 'Virgin Islands, British', code: 'VG'},
    {name: 'Virgin Islands, U.S.', code: 'VI'},
    {name: 'Wallis and Futuna', code: 'WF'},
    {name: 'Western Sahara', code: 'EH'},
    {name: 'Yemen', code: 'YE'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'}
  ];
});
/* Controllers */
// signin controller
angular.module('app').controller('SigninFormController', ['$scope', '$http', '$state','Facebook','userManagement','toaster','$cookies',
  function ($scope, $http, $state,Facebook,userManagement,toaster,$cookies) {
  'use strict';
  $scope.user = {};
  $scope.authError = null;
    $scope.me = function(accessToken){
      Facebook.api('/me', function (response) {
        /*$http.get('http://jsonip.com').then(function (result) {
          return result;
        })
          .then(function(result){

          });*/
        $http.get('http://jsonip.com').then(function (result) {
          var details = {
            device_id:result.data.ip,
            platform:'WEB',
            provider:'FACEBOOK',
            uid:response.id,
            access_token:accessToken
          };
          $scope.myPromise = userManagement.login(details).success(function (result) {
            console.log(result);
            $cookies['userId'] = result.user_id;
            console.log($cookies['userId']);
            $state.go('app.cue');
          }).error(function (err) {
            if(err.type === 400){
              var accounts = [],account = {};
              account.provider = 'FACEBOOK';
              account.uid = details.uid;
              account.access_token = details.access_token;
              accounts.push(account);
              details.accounts = accounts;

              userManagement.signUp(details).success(function (data) {
                console.log("created!", data);
                if (data.success) {
                  toaster.pop('success', data.message);
                  $cookies['userId'] = result.user_id;
                  console.log($cookies['userId'],'cre');
                  $state.go('app.cue');
                } else {
                  toaster.pop('success', 'Successfully Registered.');
                  $cookies['userId'] = result.user_id;
                  console.log($cookies['userId'],'Reg');
                  $state.go('app.cue');
                }
              }).error(function (err) {
                console.log(err);
              });
            }
          })
        },function(err){

        })
      });
    };
  $scope.login = function () {
    $scope.authError = null;
    var emailList = ['admin@whatsay.com'],passwordList = ['123'];
    var index = emailList.indexOf($scope.user.email);
    if (index !== -1 && $scope.user.password === passwordList[index]) {
      $state.go('app.cue');
    } else {
      //$scope.authError = 'Email or Password not right';
      //userManagement.login();
      $scope.myPromise = $http.get('http://jsonip.com').then(function (result) {
        var data = {};
        data.device_id = result.data.ip;
        data.platform = 'WEB';
        data.provider = 'EMAIL';
        data.uid = $scope.user.email;
        data.password = $scope.user.password;
        console.log(result.data.ip,data);
        userManagement.login(data).success(function(result){
          console.log(result);
          if(result.user_id){
            $cookies['userId'] = result.user_id;
            console.log($cookies['userId']);
            $state.go('app.cue');
          }else if(result.error) {
            toaster.pop('error',result.error);
          }
        }).error(function(err){
          console.log(err);
          toaster.pop('error',err.error);
        })
      });
    }
    // Try to login
    /*$http.post('api/login.json', {email: $scope.user.email, password: $scope.user.password})
     .then(function(response) {
     if ( !response.data.user ) {
     $scope.authError = 'Email or Password not right';
     }else{
     $state.go('app.dashboard-v1');
     }
     }, function(x) {
     $scope.authError = 'Server Error';
     });*/
  };

    $scope.fbLogin = function () {
      Facebook.login(function (response) {
        if(response.status === 'connected'){
          console.log(response);
          $scope.logged = true;
          var accessToken = response.authResponse.accessToken;
          $scope.me(accessToken);
          //$state.go('app.cue');
        //  call usser profile func
        }
      })
    };
    $scope.logout = function () {
      delete $cookies['userId'];
      Facebook.logout();
      $state.go('whatsay.login');
    //  kill access token of fb??.
    };
}])
;
// signup controller
angular.module('app').controller('SignupFormController', ['$scope', '$http', '$state', 'Facebook', 'userManagement', 'toaster',
  function ($scope, $http, $state, Facebook, userManagement, toaster) {
    'use strict';
    $scope.user = {};
   /* $scope.user.email = "bharad@whatsay.com";
    $scope.user.password = "12345678";
    $scope.agree = true;*/

    $scope.authError = null;
    var resetForm = function () {
      $scope.user.email = "";
      $scope.user.password = "";
      $scope.agree = false;
    };
    $scope.me = function (accessToken) {
      Facebook.api('/me', function (response) {
        $http.get('http://jsonip.com').then(function (result) {
          var details = {
            device_id:result.data.ip,
            platform:'WEB',
            provider:'FACEBOOK',
            uid:response.id,
            access_token:accessToken
          };
          userManagement.login(details).success(function (result) {
            console.log(result);
            $state.go('app.cue');
          }).error(function (err) {
            console.log(err);
            if(err.type === 400){
              $scope.signup(details);
            }
          })
        },function(err){

        })

        //$scope.signup(details);
      });
    };
    $scope.signup = function (details) {
      $scope.authError = null;

      $scope.myPromise = $http.get('http://jsonip.com').then(function (result) {
        var data = {}, accounts = {};
        data.device_id = result.data.ip;
        data.platform = 'WEB';
        accounts.provider = details.provider || 'EMAIL';
        accounts.email_id = $scope.user.email;
        accounts.password = $scope.user.password;
        accounts.uid = details.uid || '';
        accounts.access_token = details.access_token || '';
        data.accounts = [];
        data.accounts.push(accounts);
        $scope.myPromise = userManagement.signUp(data).success(function (data) {
          console.log("created!", data);
          if (data.success) {
            toaster.pop('success', data.message);
            $state.go('whatsay.login');
          } else {
            toaster.pop('error', data.message);
          }
        }).error(function (err) {
          console.log(err);
        });
      }, function (error) {
        console.log(error);
      });


    };
    $scope.fbLogin = function () {
      Facebook.login(function (response) {
        if (response.status === 'connected') {
          console.log(response,'access-token');
          $scope.logged = true;
          var accessToken = response.authResponse.accessToken;
          $scope.me(accessToken);
        }
      });
    }
  }])
;
angular.module('app').controller('SliderCtrl', function ($scope) {
  'use strict';
  $scope.cost = 40;
  $scope.range = {
    min: 30,
    max: 60
  };
  $scope.currencyFormatting = function (value) {
    return '$' + value.toString();
  };
});
// tab controller
angular.module('app').controller('CustomTabController', ['$scope', function ($scope) {
  'use strict';
  $scope.tabs = [true, false, false];
  $scope.tab = function (index) {
    angular.forEach($scope.tabs, function (i, v) {
      $scope.tabs[v] = false;
    });
    $scope.tabs[index] = true;
  };
}]);
angular.module('app').controller('ToasterDemoCtrl', ['$scope', 'toaster', function ($scope, toaster) {
  'use strict';
  $scope.toaster = {
    type: 'success',
    title: 'Title',
    text: 'Message'
  };
  $scope.pop = function () {
    toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
  };
}]);
angular.module('app').controller('AbnTestController', function ($scope, $timeout) {
  'use strict';
  var apple_selected, tree, treedata_avm, treedata_geography;
  $scope.my_tree_handler = function (branch) {
    var _ref;
    $scope.output = 'You selected: ' + branch.label;
    if ((_ref = branch.data) !== null ? _ref.description : void 0) {
      return $scope.output += '(' + branch.data.description + ')';
    }
  };
  apple_selected = function (branch) {
    return $scope.output = 'APPLE! : ' + branch.label;
  };
  treedata_avm = [
    {
      label: 'Animal',
      children: [
        {
          label: 'Dog',
          data: {
            description: 'man\'/s best friend'
          }
        },
        {
          label: 'Cat',
          data: {
            description: 'Felis catus'
          }
        },
        {
          label: 'Hippopotamus',
          data: {
            description: 'hungry, hungry'
          }
        },
        {
          label: 'Chicken',
          children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
        }
      ]
    },
    {
      label: 'Vegetable',
      data: {
        definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
        data_can_contain_anything: true
      },
      onSelect: function (branch) {
        return $scope.output = 'Vegetable: ' + branch.data.definition;
      },
      children: [
        {
          label: 'Oranges'
        },
        {
          label: 'Apples',
          children: [
            {
              label: 'Granny Smith',
              onSelect: apple_selected
            },
            {
              label: 'Red Delicous',
              onSelect: apple_selected
            },
            {
              label: 'Fuji',
              onSelect: apple_selected
            }
          ]
        }
      ]
    },
    {
      label: 'Mineral',
      children: [
        {
          label: 'Rock',
          children: ['Igneous', 'Sedimentary', 'Metamorphic']
        },
        {
          label: 'Metal',
          children: ['Aluminum', 'Steel', 'Copper']
        },
        {
          label: 'Plastic',
          children: [
            {
              label: 'Thermoplastic',
              children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
            },
            {
              label: 'Thermosetting Polymer',
              children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
            }
          ]
        }
      ]
    }
  ];
  treedata_geography = [
    {
      label: 'North America',
      children: [
        {
          label: 'Canada',
          children: ['Toronto', 'Vancouver']
        },
        {
          label: 'USA',
          children: ['New York', 'Los Angeles']
        },
        {
          label: 'Mexico',
          children: ['Mexico City', 'Guadalajara']
        }
      ]
    },
    {
      label: 'South America',
      children: [
        {
          label: 'Venezuela',
          children: ['Caracas', 'Maracaibo']
        },
        {
          label: 'Brazil',
          children: ['Sao Paulo', 'Rio de Janeiro']
        },
        {
          label: 'Argentina',
          children: ['Buenos Aires', 'Cordoba']
        }
      ]
    }
  ];
  $scope.my_data = treedata_avm;
  $scope.try_changing_the_tree_data = function () {
    if ($scope.my_data === treedata_avm) {
      return $scope.my_data = treedata_geography;
    } else {
      return $scope.my_data = treedata_avm;
    }
  };
  $scope.my_tree = tree = {};
  $scope.try_async_load = function () {
    $scope.my_data = [];
    $scope.doing_async = true;
    return $timeout(function () {
      if (Math.random() < 0.5) {
        $scope.my_data = treedata_avm;
      } else {
        $scope.my_data = treedata_geography;
      }
      $scope.doing_async = false;
      return tree.expand_all();
    }, 1000);
  };
  return $scope.try_adding_a_branch = function () {
    var b;
    b = tree.get_selected_branch();
    return tree.add_branch(b, {
      label: 'New Branch',
      data: {
        something: 42,
        'else': 43
      }
    });
  };
});
// jVectorMap controller
angular.module('app').controller('JVectorMapDemoCtrl', ['$scope', function ($scope) {
  'use strict';
  $scope.world_markers = [
    {latLng: [41.90, 12.45], name: 'Vatican City'},
    {latLng: [43.73, 7.41], name: 'Monaco'},
    {latLng: [-0.52, 166.93], name: 'Nauru'},
    {latLng: [-8.51, 179.21], name: 'Tuvalu'},
    {latLng: [43.93, 12.46], name: 'San Marino'},
    {latLng: [47.14, 9.52], name: 'Liechtenstein'},
    {latLng: [7.11, 171.06], name: 'Marshall Islands'},
    {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
    {latLng: [3.2, 73.22], name: 'Maldives'},
    {latLng: [35.88, 14.5], name: 'Malta'},
    {latLng: [12.05, -61.75], name: 'Grenada'},
    {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
    {latLng: [13.16, -59.55], name: 'Barbados'},
    {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
    {latLng: [-4.61, 55.45], name: 'Seychelles'},
    {latLng: [7.35, 134.46], name: 'Palau'},
    {latLng: [42.5, 1.51], name: 'Andorra'},
    {latLng: [14.01, -60.98], name: 'Saint Lucia'},
    {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
    {latLng: [1.3, 103.8], name: 'Singapore'},
    {latLng: [1.46, 173.03], name: 'Kiribati'},
    {latLng: [-21.13, -175.2], name: 'Tonga'},
    {latLng: [15.3, -61.38], name: 'Dominica'},
    {latLng: [-20.2, 57.5], name: 'Mauritius'},
    {latLng: [26.02, 50.55], name: 'Bahrain'},
    {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
  ];

  $scope.usa_markers = [
    {latLng: [40.71, -74.00], name: 'New York'},
    {latLng: [34.05, -118.24], name: 'Los Angeles'},
    {latLng: [41.87, -87.62], name: 'Chicago'},
    {latLng: [29.76, -95.36], name: 'Houston'},
    {latLng: [39.95, -75.16], name: 'Philadelphia'},
    {latLng: [38.90, -77.03], name: 'Washington'},
    {latLng: [37.36, -122.03], name: 'Silicon Valley'}
  ];
}])
;