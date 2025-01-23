1. Reverter uma String
Escreva uma função reverterString que recebe uma string e retorna essa string invertida. Exemplo:

javascript
Copiar
console.log(reverterString("JavaScript")); // "tpircSavaJ"
2. Verificar se uma String é um Palíndromo
Escreva uma função ehPalindromo que verifica se uma string é um palíndromo (uma palavra que fica igual quando lida de trás para frente). A função deve ignorar espaços e considerar letras minúsculas e maiúsculas como iguais.

Exemplo:

javascript
Copiar
console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("abacaxi")); // false
console.log(ehPalindromo("A man a plan a canal Panama")); // true
3. Fatorial de um Número
Escreva uma função fatorial que calcula o fatorial de um número inteiro positivo. O fatorial de um número n é o produto de todos os números inteiros de 1 até n.

Exemplo:

javascript
Copiar
console.log(fatorial(5)); // 120
console.log(fatorial(3)); // 6
console.log(fatorial(0)); // 1
4. Contar Palavras em uma String
Escreva uma função contarPalavras que recebe uma string e retorna o número de palavras nela. Considere palavras separadas por espaços.

Exemplo:

javascript
Copiar
console.log(contarPalavras("Eu amo JavaScript!")); // 4
console.log(contarPalavras("Olá")); // 1
console.log(contarPalavras("")); // 0
5. Ordenar um Array
Escreva uma função ordenarArray que recebe um array de números e retorna o array ordenado em ordem crescente.

Exemplo:

javascript
Copiar
console.log(ordenarArray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
console.log(ordenarArray([12, 1, 4, 10])); // [1, 4, 10, 12]
6. Encontrar o Maior e o Menor Número de um Array
Escreva uma função maiorMenor que recebe um array de números e retorna um objeto com as propriedades maior e menor contendo, respectivamente, o maior e o menor número no array.

Exemplo:

javascript
Copiar
console.log(maiorMenor([5, 3, 8, 1, 2])); // { maior: 8, menor: 1 }
console.log(maiorMenor([12, 1, 4, 10])); // { maior: 12, menor: 1 }
7. Transformar um Array em um Objeto
Escreva uma função transformarEmObjeto que recebe um array de pares de chave-valor (como arrays com dois elementos) e retorna um objeto com essas chaves e valores.

Exemplo:

javascript
Copiar
console.log(transformarEmObjeto([["nome", "João"], ["idade", 25]])); // { nome: "João", idade: 25 }
console.log(transformarEmObjeto([["produto", "Camiseta"], ["preço", 30]])); // { produto: "Camiseta", preço: 30 }
8. Soma dos Elementos de um Array
Escreva uma função somaArray que recebe um array de números e retorna a soma de todos os seus elementos.

Exemplo:

javascript
Copiar
console.log(somaArray([1, 2, 3, 4])); // 10
console.log(somaArray([5, 10, 15])); // 30
9. Transformar uma String em um Array de Caracteres
Escreva uma função stringParaArray que recebe uma string e retorna um array com cada caractere da string.

Exemplo:

javascript
Copiar
console.log(stringParaArray("JavaScript")); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(stringParaArray("abc")); // ['a', 'b', 'c']
10. Filtrar Elementos Pares de um Array
Escreva uma função filtrarPares que recebe um array de números e retorna um novo array contendo apenas os números pares.

Exemplo:

javascript
Copiar
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filtrarPares([10, 15, 20, 25])); // [10, 20]
