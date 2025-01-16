// <!-- 
// #ex5:
// Descrição: Crie um programa que calcule a soma de todos os números ímpares entre 1 e um número informado pelo usuário.
// Entrada:
// $numero (limite superior)
// Saída:
// A soma de todos os números ímpares entre 1 e $numero.
// Exemplo:
// Se $numero = 10, a saída seria 25 (1 + 3 + 5 + 7 + 9)

// if($i % 2 != 0)

$numero = 30;    
$soma = 0;    

for($i=0; $i<=$numero; $i++){
    if($i % 2 != 0){
        $soma += $i;
    }
    
    }
    document.write($soma);
    document.write('<br>');