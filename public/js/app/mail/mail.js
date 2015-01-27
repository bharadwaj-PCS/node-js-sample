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