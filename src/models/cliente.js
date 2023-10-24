//criando esquema para banco de dados NoSQL

const smc = require("simple-mongoose-creator"); //importando esse modulo que permite criar um simples esquema
smc.smc("clientes", {
  telefone: {
    type: String,
    required: true,
  },
  nome_cliente: {
    type: String,
    required: true,
    
  },
});

module.exports = smc;
