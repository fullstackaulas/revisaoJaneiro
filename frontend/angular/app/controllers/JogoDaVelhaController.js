angular.module('meuApp')
    .controller('JogoDaVelhaController', function ($scope, $stateParams, $http) {

        console.log($stateParams);

        $scope.idJogo = $stateParams.var1;
        $scope.jogador = $stateParams.var2;
        $URL = 'http://localhost:8000/'


        $scope.matriz = {
            pos1: '',
            pos2: '',
            pos3: '',
            pos4: '',
            pos5: '',
            pos6: '',
            pos7: '',
            pos8: '',
            pos9: ''
        }

        alinhaPosicoes = function (data) {
            for (i = 0; i < data.length; i++) {
                if (data[i].posicao == 1) {
                    $scope.matriz.pos1 = data[i].jogador;
                } else if (data[i].posicao == 2) {
                    $scope.matriz.pos2 = data[i].jogador;
                } else if (data[i].posicao == 3) {
                    $scope.matriz.pos3 = data[i].jogador;
                } else if (data[i].posicao == 4) {
                    $scope.matriz.pos4 = data[i].jogador;
                } else if (data[i].posicao == 5) {
                    $scope.matriz.pos5 = data[i].jogador;
                } else if (data[i].posicao == 6) {
                    $scope.matriz.pos6 = data[i].jogador;
                } else if (data[i].posicao == 7) {
                    $scope.matriz.pos7 = data[i].jogador;
                } else if (data[i].posicao == 8) {
                    $scope.matriz.pos8 = data[i].jogador;
                } else if (data[i].posicao == 9) {
                    $scope.matriz.pos9 = data[i].jogador;
                }
            }
        }

        carregaPosicoes = function () {
            $http.get($URL + 'api/jogoDaVelha/carregarPosicoes/' + $scope.idJogo).then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alinhaPosicoes(response.data);
                }
            }, function (error) {
                console.log(error);
            })
        }

        $scope.inserirPosicao = function (posicao) {
            post = {};
            post.jogador = $scope.jogador;
            post.posicao = posicao;
            post.idJogo = $scope.idJogo;
            $http.post($URL + 'api/jogoDaVelha/inserir', post).then(function (response) {
            }, function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.data,
                    timer: 2000
                });
            })
            console.log(posicao);
        }



        intervalId = setInterval(carregaPosicoes, 1000);

    });