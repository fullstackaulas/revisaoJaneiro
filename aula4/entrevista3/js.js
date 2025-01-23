// 5. Ordenar um Array
// Escreva uma função ordenarArray que recebe um array de números e retorna o array ordenado em ordem crescente.

// Exemplo:

// javascript
// Copiar

ordenarArray = function(array){
    // array.sort();
    array.sort((a,b) => a-b);
    return array;
}


console.log(ordenarArray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
console.log(ordenarArray([12, 1, 4, 10])); // [1, 4, 10, 12]