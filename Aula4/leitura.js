// O json é como se fosse um componente que você guarda dados e depois importa ele para seu codigo de forma integral utilizando
// require("./") e o endereço do codigo desejado

const dados = require("./cliente.json");

console.log(dados)
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString)
console.log(typeof clienteEmString)

console.log(clienteEmString.nome)

const objetoCliente = JSON.parse (clienteEmString);

console.log(objetoCliente)