
function executar(funcao) {
    if(typeof funcao === "function") {
        console.log(funcao());
    }
}
//funcao chamando uma funcao como parametro. 
function bomDia() {
    return "Bom dia";
    }

    executar(3);
    executar(bomDia);


const x = bomDia
const y = bomDia()