const express = require("express");
const bp = require("body-parser"); // criando uma instancia onde estou importando a lib que analisa o corpo das requests
const app = express(); // criando a aplicacao

//configurando o parser
app.use(bp.json({ limit: "10mb" })); // definindo que o tamanho maximo do body é de 10 mbs, caso ultrapasse é rejeitado
app.use(bp.urlencoded({ extended: false })); //Quando definido como false, os objetos resultantes serão objetos planos em vez de objetos aninhados

//configurando o frontend
app.set("view engine", "ejs"); //onde ira rodar o front
app.set("views", "views"); // setando a pasta views

//definindo arquivos estaticos
app.use(express.static("public")); 

const cliente_route = require("../src/routes/cliente"); //importando a rota, com funcionalidades clientes
app.use("/cliente",cliente_route);

//chamando rotas
app.use("/", (req, res) => {
  return res.render("login"); //enviando como resposta para rota padrao
});

//exportando a aplicação
module.exports = app;
