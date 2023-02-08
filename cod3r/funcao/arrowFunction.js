let dobro = function (a) {
    return 2 * a
}
//arrow
dobro = (a) => {
    return 2 * a
}
// arrow sem chaves e return
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return ('ola')
}

// refatorando olá:
ola = () => 'ola'

console.log(ola())