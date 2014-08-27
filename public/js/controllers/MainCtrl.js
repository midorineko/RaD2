angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

  this.tagline = 'Find a Place!';

  dates = {};

  $http.get('/api/dates').success(function(data){
    $scope.dates = data
    console.log(data)

    $scope.orderProp = '-star';
  });

});
