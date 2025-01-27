/*
# ex3:
# Fazer um contador que recebe o valor de limite entre 2 valores, ou seja, o limite é customizado.
# entrada: $inicio, $fim, $limite
# se eu inserir 0, 100, 20
# saida deve ser 0 - 20
*/

$inicio = 50;
$fim = 60;
$limite = 30;
//se ($fim - $inicio) > $limite entao $fim é igual a $inicio + $limite;

if (($fim - $inicio) > $limite) {
    $fim = $inicio + $limite;
}


for ($inicio; $inicio <= $fim; $inicio++) {
    document.write($inicio);
    document.write('<br>');
}