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