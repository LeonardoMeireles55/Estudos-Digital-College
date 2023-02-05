function CalculaPreco() {
    var Quilo = Number(inQuilo.value);
    var Consumo = Number(inConsumo.value);
    var Preco = (Quilo * Consumo / 1000);
    outPreco.textContent = "O valor a pagar é: " + Preco + " Reais";
}
    var preco = document.getElementById("Preco");
    preco.addEventListener("click", CalculaPreco);