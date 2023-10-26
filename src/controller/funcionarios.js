const Funcionario = require("../resources/funcionario")


exports.getCriar = async (req, res, next) => {
    try {
       return res.send("Pagina de funcionarios")
    
    }catch (err) {
        next(err)
    }
    }





exports.postCriar = async (req, res, next) => {
try {
  const funcionario = await Funcionario.criar(req.body)
   return res.json(funcionario)

}catch (err) {
    next(err)
}
}