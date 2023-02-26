class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    
}

const d1 = new Data();
d1.dia = 12
d1.mes = 12
d1.ano = 1995
console.log(d1.exibir())

