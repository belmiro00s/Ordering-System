//criando esquema para banco de dados NoSQL

const smc = require("simple-mongoose-creator"); //importando esse modulo que permite criar um simples esquema
smc.smc("clientes", { //chama a função "smc" do módulo simple-mongoose-creator para criar o esquem
  nome: {
    type: String,
    required: true,
    trim: trim,
  },

  telefone: {
    type: String,
    required: true,
  },
});

module.exports = smc;
