require("../models/funcionarios"); // requer consulta antes no modelo do funcionarios

const mongoose = require("mongoose"); //importando o modulo mongoose, para interagir com o banco de dados mongoose
const modelo = mongoose.model("funcionarios"); // utilizando essa função para realizar consulta no modulo (schemas) de funcionarios
const cript = require("bcrypt");
const salt = 10;

//metodo CRUD
// Criando um um funcionario no sistema
class Funcionarios {
  static async criar(dados) {
    let { senha } = dados; //Tecnica de Desestruturação, para extrair a propiedade senha do obejeto dados // Isso é útil quando você tem um objeto com várias propriedades e deseja acessar uma delas de maneira mais conveniente.
    const hash = await cript.hash(senha, salt); // usando promisse e uma funcao cript.hash para que a senha seja criptografada antes de terminar o codigo
    senha = hash;
    dados.senha = senha; // Agora a propriedade senha recebe o valor criptografado da rash
    return await new modelo(dados).save(); // aguardando a conclusão da criação da instância com os novos dados e salvando dentro da colecao funcionario
  }



  static async buscarTodos() {
    return await modelo.find({}); // retornando todos os funciionarios
  }

  static async buscarPorID(id) {
    return await modelo.findOne({ _id: id }); //Pesquisa um por um em que o id seja o igual ao id passado no metodo
  }

  static async atualizar(id, dados) {
    return await modelo.findOneAndUpdate(id, { $set: dados }); // aqui estou dizendo para achar um id e setar os dados
  }

  static async remover(id) {
    return await modelo.findOneAndRemove(id);
  }

  static async validarRegistro(dados){
    let { matricula } = dados
    let funcionario = await modelo.findOne({matricula}) 
    return funcionario
  }


  static async validarEntrada(dados){
    
    let { matricula } = dados
    let funcionario = await modelo.findOne({matricula}) 
    return funcionario
  }
  
}

module.exports = Funcionarios;
