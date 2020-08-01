import express from "express"
import {promises as fs }from "fs"

const router = express.Router();

router.post("/", async  (req, res)=> {
    try {
        let account  = req.body;
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        const newAccount = {id: data.nextId++, ...account}
        data.account.push(newAccount)

        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))
        res.status(201).send(newAccount)

    } catch (error) {
        res.status(400).send("Erro na leitura do arquivo")
    }

})

router.get("/", async  (req, res)=> {
    try {
        let account  = req.body;
        const data = JSON.parse(await fs.readFile("accounts.json"))  
        res.send(data.account)

    } catch (error) {
        res.status(400).send("Erro na leitura do arquivo")
    }

})

router.get("/:id", async  (req, res)=> {
    try {
        const {id} = req.params
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        const acc = data.account.find(data => data.id === parseInt(id)) 
        if(!acc){
            res.status(404).send('Id não cadastrado')

        }
        res.status(200).send(acc)

    } catch (error) {
        res.status(400).send("Erro na leitura do arquivo")
    }

})

router.delete("/:id", async  (req, res)=> {
    try {
        const {id} = req.params
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        data.account = data.account.filter(data => data.id !== parseInt(id)) 
        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))

        res.status(200).send("Deletado")

    } catch (error) {
        res.status(400).send("Erro na leitura do arquivo")
    }

})

router.put("/", async  (req, res)=> {
    try {
        let account  = req.body;
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        const indexAcc = data.account.findIndex(data => data.id === parseInt(account.id)) 
        data.account[indexAcc] = account

        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))
        res.status(201).send(account)

    } catch (error) {
        res.status(400).send("Erro na leitura do arquivo")
    }
})

router.patch("/updateBalance", async  (req, res)=> {
    try {
        let account  = req.body;
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        const indexAcc = data.account.findIndex(data => data.id === parseInt(account.id)) 
        data.account[indexAcc].balance = account.balance

        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))
        res.status(201).send(data.account[indexAcc])

    } catch (error) {
        res.status(400).send("Erro na leitura do arquivo")
    }
})


export default router;