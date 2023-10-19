const app = require ('./bin/index') //importando a aplicacao
const keys = require ('./bin/keys') //importando as chaves de autenticacao
const connection = require ('./src/middleware/conection') //importando a conexao do banco de dados



//está iniciando um servidor web usando o objeto app que foi exportado do módulo index.js.
//O servidor está configurado para escutar em uma porta específica, que é definida em keys.server.port.
app.listen(keys.server.port, (err) => { 
    connection.connect()   //chamando a função que conecta com o banco                 
    if(err){
        console.log('==> Falha na Aplicacao')
    }else{
        console.log('Aplicacao Funcionando')
    }

})