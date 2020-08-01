import express from "express"

const app = express();

app.use(express.json());
app.use(express.static("img"))
app.use("/Logo",express.static("img"))


app.listen(8888,()=>{
    console.log("rodando");
})