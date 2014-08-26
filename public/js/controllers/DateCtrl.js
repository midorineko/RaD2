angular.module('DateCtrl', []).controller('DateController', function($scope, $http) {

  $scope.tagline = 'Add a new one :3';
  $http.get('/api/dates').success(function(data){
    this.dates = data
    console.log(dates)
  });

});
