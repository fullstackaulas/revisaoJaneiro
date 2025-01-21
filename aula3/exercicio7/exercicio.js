// Exercício 7: Crie um contador de visitas na página. Toda vez que a página for carregada, o contador deve ser incrementado e armazenado no localStorage.
// Tarefa: Utilize localStorage para salvar o valor do contador e mostre-o na página.

$visitas = localStorage.getItem('visitas');


if($visitas == null){
    localStorage.setItem('visitas', 0);
    $visitas = 0;
}

document.getElementById('contador').innerHTML = $visitas;

$qtd = parseInt(localStorage.getItem('visitas')) + 1;

localStorage.setItem('visitas',$qtd);