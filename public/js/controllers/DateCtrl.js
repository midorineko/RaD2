angular.module('DateCtrl', []).controller('DateController', function($scope, $http) {

  $scope.tagline = 'Add a new one :3';

  $scope.createDate = function(){
    $http.post('/api/dates', $scope.formData)
    .success(function(data){
    console.log($scope.formData);
      $scope.formData = {};
      $scope.dates = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error:' + data);
    });
  };

});
