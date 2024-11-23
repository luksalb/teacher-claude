let count = 0;

const cores = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
let coresIndex = 0;

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
    document.getElementById('caixaColorida').style.backgroundColor = cores[coresIndex]
}