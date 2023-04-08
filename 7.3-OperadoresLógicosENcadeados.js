console.log("Operadores Lógicos:");

const listaDeDestinos = new Array 
(
    "salvador",
    "São Paulo",
    "Rio de Janeiro",
);
const idadeComprador = 16;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log(`idade do comprador: ${idadeComprador}`);
console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

if(idadeComprador>=18||estaAcompanhado==true)
{
    console.log("Comprador maior de idade ou está acompanhado.");
    listaDeDestinos.splice(2,1);
}
else
{
    console.log("comprador é menor de idade e não está acompanhado não posso vender");    
}
console.log(listaDeDestinos);

console.log("Embarue: \n");
if((idadeComprador >= 18 || estaAcompanhado==true)&& temPassagemComprada == true)
{
    console.log("Boa viagem!!");
}
else
{
    console.log("Você não pode embarcar :(");
}