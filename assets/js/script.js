const Horas = document.getElementById("Horas");
const Minutos = document.getElementById("Minutos");
const Segundos = document.getElementById("Segundos");


const relogio= setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    Horas.textContent = hr;
    Minutos.textContent = min;
    Segundos.textContent = seg;

    if (hr < 10) hr ='0' + hr;
    if (min < 10) min ='0' + min;
    if (seg < 10) seg ='0' + seg;


})