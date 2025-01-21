$frase = "o rato roeu a roupa do rei de roma";

$vogais = "aeiouAEIOU";
$vogaisArray = ['a', 'e', 'i', 'o', 'u'];
$qtd = 0;

for($i = 0; $i < $frase.length; $i ++){
    // if($vogais.includes($frase[$i])){
    // if($frase[$i].toLowerCase() == 'a' || $frase[$i].toLowerCase() == 'e' ||  $frase[$i].toLowerCase() == 'i' || $frase[$i].toLowerCase() == 'o' || $frase[$i].toLowerCase() == 'u'){
    if($vogaisArray.includes($frase[$i].toLowerCase())){
        $qtd++;
        // document.write($frase[$i] + 'é vogal <br>');
    }
    // else{
        // document.write($frase[$i] + 'não é vogal <br>');
    // }
}

document.write($frase + "<br>");

document.write("A quantidade de vogais na frase é: " + $qtd);





