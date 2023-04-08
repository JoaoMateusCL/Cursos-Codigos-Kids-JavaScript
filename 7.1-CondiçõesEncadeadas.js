console.log("Operadores Lógicos:");

const listaDeDestinos = new Array 
(
    "salvador",
    "São Paulo",
    "Rio de Janeiro",
);
const idadeComprador = 16;
const estaAcompanhado = true;

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
    if(estaAcompanhado==true)
    {
        console.log("O comprador menor de idade está acompanhado posso vender");
        listaDeDestinos.splice(1,1);
    }
    else
    {
        console.log("comprador é menor de idade e não está acompanhado não posso vender");    
    }
}
console.log(listaDeDestinos);