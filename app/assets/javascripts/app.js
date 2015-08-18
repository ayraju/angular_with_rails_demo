
 angular.module('myApp', ['myProject','ngRoute']).config(function($routeProvider){
  $routeProvider

  .when('/',{
   templateUrl: 'pages/home.html'
  })

  .when('/about',{
   templateUrl: 'pages/about.html',
   controller: 'myAboutController'
  })

  .when('/contact',{
   templateUrl: 'pages/contact.html',
   controller: 'myContactController'
  })

  .when('/projects',{
   templateUrl: 'projects/index.html',
   controller: 'myProjectIndexController'
  })

  .when('/projects/new',{
   templateUrl: 'projects/new.html'
  })

  .when('/terms',{
   templateUrl: 'pages/terms.html',
   controller: 'myTermsController'
  })

  .when('/history',{
   templateUrl: 'pages/history.html',
   controller: 'myHistoryController'
  })
 }); 