require ('../src/models/cliente') // requer consulta antes o modelo do cliente

const mongoose= require ('mongoose') //importando o modulo mongoose, para interagir com o banco de dados mongoose
const modelo = mongoose.model('clientes') // utilizando essa função para realizar consulta no modulo (schemas) de clientes 
