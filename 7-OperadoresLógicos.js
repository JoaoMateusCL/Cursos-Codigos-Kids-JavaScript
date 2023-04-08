console.log("Operadores Lógicos:");

const listaDeDestinos = new Array 
(
    "salvador",
    "São Paulo",
    "Rio de Janeiro",
);
const idadeComprador = 18;

console.log(`idade do comprador: ${idadeComprador}`);
console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

if(idadeComprador>=18)
{
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1,1);
}
else
{
    console.log("comprador menor de idade não posso vender");
}
console.log(listaDeDestinos);

console.log("Exemplos dos operadores lógicos: ");
console.log(`idade maior que 18 (> = maior): ${idadeComprador>18}`);
console.log(`idade menor que 18 (< = menor): ${idadeComprador<18}`);
console.log(`idade maior ou igual a 18 (>= = maior ou igual): ${idadeComprador>=18}`);
console.log(`idade menor ou igual a 18 (<= = menor ou igual): ${idadeComprador<=18}`);
console.log(`idade igual a 18 (== = exatamente igual): ${idadeComprador==18}`);