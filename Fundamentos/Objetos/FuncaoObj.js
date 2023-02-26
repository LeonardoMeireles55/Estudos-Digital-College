function criarData(dia, mes, ano) {
    return {
            dia: dia,
            mes: mes,
            ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
            }    
        }
}


const data = criarData(8,10,2012);
const data1 = criarData(27,11,2003);
const data2 = criarData(12,12,1995);

console.log(data.exibir())
console.log(data1.exibir())
console.log(data2.exibir())
