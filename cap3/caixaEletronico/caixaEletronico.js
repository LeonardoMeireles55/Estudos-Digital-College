function sacar() {
    var inSaque = document.getElementById("inSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");

    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";
    var saque = Number(inSaque.value);
    if (saque == 0 || isNaN(saque)) {
        alert("informa um valor valido!");
        
        inSaque.focus();
        return;
    }
    if (saque % 10 != 0) {
        alert("valor inválido! apenas notas multiplos de 10!");
        document.getElementById("inSaque").value = "";
        inSaque.focus();
        return;
    }
    var notasCem = Math.floor(saque / 100);
    var resto = saque % 100;
    var notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50
    var notasDez = Math.floor(resto / 10);

    if (notasCem > 0) {
        outNotasCem.textContent = ("notas de R$ 100: " + notasCem);
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = ("notas de R$ 50: " + notasCinquenta);
    }
    if (notasDez > 0) {
        outNotasDez.textContent = ("notas de R$ 10: " + notasDez);
    }
}
btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", sacar)