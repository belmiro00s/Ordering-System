const Cliente = require("../controller/cliente");
const express = require("express");
const router = express.Router();

router.get("/",Cliente.getCriar); //definir essas rotas na pasta bin /index.js
router.post("/",Cliente.postCriar); // definir essas rotas na pasta bin /index.js

module.exports = router; // exportando as rotas
