var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function($scope){
  $scope.mkActive = function(n){
    if (n === 'nav1') {
      $scope.n1 = 'active';
      $scope.n2 = '';
      $scope.n3 = '';
    }
    else if (n === 'nav2') {
      $scope.n1 = '';
      $scope.n2 = 'active';
      $scope.n3 = '';
    }
    else {
      $scope.n1 = '';
      $scope.n2 = '';
      $scope.n3 = 'active';
    }
  };
});