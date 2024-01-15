

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

for (let chave in cliente) {
    let tipo  = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
    console.log(`A chave  ${chave} tem o valor ${cliente[chave]}`)
    }
}