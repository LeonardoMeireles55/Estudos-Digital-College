function calculaPromocao() {
    var produto = inProduto.value;
    var preco = inPreco.value;
    var valorDoTerceiro = preco * 0.5
    var valorFinal = preco * 2 + valorDoTerceiro;
     outValorFinal.textContent = (produto + " - Promocao: Leve 3 por R$ "  + valorFinal + " Reais");
     outPromocao.textContent = ("O terceiro produto sai por " + valorDoTerceiro + " Reis")
}
var btVerPromocao = document.getElementById("btVerPromocao")
btVerPromocao.addEventListener("click", calculaPromocao)