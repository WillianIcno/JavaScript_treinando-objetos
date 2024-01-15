// utilizando o . depois do cliente no console.log, voce direciona oque você quer dentro do objeto
// com o comando, substring (0 , 1 ou 2 ou3  ) voce acessa quantos caracteres vc quer selecionar dentro da string

const cliente =  {
    nome: "André",
    idade: 20,
    cpf: '12345678919',
    email: "Ani@nianianiani.com"
}

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`)

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

