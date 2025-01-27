// Exercício 6: Crie uma função que altera o conteúdo de um parágrafo ao clicar em um botão.
// Tarefa: A função deve alterar o texto do parágrafo de "Olá, Mundo!" para "Texto alterado com sucesso!".


trocarTexto = function(){
    document.getElementById('texto').innerHTML = 'Texto alterado com sucesso!'
}

document.getElementById('trocarTexto').addEventListener('click', trocarTexto);
