angular.module('meuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home',{
        url:'/',
        templateUrl: 'app/views/home.html',
        controller: 'TesteController'
    })


    $urlRouterProvider.otherwise('/');

})