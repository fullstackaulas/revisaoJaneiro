// 3. Fatorial de um Número
// Escreva uma função fatorial que calcula o fatorial de um número inteiro positivo. O fatorial de um número n é o produto de todos os números inteiros de 1 até n.

// Exemplo:

// javascript
// Copiar
//console.log(fatorial(5)); // 120
// console.log(fatorial(3)); // 6
// console.log(fatorial(0)); // 1


fatorial = function(num) {
    resultado = num;
    if(num==0)
        resultado = 1;
    for(i=num-1; i>1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); // 120
console.log(fatorial(3)); // 6
console.log(fatorial(0)); // 1
