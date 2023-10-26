const Cliente = require("../resources/cliente");

exports.getCriar = async (req, res, next) => {
  try {
    return res.send("Oi, aqui renderizo um form de cadastrro de cliente");
  } catch (err) {
    next(err);
  }
};



exports.postCriar = async (req, res, next) => {
  try {
    let resultado = await Cliente.validarRegistro(req.body);
    if (!resultado) {// Verifica se o email inserido, é diferente de todos os emails que ja existe no banco 
      
      const cliente = await Cliente.criar(req.body); // Chamando o metodo criar la do resources // aguardando a conclusão da criação da instância com os novos dados e salvando dentro da colecao clientes (banco)
      return res.json(cliente); // utilizando o res para enviar a resposta http do objeto criado num json
    }else{
      return res.json({error: 'Cliente ja Registrado'})
    }
  } catch (err) {
    // Se ocorrer algum erro, ele será capturado e tratado no bloco catch.
    next(err); //  é usada para encaminhar erros para o middleware de tratamento de erros do Express.js
  }
  
};





exports.getbuscarTodos = async (req, res, next) => {
  try {
    const todos = await Cliente.buscarTodos(); // Chamando o metodo buscar por todos os clientes
    
    if(todos.length > 0 ){
      return res.json(todos);
    }else{
      return res.json({error: 'Nao ha registros cadastrados'})
    }

  } catch (err) {
    next(err);
  }
  console.log(res);
};



exports.deleteByid = async (req, res ,next) => {
  try{
    const register = await Cliente.remover()
    return res.json(register)
  } catch (err) {
    next(err)
  }
 console.log(res)
}
