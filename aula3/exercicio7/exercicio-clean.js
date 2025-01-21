// Recupera o valor de visitas do localStorage
let visitas = localStorage.getItem('visitas');

// Se não houver valor armazenado, inicializa o contador de visitas
if (visitas === null) {
    visitas = 0;
} else {
    visitas = parseInt(visitas); // Converte para inteiro caso haja um valor no localStorage
}

// Incrementa o contador de visitas
visitas++;

// Armazena o novo valor de visitas no localStorage
localStorage.setItem('visitas', visitas);

// Exibe o contador na página
document.getElementById('contador').innerHTML = visitas;
