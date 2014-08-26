angular.module('SideService', []).factory('Side', ['$http', function($http) {

  return {
    // call to get all nerds
    get : function() {
      return $http.get('/api/sides');
    },

    // call to POST and create a new nerd
    create : function(sideData) {
      return $http.post('/api/sides', sideData);
    },

    // call to DELETE a nerd
    delete : function(id) {
      return $http.delete('/api/sides/' + id);
    }
  }

}]);
