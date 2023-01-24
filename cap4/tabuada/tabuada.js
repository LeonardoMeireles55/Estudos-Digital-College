function mostrarTabuada() {
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");
    var numero = Number(inNumero.value);
    var numero = Math.floor(numero)
    if (numero <= 0 || isNaN(numero)) {
        alert("digite apenas número válidos!")
        location.reload();
        inNumero.focus();
        return;
    }
    var resposta = "";
    for (var i = 1; i <= 10; i = i +1) {
    resposta = resposta + numero + "x" + i + "=" + numero * i + "\n";
    }
    outTabuada.textContent = resposta; 
}
btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", mostrarTabuada)