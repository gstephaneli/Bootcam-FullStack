import express from "express"

const app = express();

app.use(express.json());

// app.get("/",(req, res)=>{
//     throw Error("DEU UM BAITA ERROR")    
// })

//tratamento de erro em function async
app.get("/post", async (err, req, res, next)=>{
    try {  
        throw Error("DEU UM ERROR NO POST")    
    } catch (error) {
        next(err)
    }
})

app.use((err, req, res, next)=>{
    console.log("DEU ERRO");
    next(err)
})


app.listen(8888,()=>{
    console.log("rodando");
})