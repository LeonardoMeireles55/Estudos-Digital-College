function calculaRaiz() {
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);
    var calculoRaiz = Math.sqrt(numero);
    if (numero == 0 || isNaN(numero)) {
        alert("informe um número valido!");
        location.reload();
        return;
    }
    if (calculoRaiz == Math.floor(calculoRaiz)) {
        outRaiz.textContent = "A Raiz é " + calculoRaiz;
    } else {
        outRaiz.textContent = "Não há raiz exata para " + numero;
    }


}
btCalculaRaiz = document.getElementById("btCalculaRaiz");
btCalculaRaiz.addEventListener("click", calculaRaiz);