function classificacaoJogadoresFabio(jogadores) {
  for (i = 0; i < jogadores.length; i++) {
    if (jogadores[i].pontos > 100) {
      jogadores[i].pontos += 10;
    }
  }
  jogadores.sort((a, b) => b.pontos - a.pontos);
  classificacoes = ["Campeão", "Vice-Campeão", "Terceiro Lugar", "Sem classificação"]
  j = 0;
  jogadores[0].classificacao = classificacoes[j];
  for (i = 1; i < jogadores.length; i++) {
    //console.log("a")
    if (jogadores[i].pontos == jogadores[i - 1].pontos) {
      jogadores[i].classificacao = classificacoes[j];
    } else {
      //console.log("b")
      if (j < 3)
        j++;
      jogadores[i].classificacao = classificacoes[j];
    }
  }
  return jogadores;
}

function classificacaoJogadores(jogadores) {
  for (i = 0; i < jogadores.length; i++) {
    if (jogadores[i].pontos > 100) {
      jogadores[i].pontos += 10;
    }
  }
  jogadores.sort((a, b) => b.pontos - a.pontos);

  maiorPontuacao = jogadores[0].pontos;
  jogadores[0].classificacao = "Campeão";

  posicao = 1;

  for (i = 1; i < jogadores.length; i++) {
    if (jogadores[i].pontos == jogadores[i - 1].pontos) {
      if (posicao == 1)
        jogadores[i].classificacao = "Campeão";
      else if (posicao == 2)
        jogadores[i].classificacao = "Vice-Campeão";
      else if (posicao == 3)
        jogadores[i].classificacao = "Terceiro-lugar";
      else
        jogadores[i].classificacao = "Não classificado";
    } else {
      posicao++;
      if (posicao == 2)
        jogadores[i].classificacao = "Vice-Campeão";
      else if (posicao == 3)
        jogadores[i].classificacao = "Terceiro-lugar";
      else
        jogadores[i].classificacao = "Não classificado";
    }

  }

  return jogadores;
}

let jogadores = [
  { nome: "Lucas", pontos: 90 },
  { nome: "Ana", pontos: 120 },
  { nome: "Carlos", pontos: 120 },
  { nome: "Marta", pontos: 120 },
  { nome: "Felipe", pontos: 98 },
  { nome: "Joana", pontos: 90 },
  { nome: "Paulo", pontos: 50 },
  { nome: "Julieta", pontos: 50 },
  { nome: "Romeu", pontos: 50 },
  { nome: "Banana", pontos: 50 },
  { nome: "Adalberto", pontos: 50 },
];

console.log(classificacaoJogadores(jogadores));
console.log(classificacaoJogadoresFabio(jogadores));
