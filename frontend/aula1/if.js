//controle de entrada de balada ou show
// 18+ entra livremente.
//>=16 // verificar se está acompanhado de um adulto
//<16 // barrar entrada.
$idade = 21;
$acompanhante = 16;
$entrada = '';
$info = '';

if($idade >= 18){
    $entrada = 'Permitida!';
}
else if ($idade >= 16){
    $info = 'Verificando se está acompanhado de um adulto...';
    if($acompanhante >= 18){
        $entrada = 'Pode liberar os 2!';
    }
    else{
        $entrada = 'Ambos são menores de idade, ai não da...!'

    }
    
}
else {
    $entrada = 'Vetada!';
}   

document.write($info);
document.write('<br>');
document.write($entrada);