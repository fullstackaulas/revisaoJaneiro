// Exercício 8: Crie um array com 5 números e crie uma função para encontrar o maior número no array.
$numeros = [30000000,100,4000,50,500];
$maiorNumero = 0;


for($i = 0; $i <= $numeros.length; $i++){
    if($numeros[$i] > $maiorNumero){
        $maiorNumero = $numeros[$i];
    }
}

document.write($maiorNumero);
