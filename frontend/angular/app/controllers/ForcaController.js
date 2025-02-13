angular.module('meuApp')
.controller('ForcaController', function($scope){

$scope.palavra = '';


$scope.salvarPalavra = function(){
    console.log($scope.palavra)
}



})