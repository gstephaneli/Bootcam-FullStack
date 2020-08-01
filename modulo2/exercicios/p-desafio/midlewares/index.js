import express from "express"
import router  from "./routers.js"

const app = express();

app.use(express.json());
app.use("/testando", router)
//todas rotas vão bater aqui ante
app.use((req, res, next)=>{
    console.log(new Date());
    next()
})

app.get("/",(req, res)=>{
    res.send("TESTE REQUEST")
})

app.listen(8888,()=>{
    console.log("rodando");
})