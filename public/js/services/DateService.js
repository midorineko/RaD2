angular.module('DateService', []).factory('Date', ['$http', function($http) {

  return {
    // call to get all nerds
    get : function() {
      return $http.get('/api/dates');
    },

    // call to POST and create a new geek
    create : function(dateData) {
      return $http.post('/api/dates', dateData);
    },

    // call to DELETE a geek
    delete : function(id) {
      return $http.delete('/api/dates/' + id);
    }
  }

}]);
