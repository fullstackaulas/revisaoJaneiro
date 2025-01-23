// 8. Soma dos Elementos de um Array
// Escreva uma função somaArray que recebe um array de números e retorna a soma de todos os seus elementos.

// Exemplo:

// javascript
// Copiar
// console.log(somaArray([1, 2, 3, 4])); // 10
// console.log(somaArray([5, 10, 15])); // 30


somaArray = function(array){
    soma = 0;
    for(i=0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

console.log(somaArray([1, 2, 3, 4])); // 10
console.log(somaArray([5, 10, 15])); // 30