angular.module('meuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home',{
        url:'/',
        templateUrl: 'app/views/home.html',
        controller: 'TesteController'
    })
    .state('forca',{
        url:'/forca',
        templateUrl: 'app/views/forca.html',
        controller: 'ForcaController'
    })
    .state('JogoDaVelha',{
        url:'/JogoDaVelha',
        templateUrl: 'app/views/JogoDaVelha.html',
        controller: 'JogoDaVelhaController'
    })


    $urlRouterProvider.otherwise('/');

})