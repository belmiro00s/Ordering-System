const Funcionario = require("../resources/funcionario");



// funcao para renderizar a tela de login
exports.getLogar = async (req, res, next) => {
  try{
    return res.render('login/_index')
  }catch (err) {
    next(err)
  }
}











exports.getCriar = async (req, res, next) => {
  try {
    return res.send("Pagina de funcionarios");
  } catch (err) {
    next(err);
  }
} 

exports.postCriar = async (req, res, next) => {
  try {
    let resultado = await Funcionario.validarRegistro(req.body); // criando uma constante para receber ,o metodo que veririfica o dado matricula no banco
    if (!resultado) {  // condicao para verificar se a matricula inserida é diferente do que ja tem cadastrado no banco
      const funcionario = await Funcionario.criar(req.body);  //armazena o metodo criar funcionario
      return res.json(funcionario); // retorna o funcionario no json
    } else {
      return res.json({ error: "Funcionario ja cadastrado" });
    }
    } catch (err) {
     next(err);
  }
} 

exports.getbuscarTodos = async (req, res, next) => { 
  try { 
    const todos = await Funcionario.buscarTodos();  // armazenando o metodo que busca todos os funcionarios no banco 

    if (todos.length > 0) { // condicao para verificar se na classe de funcionarios existe algum registro
      return res.json(todos); // se for true, retorna os registros
    } else { // senao, retorna msg 
      return res.json({ error: "Nao ha registros cadastrados" });
    }
     } catch (err) {
        next(err);
    }
        console.log(res);

    } 


exports.deleteByid = async (req, res, next) => { 
    try{
        const register = await Funcionario.remover() // criando uma constante para receber o metodo  que remove o funcionario por id
        return res.json(register)  // retorna o funcionario removido no json

    }catch (err){ 
        next(err)  
    } 
    console.log(res) 
} 


