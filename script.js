let seg = 0;
let min = 0;
let hr = 0;
let intervalo;

function doiszeros(digito) {
    return digito < 10 ? '0' + digito : digito;
}

function start() {
    if (!intervalo) {
        intervalo = setInterval(watch, 1000);
    }
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reset() {
    clearInterval(intervalo);
    intervalo = null;
    hr = 0;
    min = 0;
    seg = 0;
    document.getElementById('watch').innerText = '00:00:00';
}

function watch() {
    seg++;
    if (seg === 60) {
        min++;
        seg = 0;
    }
    if (min === 60) {
        hr++;
        min = 0;
    }
    let timeString = doiszeros(hr) + ':' + doiszeros(min) + ':' + doiszeros(seg);
    document.getElementById('watch').innerText = timeString;
}