function converteHoras() {
    var inHoras = document.getElementById("inHoras");
    var Horas = Number(inHoras.value);
    var outHora = document.getElementById("outHora")
    var horaFuso = Horas + 5
    if (inHoras.value == "" || isNaN(Horas)) {
        alert("digite apenas numeros!");
        document.getElementById("outHora").textContent = "";
        inHoras.focus();
        return;
    }
    if (horaFuso >= 24) {
        horaFuso = horaFuso - 24
    }
    if (horaFuso >= 12) {
        outHora.textContent = "na França são: " + horaFuso.toFixed(2) + " PM";
    }
    else {
        outHora.textContent = "na França são: " + horaFuso.toFixed(2) + " AM";
    }
}
calculaFuso = document.getElementById("calculaFuso");
calculaFuso.addEventListener("click", converteHoras)