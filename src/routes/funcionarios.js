const Funcionario = require("../controller/funcionarios")
const express = require("express")
const router = express.Router() 



//login funcionario
router.get("/login", Funcionario.getLogar)
router.post("/login", Funcionario.postLogar)


//cria funcionario
router.post("/registernew", Funcionario.postCriar) // ao realiazar o get, executa o metodo criar funcionario
router.get("/register", Funcionario.getCriar) 

//busca todos funcionarios
router.get("/todos", Funcionario.getbuscarTodos)

//delete de funcionarios 
router.delete("/delete", Funcionario.deleteByid)

module.exports = router