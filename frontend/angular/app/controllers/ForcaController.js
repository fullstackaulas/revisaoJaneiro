angular.module('meuApp')
.controller('ForcaController', function($scope){

$scope.palavra = '';
$scope.letrasUsadas = [];
$scope.mensagem = '';


$scope.salvarPalavra = function(){
    console.log($scope.palavra)
}

$scope.armazenaLetras = function(){
    $scope.letrasUsadas.push($scope.letras)
}



})