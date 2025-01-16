/*# ex1:
# fazer uma condicional que printa bom dia, boa tarde ou boa noite Sr. ou Sra. $Nome
# Entrada: $sexo / $nome // Bom dia Sr. Matheus
# saida: Bom dia Senhor Matheus
# descoberta: como pegar o horário do dia
*/

$nome = 'Matheus';
$sexo = 'M'; // M ou F

if ($sexo == 'M') {
    $pronome = 'Sr';
} else {
    $pronome = 'Sra';
}

$data = new Date();
$horaAtual = $data.getHours();



for ($horaAtual = 0; $horaAtual < 24; $horaAtual++) { // excluir apos o teste

    // $horaAtual = 19;
    /* 6-12 - bom dia
    12 - 18 - boa tarde
    18 - 6 - boa noite*/
    if ($horaAtual < 12 && $horaAtual >= 6) {
        $textoBom = 'Bom dia';
    } else if ($horaAtual >= 12 && $horaAtual < 18) {
        $textoBom = 'Boa tarde';
    } else {
        $textoBom = 'Boa noite';
    }

    document.write($horaAtual + ' - ' + $textoBom + ' ' + $pronome + ' ' + $nome + '<br>');

}// excluir apos o teste