const Cliente = require("../controller/cliente");
const express = require("express");
const router = express.Router();




router.get("/todos",Cliente.getbuscarTodos) //

router.get("/registro",Cliente.getCriar); //definir essas rotas na pasta bin /index.js
router.post("/registernew/",Cliente.postCriar); // definir essas rotas na pasta bin /index.js


router.delete("/delete", Cliente.deleteByid)


module.exports = router; // exportando as rotas
