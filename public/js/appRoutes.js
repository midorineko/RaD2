  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    // nerds page that will use the NerdController
    .when('/dates', {
      templateUrl: 'views/date.html',
      controller: 'DateController'
    })

    //
    .when('/sides', {
      templateUrl: 'views/side.html',
      controller: 'SideController'
    });

  $locationProvider.html5Mode(true);

}]);
