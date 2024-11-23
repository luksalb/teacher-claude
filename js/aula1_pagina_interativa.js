let count = 0;

const cores = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
let coresIndex = 0;

const ideias = ['Jogar Video Game', 'Jantar Fora', 'Ir a Praia', 'Rolê de Moto', 'Pedir Ifood'];

function comecaContagem(){
    count++;
    document.getElementById('contador').textContent = count;
}

function resetaContagem(){
    count = 0;
    document.getElementById('contador').textContent = count;
}

function mudaCor(){
    coresIndex = (coresIndex + 1) % cores.length;
    document.getElementById('caixaColorida').style.backgroundColor = cores[coresIndex];
}

function geraIdeias(){
    const ideiasIndex = Math.floor(Math.random() * ideias.length);
    document.getElementById('ideiaRandom').textContent = ideias[ideiasIndex];
}