let num = [];
for (i = 1; i <= 6; i++){ 
num.push(Math.ceil(Math.random() * 59));
}
console.log(num)

//forEach
let valores = "";
for (let nums of num) {
    valores += nums + " ";
}
console.log(valores)