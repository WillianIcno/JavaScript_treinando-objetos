// Outra Forma de acessar o objeto de desejo dentro do objeto, é colocar o colchete depois do da const cliente, como visto abaixo

const cliente =  {
    nome: "André",
    idade: 20,
    cpf: '12345678919',
    email: "Ani@nianianiani.com",
    altura: '1,75'
}

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`)

const chaves = ["nome", "idade", "cpf", "idade" , "altura"];

chaves.forEach ((chave) => {
    console.log(`A chave ${chave} tem valor de ${cliente[chave]}`)
})


