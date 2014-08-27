angular.module('SideCtrl', []).controller('SideController', function($scope, $http) {

  $scope.tagline = 'Fail Places!';

  dates = {};

  $http.get('/api/dates').success(function(data){
    $scope.dates = data
    console.log(data)
    $scope.orderProp = 'star';
  });

});
