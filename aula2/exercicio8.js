/*#ex8:
Fazer um programa que recebe um valor em metros e converte para centímetros e milímetros.
Entrada: $metros
Saída: "X metros equivalem a Y centímetros e Z milímetros"
Dica: Para converter metros para centímetros multiplica-se por 100, e para milímetros multiplica-se por 1000.*/

$metros = 10;
$centimetros = 100 * $metros;
$milímetros = 1000 * $metros;

document.write('Metros:'+$metros+'<br>');
document.write('centimetros:'+$centimetros+'<br>');
document.write('milímetros:'+$milímetros+'<br>');