function retornarUmaFuncao() {
    function bomDia() {
        return "bom dia!!!"
    }
    return bomDia;
}

const umaFuncao = retornarUmaFuncao();
console.log(umaFuncao())

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao()());
console.log(retornarUmaFuncao());