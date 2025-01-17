/*#ex9:
Fazer uma função que calcula a soma de todos os números de 1 até um número informado.
Entrada: $limite
Saída: "A soma dos números de 1 até $limite é: Y"
Dica: Você pode usar um laço for ou a fórmula da soma de uma progressão aritmética.*/

somar = function ($limite) {
    $soma = 0;
    for ($i = 0; $i <= $limite; $i++) {
        document.write('somando: '+ $soma + '+' + $i + '<br>')
        $soma += $i;
    }

    document.write('A soma dos números de 1 até ' + $limite + ' é: ' + $soma);

};

somar(200);