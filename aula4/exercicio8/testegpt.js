function classificarJogadores(jogadores) {
    // Ordena os jogadores com base nos pontos (do maior para o menor)
    jogadores.sort((a, b) => b.pontos - a.pontos);

    let posicao = 1;
    let classificacaoAtual = "Campeão";
    let pontosAnteriores = jogadores[0].pontos;

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].pontos < pontosAnteriores) {
            posicao++;
            pontosAnteriores = jogadores[i].pontos;
        }

        if (posicao == 1) {
            classificacaoAtual = "Campeão";
        } else if (posicao == 2) {
            classificacaoAtual = "Vice-Campeão";
        } else if (posicao == 3) {
            classificacaoAtual = "Terceiro Lugar";
        } else {
            classificacaoAtual = "Sem Classificação";
        }

        jogadores[i].classificacao = classificacaoAtual;
    }

    return jogadores;
}

let jogadores = [
    { nome: "Ana", pontos: 130 },
    { nome: "Marta", pontos: 130 },
    { nome: "Carlos", pontos: 115 },
    { nome: "Lucas", pontos: 90 },
    { nome: "Felipe", pontos: 98 },
    { nome: "Joana", pontos: 50 }
];

jogadores = classificarJogadores(jogadores);
console.log(jogadores);