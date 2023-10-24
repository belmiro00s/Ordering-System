
require ('../models/cliente') // requer consulta antes o modelo do cliente

const mongoose= require ('mongoose') //importando o modulo mongoose, para interagir com o banco de dados mongoose
const modelo = mongoose.model('clientes') // utilizando essa função para realizar consulta no modulo (schemas) de clientes 

//metodo CRUD
class Cliente {
    static async criar (dados){    
        return await new modelo(dados).save() // aguardando a conclusão da criação da instância com os novos dados e salvando dentro da colecao clientes
    }
    static async  buscarTodos(){
        return await modelo.find({}) // retornando todos os clientes
    }

    static async buscarPorID(id){
        return await modelo.findOne({_id: id}) //Pesquisa um por um em que o id seja o igual ao id passado no metodo 
    }


    static async atualizar(id, dados) {
        return await modelo.findOneAndUpdate(id, {$set: dados}) // aqui estou dizendo para achar um id e setar os dados 

    } 

    static async remover (id){
        return await modelo.findOneAndRemove(id)
    }
}


module.exports = Cliente
