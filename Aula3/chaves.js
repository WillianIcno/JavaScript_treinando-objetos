
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

const chavesDoObjeto = Object.keys (cliente);
console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado")
}