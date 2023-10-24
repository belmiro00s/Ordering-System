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
    const cliente = await Cliente.criar(req.body); // Chamando o metodo criar la oo resources // aguardando a conclusão da criação da instância com os novos dados e salvando dentro da colecao clientes (banco)
    return res.json(cliente); // utilizando o res para enviar a resposta http do objeto criado num json
  } catch (err) {
    // Se ocorrer algum erro, ele será capturado e tratado no bloco catch.
    next(err); //  é usada para encaminhar erros para o middleware de tratamento de erros do Express.js
  }
  console.log(req.body);
};
