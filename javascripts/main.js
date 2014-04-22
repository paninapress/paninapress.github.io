var myApp = angular.module('myApp', []);

myApp.controller('mainCtrl',['$scope', function($scope){
  $scope.n4 = 'hidden';
  $scope.mkActive = function(n){
    // these are the main 3 nav controls
    if (n === 'nav1') {
      $scope.n1 = 'active';
      $scope.n2 = '';
      $scope.n3 = '';
      if ($scope.n4 === 'hidden'){
        $scope.n4 = '';
      }
      else {
        $scope.n4 = 'hidden';
        resetProjectnavs();
      }
    }
    else if (n === 'nav2') {
      $scope.n1 = '';
      $scope.n2 = 'active';
      $scope.n3 = '';
      $scope.n4 = 'hidden';
      resetProjectnavs();
    }
    else if (n === 'nav3') {
      $scope.n1 = '';
      $scope.n2 = '';
      $scope.n3 = 'active';
      $scope.n4 = 'hidden';
      resetProjectnavs();
    }
    // these are the project nav controls
    else if (n === 'nav5'){
      $scope.n5 = 'navHighlight';
      $scope.n6 = null;
      $scope.n7 = null;
    }
    else if (n === 'nav6'){
      $scope.n5 = null;
      $scope.n6 = 'navHighlight';
      $scope.n7 = null;
    }
    else if (n === 'nav7'){
      $scope.n5 = null;
      $scope.n6 = null;
      $scope.n7 = 'navHighlight';
    }
    else{
      resetProjectnavs();
    }
  };
  var resetProjectnavs = function(){
      $scope.n5 = null;
      $scope.n6 = null;
      $scope.n7 = null;
  }

}]);