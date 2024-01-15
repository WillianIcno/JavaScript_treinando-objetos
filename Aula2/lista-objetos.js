// como criamos uma array apartir da cons cliente.enderecos podemos utilizar os comandos de array, como por exemplo .push para 
// inserir um novo objeto
const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 555 555 87", "11 555 555 87"]
};

cliente.enderecos = [
    {
        rua: " Rua Joseph Climber",
        número: 234,
        apartamento: true,
        complemento: 134
    },
];

cliente.enderecos.push({
    rua: "rua da esponja",
    numero: 20,
    apartamento: false,
})

const listaApenasApartamento =  cliente.enderecos.filter (
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamento)