console.log("Loops/Estruturas de repetição:");

const listaDeDestinos = new Array 
(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 16;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador"; 

console.log(`idade do comprador: ${idadeComprador}`);
console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

const podeCompra = idadeComprador>=18||estaAcompanhado==true;
let contador = 0;
let destinoExiste = false;

/*while(contador<3)
{
    if(listaDeDestinos[contador]==destino)
    {
        console.log("Destino existe.");
        destinoExiste= true;
        break;    
    }
    contador = contador+1;
}
*/
for(let cont =0;cont<3;cont ++)
{
    if(listaDeDestinos[cont]==destino)
    {
        console.log("Destino existe.");
        destinoExiste= true;
        break;    
    }
}

console.log("Destino existe: ", destinoExiste);

if(destinoExiste&&podeCompra)
{
    console.log("Boa viagem!!");
}
else
{
    console.log("Desculpe deve ter ocorrido algum erro");
}