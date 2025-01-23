// 1. Reverter uma String
// Escreva uma função reverterString que recebe uma string e retorna essa string invertida. Exemplo:

// javascript
// Copiar
// console.log(reverterString("JavaScript")); // "tpircSavaJ"

resultado = '';
palavra = { 
    Original: '',
    Invertida: ''
}

palavraInvertida = function(str){
    palavra.Original = str;

    palavra.Invertida = palavra.Original.split('').reverse().join('');
        if (palavra.Original == palavra.Invertida){
            return 'A palavra é um palíndromo';
        } else {
            resultado = "Não é um palíndromo";
            return resultado;
    }
}

console.log(palavraInvertida("JavaScript"));