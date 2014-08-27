angular.module('DeleteCtrl', []).controller('DeleteController', function($scope, $http) {

  dates = {};

  $http.get('/api/dates').success(function(data){
    $scope.dates = data
    console.log(data)

    $scope.orderProp = '-star';

    $scope.delete = function(data){
    $http.delete('/api/dates/'+ data)
    .success(function(data){
     console.log('deleted');
    })
    .error(function(data){
      console.log('Error:' + data);
    });
  };

  });

});
