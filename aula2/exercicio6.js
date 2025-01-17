/*#ex 6:
Descrição: Crie um programa que faça a tabuada de um número informado pelo usuário, até o número 10.
Entrada:
$numero
Saída:
A tabuada desse número.
Exemplo:
Se o número informado for 5, a saída será:
*/

$numero = 6;

for($i=1; $i<=10; $i++){
    document.write($numero + 'x'+ $i + '='+ ($numero*$i)+'<br>');
}

/*

Mesma coisa que o for acima

document.write($numero + 'x1='+ ($numero*1)+'<br>');
document.write($numero + 'x2='+ ($numero*2)+'<br>');
document.write($numero + 'x3='+ ($numero*3)+'<br>');
document.write($numero + 'x4='+ ($numero*4)+'<br>');
document.write($numero + 'x5='+ ($numero*5)+'<br>');
document.write($numero + 'x6='+ ($numero*6)+'<br>');
document.write($numero + 'x7='+ ($numero*7)+'<br>');
document.write($numero + 'x8='+ ($numero*8)+'<br>');
document.write($numero + 'x9='+ ($numero*9)+'<br>');
document.write($numero + 'x10='+ ($numero*10)+'<br>');
*/