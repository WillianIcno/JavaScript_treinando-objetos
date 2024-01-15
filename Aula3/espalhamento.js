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

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log (`ligando para ${telefoneComercial}`)
    console.log (`ligando para ${telefoneResidencial}`)
}

ligaParaCliente  (...cliente.telefone)

const encomenda = {
    destinataio : cliente.nome,
    ...cliente.enderecos[0],
}
console.log(encomenda)