// 1. Reverter uma String
// Escreva uma função reverterString que recebe uma string e retorna essa string invertida. Exemplo:

// javascript
// Copiar
// console.log(reverterString("JavaScript")); // "tpircSavaJ"
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
            return  "Não é um palíndromo";
    }
}

console.log(palavraInvertida("JavaScript"));