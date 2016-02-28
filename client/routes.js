/**
 * Created by Joshua on 2/27/2016.
 */
angular.module('whiskyMobile').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'client/login/login.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'client/register/register.html'
        })
        .state('home', {
            url:'/home',
            templateUrl: 'client/home/home.html'
        });

    $urlRouterProvider.otherwise('/');
});