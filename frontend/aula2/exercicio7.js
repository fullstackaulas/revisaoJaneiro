/*#ex7:
Fazer um programa que calcula a média de uma lista de números.
Entrada: Uma lista de números, como [10, 20, 30, 40]
Saída: "A média é: X"
Dica: A média é a soma de todos os números dividida pelo número total de elementos na lista.*/

$entrada = [10,20,30,40,50];
$qtd = $entrada.length;
$soma = 0; 
for($i=0; $i<$qtd; $i++){
    $soma += $entrada[$i];
}

document.write('A média é:'+ $soma / $qtd);