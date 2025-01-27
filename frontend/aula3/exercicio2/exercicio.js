// Exercício 2: Crie uma função que recebe dois números e retorna a soma, subtração, multiplicação e divisão entre eles.

contas = function (a, b) {
    soma = a + b;
    subtracao = a - b;
    multiplicacao = a * b;
    divisao = a / b;

    document.write(`Soma: ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicacao}, Divisão: ${divisao}`);

}

contas(10,20);