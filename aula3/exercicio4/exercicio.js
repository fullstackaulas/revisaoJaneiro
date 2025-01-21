// Exercício 4: Crie uma função que altere o fundo de uma página web ao clicar em um botão.
// Tarefa: Ao clicar no botão, o fundo da página deve mudar para uma cor aleatória.


gerarRgb = function () {
    return Math.floor(Math.random() * 256);
}

gerarCor = function () {
    cor = gerarRgb() + ',' + gerarRgb() + ',' + gerarRgb();
    document.getElementById('corExibida').innerHTML = cor;
    document.body.style.backgroundColor = `rgb(${cor})`;
}





// rgb(151, 37, 37);


document.getElementById('trocarCor').addEventListener('click', gerarCor);
