const muyPronto = document.getElementById('Pronto');
const Tendencia = document.getElementById('Tendencia');
const masStar = document.getElementById('MasStar');

window.addEventListener('scroll',function(){
    const header = document.getElementById('Header');
    header.classList.toggle('add',window.scrollY>450);
})

function pronto(){
    document.getElementById('muyPronto').classList.remove('Ocultar');
    document.getElementById('masStar').classList.add('Ocultar');
    document.getElementById('tendecia').classList.add('Ocultar');
    muyPronto.classList.add('select');
    Tendencia.classList.remove('select');
    masStar.classList.remove('select');
}

function tendecia(){
    document.getElementById('muyPronto').classList.add('Ocultar');
    document.getElementById('masStar').classList.add('Ocultar');
    document.getElementById('tendecia').classList.remove('Ocultar');
    Tendencia.classList.add('select');
    muyPronto.classList.remove('select');
    masStar.classList.remove('select');
}
function maasStar(){
    document.getElementById('muyPronto').classList.add('Ocultar');
    document.getElementById('tendecia').classList.add('Ocultar');
    document.getElementById('masStar').classList.remove('Ocultar');
    masStar.classList.add('select');
    Tendencia.classList.remove('select');
    muyPronto.classList.remove('select');
}

masStar.addEventListener('click',maasStar)
Tendencia.addEventListener('click', tendecia);
muyPronto.addEventListener('click',pronto);