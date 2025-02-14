angular.module('meuApp')
    .controller('ForcaController', function ($scope) {

        $scope.palavra = '';
        $scope.letrasErradas = [];
        $scope.letrasCertas = [];
        $scope.mensagem = '';
        $scope.palavraSecreta = '';
        $scope.palavraResolvida = '';
        $scope.qtdErros = 0;
        $scope.passoJogo = 1;



        $scope.salvarPalavra = function () {
            $scope.palavraSecreta = $scope.palavra;
            $scope.palavraResolvida = '';
            for ($i = 0; $i < $scope.palavraSecreta.length; $i++) {
                $scope.palavraResolvida = $scope.palavraResolvida + '_';
            }
            $scope.passoJogo = 2;
        }

        $scope.armazenaLetras = function () {

            if ($scope.palavraSecreta.includes($scope.letras)) {
                $scope.letrasCertas.push($scope.letras);

                console.log('tem a letra');
                $scope.palavraResolvida = '';

                for ($i = 0; $i < $scope.palavraSecreta.length; $i++) {
                    if ($scope.letrasCertas.includes($scope.palavraSecreta[$i])) {
                        $scope.palavraResolvida += $scope.palavraSecreta[$i];
                    }
                    else {
                        $scope.palavraResolvida += '_';

                    }
                    console.log($scope.palavraSecreta[$i]);
                }


            }
            else {
                if (!$scope.letrasErradas.includes($scope.letras)) {
                    $scope.letrasErradas.push($scope.letras);
                    $scope.qtdErros++
                }

            }


        }



    })