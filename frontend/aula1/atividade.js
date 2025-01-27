//fazer uma funcao que le um array e escreve os dados de tras pra frente.
// o array deve conter 5 informaçoes aleatorias
// pode usar for ou while
// se usar o gpt o dedo cai

$formas = ["bolinha","triângulo","quadrado","X","start"];
document.write($formas.length)

for ($i = $formas.length-1; $i>=0; $i--){
    document.write($formas[$i]);
    document.write('<br>');
}

