function calculaValor() {
    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);
    var tempoDeUso = Math.ceil(tempo / 15);
    var precoTotal = valor * tempoDeUso;
    outValor.textContent = ("valor a pagar é: " + precoTotal);    
}
    var mostraValor = document.getElementById("btCalcular")
    mostraValor.addEventListener("click", calculaValor)