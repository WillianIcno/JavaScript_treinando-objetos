// é possive criar uma funçao dentro de um objeto para realizar alguma situação.

const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 555 555 87", "11 555 555 87"],
    saldo: 200,
    efetudaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log ("Saldo Insuficiente ");
        }
            else { this.saldo -= valor;
                console.log (`Pagamento realizado. Novo Salvo ${this.saldo}`)

            }
        }
    }
;


cliente.efetudaPagamento(25)