angular.module('meuApp').controller('TesteController', function ($scope) {

    console.log('abriu');
    $scope.variavel = "Ola mundo";

    $scope.jogo = {
        tentativa: '',
        acertou: false,
        trapaca: false,
        errou: false
    }


    $scope.trapacear = function () {
        $scope.jogo.trapaca = true;
    }

    $scope.recomecar = function () {
        $scope.numAleatorio = Math.floor(Math.random() * 50) + 1;
        $scope.qtdTentativas = 0;
    }

    $scope.recomecar();

    $scope.tentativa = function (event) {
        if (event.keyCode === 13) {
            console.log('enter pressionado');
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
            console.log(event.keyCode);
        }
    }




//PROXIMA AULA: NUMEROS QUE O USUARIO JA TENTOU
// BATATA QUENTE! SE TIVER X NUMERO PRA CIMA, VERMELHO, SE FOR X PRA BAIXO AMARELO, ENFIM...

//FAZER MULTIPLAYER


});