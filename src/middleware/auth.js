const storage = require('localtoken')
const jwt = require('jsonwebtoken')
const keys = require('../../bin/keys')


//Criando uma funcao assincrona 
exports.autorizar = async (req, res, next) => {
    try{
        const token = storage.getInLocal('login') // armazenando token presente no local do usuario
        if(!token) { // verificando se o token esta presente 
            return res.send('Permissao negada')
        }
        return next()
    }catch(err) {
        next(err)
    }

}


exports.gerarToken = async (dados) => {
    return await jwt.sign(dados, keys.auth.secret) // metodo jwt.sign que recebe os dados a serem codificados e a  chave secreta
}



exports.decodificar = async (token) => {
    const dados = await jwt.decode(token, keys.auth.secret)
    return dados
}