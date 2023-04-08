console.log("Tirando elementos de uma listas:");

const listaDeDestinos = new Array 
(
    "salvador",
    "São Paulo",
    "Rio de Janeiro",
);

console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log("Exibindo apenas um item da lista:");
console.log(listaDeDestinos[1]);