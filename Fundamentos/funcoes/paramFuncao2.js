
//passando valor padrão:
function somar(a, b, c, d = 0) {
    return a + b + c + d;
}

console.log(1, 2, 3, 4)
console.log(somar(1, 2, 3)) // vai retonar underfined.
console.log("fim"); // continua o codigo por ser flexivel.  