import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world")
})

//caracter anterior a '?' vira opcional 
app.get("/teste?", (req, res) => {
    res.send("Hello world 2")
})

//caracter anterior a '+' pode ser informada quantas 
//vezes quiser que sera a mesma rota 
app.get("/testando+", (req, res) => {
    res.send("Hello world 2")
})


//pode ser passado o que quise na rota como parametro e assim receber em json
//ex: host/testQuery?name=cleiton&cpf=4712326547
app.get("/testQuery", (req, res) => {
    res.send(req.query)
})


//next
app.get("/testNext", (req, res, next) => {
    console.log('Primeiro callback');
    next()
}, (req,res) => {
    console.log('Segundo callback');
    res.status(200).send('FEITO')
})

//next com array passando as funções de callback
// app.get("/testNext2",[callback1,callback2,callback3])


//caracter anterior a '+' pode ser informada quantas 
//vezes quiser que sera a mesma rota 
app.get("/nome/:id", (req, res) => {

    res.send("Name: " + req.params.id)
})

//faz o que estar dentro do ()? ser opcional , 
//basicamento o ( ) é tratado como unidade
app.get("/tstand(o)?", (req, res) => {
    res.send("Hello world 2")
})


//qualquer caracter passado no * sera aceito
app.get("/tsta*ndo", (req, res) => {
    res.send("Hello world 2")
})



app.listen(3333, () => {
    console.log("Servidor funcionando")
})