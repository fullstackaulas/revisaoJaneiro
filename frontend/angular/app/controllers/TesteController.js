angular.module('meuApp').controller('TesteController', function ($scope) {

    console.log('abriu');
    $scope.variavel = "Ola mundo";



    $scope.trapacear = function () {
        $scope.jogo.trapaca = true;
    }

    $scope.recomecar = function () {
        $scope.numAleatorio = Math.floor(Math.random() * 20) + 1;
        $scope.qtdTentativas = 0;
        $scope.jogo = {
            tentativa: '',
            acertou: false,
            trapaca: false,
            errou: false,
            aproximado: 0
        }
    
        $scope.numerosTentado = [];
    
        $scope.jogo.trapaca = false;

    }

    $scope.recomecar();

    $scope.tentativa = function (event) {
        if (event.keyCode === 13) {
            console.log('enter pressionado');

            $scope.jogo.aproximado = $scope.jogo.tentativa - $scope.numAleatorio;
            if($scope.jogo.aproximado <0)
                $scope.jogo.aproximado = $scope.jogo.aproximado * -1;

            console.log($scope.jogo.aproximado);

            if (!$scope.numerosTentado.includes($scope.jogo.tentativa)) {
                $scope.numerosTentado.push($scope.jogo.tentativa);
                if ($scope.jogo.tentativa == $scope.numAleatorio) {
                    $scope.jogo.acertou = true;
                }
                else {
                    $scope.qtdTentativas++;

                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Errooooooou",
                        timer: 500
                    });

                }
            }
            else {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Você ja tentou esse numeroooooo (surtei)",
                    timer: 2000
                });
            }
        }
        else {
           // console.log(event.keyCode);
        }
    }

    //FAZER MULTIPLAYER


});