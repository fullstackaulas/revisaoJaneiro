Problema: Jogo de Classificação de Pontos
Você vai criar uma função que simula a classificação de uma competição esportiva. A competição possui n jogadores, e cada jogador tem uma pontuação. O objetivo é organizar os jogadores por suas pontuações, mas com algumas regras especiais:

Regras:
Se um jogador tiver uma pontuação maior que 100, ele ganha um bônus de 10 pontos.
O sistema deve ordenar os jogadores com base na pontuação final (após a adição do bônus, se aplicável).
Depois de ordenar, o sistema deve classificar os jogadores em três grupos:
Campeão: O jogador com a maior pontuação.
Vice-Campeão: O jogador com a segunda maior pontuação.
Terceiro Lugar: O jogador com a terceira maior pontuação.
O sistema também deve ser capaz de lidar com empates. Se dois jogadores tiverem a mesma pontuação, ambos devem ser considerados no mesmo lugar.
O programa deve retornar um array com a classificação dos jogadores, incluindo o nome e a pontuação final, e um aviso indicando a posição de cada um.
Exemplo de Entrada:
javascript
Copiar
let jogadores = [
    { nome: "Lucas", pontos: 90 },
    { nome: "Ana", pontos: 120 },
    { nome: "Carlos", pontos: 105 },
    { nome: "Marta", pontos: 120 },
    { nome: "Felipe", pontos: 98 },
    { nome: "Joana", pontos: 50 }
];
Exemplo de Saída Esperada:
javascript
Copiar
[
    { nome: "Ana", pontos: 130, classificacao: "Campeão" },
    { nome: "Marta", pontos: 130, classificacao: "Campeão" },
    { nome: "Carlos", pontos: 115, classificacao: "Vice-Campeão" },
    { nome: "Lucas", pontos: 90, classificacao: "Terceiro Lugar" },
    { nome: "Felipe", pontos: 98, classificacao: "Terceiro Lugar" },
    { nome: "Joana", pontos: 50, classificacao: "Sem Classificação" }
]
Restrições:
Se o número de jogadores for menor que 3, o programa ainda deve retornar os 3 primeiros, e caso não haja 3 jogadores, apenas os disponíveis serão classificados (sem um "Terceiro Lugar", por exemplo).
Para empates, jogadores com a mesma pontuação devem ser tratados igualmente. Ou seja, dois jogadores com a mesma pontuação podem estar na mesma posição, mas a próxima posição não deve ser pulada (como em uma classificação tradicional).
