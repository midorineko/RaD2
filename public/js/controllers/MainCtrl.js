angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

  $scope.tagline = 'Find a Place!';

  dates = {};

  $http.get('/api/dates').success(function(data){
    $scope.dates = data
  });

});
