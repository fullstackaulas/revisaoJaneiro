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
            jogador = $scope.jogador;
            if (posicao == 1) {
                $scope.matriz.pos1 = jogador;
            } else if (posicao == 2) {
                $scope.matriz.pos2 = jogador;
            } else if (posicao == 3) {
                $scope.matriz.pos3 = jogador;
            } else if (posicao == 4) {
                $scope.matriz.pos4 = jogador;
            } else if (posicao == 5) {
                $scope.matriz.pos5 = jogador;
            } else if (posicao == 6) {
                $scope.matriz.pos6 = jogador;
            } else if (posicao == 7) {
                $scope.matriz.pos7 = jogador;
            } else if (posicao == 8) {
                $scope.matriz.pos8 = jogador;
            } else if (posicao == 9) {
                $scope.matriz.pos9 = jogador;
            }






            post = {};
            post.jogador = $scope.jogador;
            post.posicao = posicao;
            post.idJogo = $scope.idJogo;
            $http.post($URL + 'api/jogoDaVelha/inserir', post).then(function (response) {

                if (response.status == 201) {
                    if (response.data.checarVitoria == 'Deu velha!') {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Deu velha!",
                            timer: 5000
                        });
                    }
                    else if (response.data.checarVitoria == 'Jogador O venceu!') {

                        if ($scope.jogador == 'o') {
                            Swal.fire({
                                icon: "success",
                                title: "Boaaaaa",
                                text: "Você venceu!!!!",
                                timer: 6000
                            });
                        } else if ($scope.jogador == 'x') {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Ruim demais!!! Perdeu",
                                timer: 6000
                            });
                        }

                    }
                    else if (response.data.checarVitoria == 'Jogador X venceu!') {

                        if ($scope.jogador == 'x') {
                            Swal.fire({
                                icon: "success",
                                title: "Boaaaaa",
                                text: "Você venceu!!!!",
                                timer: 6000
                            });
                        } else if ($scope.jogador == 'o') {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Ruim demais!!! Perdeu",
                                timer: 6000
                            });
                        }

                    }

                }

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



        intervalId = setInterval(carregaPosicoes, 3000);
        carregaPosicoes();
    });