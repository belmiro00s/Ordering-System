'use strict'

const mongoose = require('mongoose') // importando o modulo mongoose 
const keys = require('../../bin/keys') //importando as chaves de autenticacao



// Exporta a função 'connect' para conectar ao banco de dados.
module.exports.connect = () => {
    // Tenta estabelecer uma conexão com o MongoDB usando as informações de conexão fornecidas em 'keys.database.connection'.
    mongoose.connect(keys.database.connection, err => {
        if(err){
            console.log('==> [-] mongodb')
        }else {
            console.log('==> [+] mongodb')
        }
    }, {useNewUrlParser: true})
}
