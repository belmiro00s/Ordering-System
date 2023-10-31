const smc = require("simple-mongoose-creator")//importando esse modulo que permite criar um simples esquema
smc.smc("funcionarios", {
    matricula: {
        type: Number,
        required: true,
        unique: true
    },

    senha: {
        type: String,
        required: true,
        trim: true
    },

    nome: {
        type: String,
        required: true,
        
    },

    data_nascimento: {
        type: Date,
        required: true

    }


})
module.exports = smc