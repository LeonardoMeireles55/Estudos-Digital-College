
const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
exibir: function() {
    return `${this.dia}/${this.mes}/${this.ano}`
    }    
};

console.log(data.exibir())
