
// Definindo a frase e o array de vogais
const frase = "o rato roeu a roupa do rei de roma";
const vogaisArray = ['a', 'e', 'i', 'o', 'u'];

// Contador de vogais
let qtd = 0;

// Iterando sobre cada caractere da frase
for (let i = 0; i < frase.length; i++) {
    const char = frase[i].toLowerCase(); // Converte para minúsculo uma vez por caractere

    // Verificando se o caractere é uma vogal
    if (vogaisArray.includes(char)) {
        qtd++;
    }
}

// Exibindo a frase e a quantidade de vogais
document.write(`${frase}<br>`);
document.write(`A quantidade de vogais na frase é: ${qtd}`);
