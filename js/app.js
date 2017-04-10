var app = angular.module('hrms', [
    'ngRoute', 'ngAnimate', 'ngSanitize'
]).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .when('/404', {
            templateUrl: 'tpl/404.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
}).config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
    }
]);