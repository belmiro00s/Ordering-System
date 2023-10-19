const mongoose = require("mongoose"); //módulo Mongoose, que é usado para interagir com bancos de dados MongoDB.
const schema = mongoose.Schema;  // armazenando o construtor de schemas do mongoose na var schema

const pedido = new schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clientes",
    required: true,
  },

  funcionario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clientes",
    required: true,
  },

  pizza: {            // caso queira add mais tipos de pizza, podemos utilizar um array
    type: String,
    required: true,
    trim: true
  },

  bebida: {
    type: String,
    required: true,
    trim: true
  }


});

module.exports = mongoose.model("pedidos", pedido);
