import express from "express"
import routers from "./routers/router.js"
import {promises as fs }from "fs"

const app = express();

app.use(express.json());

app.use("/account", routers)

app.listen(8888, async ()=>{
    const initialJson = {
        nextId:1,
        account:[]
    }
    try {
        console.log("Api started");
        await fs.readFile("accounts.json")
    } catch (error) {
        await fs.writeFile("accounts.json", JSON.stringify(initialJson)).then(()=>{
            console.log("Api started");
        }).catch(err => console.log("Erro na criação do arquivo"))
    }

    console.log("API Banck rodando ")
})