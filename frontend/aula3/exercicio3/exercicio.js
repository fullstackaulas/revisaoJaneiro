// Exercício 3: Crie uma função que valida um e-mail.
// Tarefa: A função deve verificar se o e-mail contém um "@" e um ".", além de outros requisitos básicos de formatação.

$emailFornecidoPeloUsuario = 'matheus.rubens@bol.com.br';

validaEmail = function(email){
    temArroba = email.includes('@');
    temPonto = email.includes('.');

    // if(temArroba == true && temPonto == true){
    if(temArroba && temPonto){
        return true;
    } else {
        return false;
    }
}



document.write(validaEmail($emailFornecidoPeloUsuario));