// 7. Transformar um Array em um Objeto
// Escreva uma função transformarEmObjeto que recebe um array de pares de chave-valor (como arrays com dois elementos) e retorna um objeto com essas chaves e valores.

// Exemplo:

// javascript
// Copiar

transformarEmObjeto = function(array){
    obj = {};
    for(i=0; i<array.length ; i++){ // linha
        obj[array[i][0]] = array[i][1];
    }
    console.log(array);
    return obj;
    // console.log(obj);
}



console.log(transformarEmObjeto([["nome", "João"],["idade", 25]])); // { nome: "João", idade: 25 }
console.log(transformarEmObjeto([["produto", "Camiseta"], ["tamanho", "G"], ["preço", 30]])); // { produto: "Camiseta", preço: 30 }