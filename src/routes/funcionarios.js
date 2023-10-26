const Funcionario = require("../controller/funcionarios")
const express = require("express")
const router = express.Router()


router.post("/registernew", Funcionario.postCriar)
router.get("/register", Funcionario.getCriar)



module.exports = router