escreverMeuNome = function(nome){
    document.write(nome);
}

// escreverMeuNome('Joao');


// $a = 10;
// $b = 20
// document.write($a+$b)

// somaTresValores = function(a,b,c){
//     $soma = a+b+c;
//     document.write($soma);
//     // return $soma;
// }

// somaTresValores(10,20,30);



somaTresValores = function(a,b,c){
    $soma = a+b+c;
    return $soma;
}

document.write(somaTresValores(10,20,30));
