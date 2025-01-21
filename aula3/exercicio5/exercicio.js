// Exercício 5: Criar um formulário simples com campos de texto e botão de envio.
// Tarefa: Crie um formulário com campos de nome, e-mail e uma caixa de seleção. Adicione um botão para enviar os dados.


pegarDados = function(){
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    sexo = document.getElementById('sexo').value;

    console.log("Nome: " + nome, "Email: " + email, "Sexo: " + sexo);
}

document.getElementById('enviar').addEventListener('click', pegarDados);