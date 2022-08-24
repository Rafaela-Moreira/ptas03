const express = require('express');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJWT} = require('express-jwt')
const cors = require('cors');
const cookieParse = require('cookie-parse');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app use(cors());
app.use(cookieParse());

app.get('/', async function(req, res){
    res.send("Ola")
})

app.get('/autenticar', async function(req, res, next){
    res.render("autenticar")
});

app.post('/logar', function(req, res){
 const usuario = req.body.usuario;
 const senha = req.body.senha;
 if (usuario == "junin" && senha =="000"){
req.send("autenticado")
} else{
  req.send("não autenticado")
}
});

app.get('/inscrever', async function(req, res, next){
  res.render("inscrever")
});



 


// if(numero > 0){
//   console.log(numero);
// } 

// app.get('/', async function(req, res){
//   var resultado = await usuario.findAll();
//   res.json(resultado);
// })

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});