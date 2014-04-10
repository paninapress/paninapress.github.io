var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function($scope){
  $scope.n4 = 'hidden';
  $scope.mkActive = function(n){
    if (n === 'nav1') {
      $scope.n1 = 'active';
      $scope.n2 = '';
      $scope.n3 = '';
      if ($scope.n4 === 'hidden'){
        $scope.n4 = '';
      }
      else {$scope.n4 = 'hidden';}
    }
    else if (n === 'nav2') {
      $scope.n1 = '';
      $scope.n2 = 'active';
      $scope.n3 = '';
      $scope.n4 = 'hidden';
    }
    else {
      $scope.n1 = '';
      $scope.n2 = '';
      $scope.n3 = 'active';
      $scope.n4 = 'hidden';
    }
  };
});