myApp.config(function($routeProvider) {
  $routeProvider

  .when('/home', {
    templateUrl : 'html/pages/home',
    controller  : 'HomeController'
  })
  .when('/users', {
    templateUrl : 'html/pages/user',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/home'});
});