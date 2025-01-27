// # ex4:
// # Fazer um contador que conte de 0 a 40 porém:
// # multiplos de 5 ele escreve: pamonha
// # multiplos de 3 ele escreve : pam
// # multiplos de 7 ele escreve : onha
// # outros números ele escreve normal.
// # descoberta: como pegar multiplos, se nao me engano é $valor %% 5 == 0;





for ($i = 0; $i <= 40; $i++) {
    if ($i % 5 == 0) {
        document.write('pamonha')

    } else if ($i % 3 == 0) {
        document.write('pam')

    }else if ($i % 7 == 0) {
        document.write('onha')
    } else{
        document.write($i)
    }

    document.write('<br>');
}
