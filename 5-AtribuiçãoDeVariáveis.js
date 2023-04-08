console.log("Trabalhando com atribução de variáveis:");

const idade= 16;
/*let*/ const primeiroNome= "João";
const sobrenome= "Mateus";

//console.log(nome+" "+sobrenome);
console.log(primeiroNome,sobrenome);
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`);
//primeiroNome = primeiroNome+sobrenome;
const nomeCompleto =primeiroNome+sobrenome;//Dessa forma não seria preciso redefinir um valor para a variável nome que é a forma recomendada.
console.log(`Meu nome é: ${primeiroNome}`);
console.log(`Meu nome é: ${nomeCompleto}`);