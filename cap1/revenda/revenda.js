function calcularPromocao() {
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;
    outVeiculo.textContent = "Promocão: " + veiculo;
    outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2);
    outParcela.textContent = "Parcelas de " + parcela.toFixed(2);
}
    
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPromocao);
