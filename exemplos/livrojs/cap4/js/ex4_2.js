function listarNumeros() {
  // cria referência aos elementos que a function irá manipular
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");
  var numero = Number(inNumero.value); 
  // obtém o número informado
  // verifica validade do número
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    location.reload();
    return;
  }
  // inicializa variável resposta
  var resposta = "Entre " + numero + " e 1: " + numero;
  // cria um for decrescente
  for (var i = numero - 1; i > 0; i--) {
    // resposta vai acumulando números (e vírgulas)
    resposta = resposta + "," + i;
  }
  resposta = resposta + ".";
  // altera o conteúdo de outResposta
  outResposta.textContent = resposta;
}
// referencia elemento e após associa function ao evento click
var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);
