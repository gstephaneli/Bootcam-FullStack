import express from "express"
import {promises as fs }from "fs"

const router = express.Router();

router.post("/", async  (req, res, next)=> {
    try {
        let account  = req.body;
        if(account.balance === null || !account.name){
            throw new Error("Name e Balance são obrigatórios")
        }

        const data = JSON.parse(await fs.readFile("accounts.json")) 

        const newAccount = {id: data.nextId++, name:account.name, balance: account.balance}
        data.account.push(newAccount)

        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))
        res.status(201).send(newAccount)

        logger.info(`POST /account - with data: ${JSON.stringify(newAccount)}`)
    } catch (error) {
        next(error)
    }

})

router.get("/", async  (req, res, next)=> {
    try {
        let account  = req.body;
        const data = JSON.parse(await fs.readFile("accounts.json"))  
        res.send(data.account)
        logger.info(`GET /account with successful`)
    } catch (error) {
        next(error)
    }

})

router.get("/:id", async  (req, res, next)=> {
    try {
        const {id} = req.params
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        const acc = data.account.find(data => data.id === parseInt(id)) 
        if(!acc){
            res.status(404).send('Id não cadastrado')

        }
        res.status(200).send(acc)
        logger.info(`GET /account/:id with successful`)
    } catch (error) {
        next(error)
    }

})

router.delete("/:id", async  (req, res, next)=> {
    try {
        const {id} = req.params
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        data.account = data.account.filter(data => data.id !== parseInt(id)) 
        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))

        res.status(200).send("Deletado")
        logger.info(`Delete - /account/:id id deleted is "${id}"`)

    } catch (error) {
        next(error)
    }

})

router.put("/", async  (req, res, next)=> {
    try {
        let account  = req.body;
        
        if(account.balance === null || !account.name || !account.id){
            throw new Error("ID, Name e Balance são obrigatórios")
        }

        const data = JSON.parse(await fs.readFile("accounts.json")) 
        const indexAcc = data.account.findIndex(data => data.id === parseInt(account.id)) 
        if(indexAcc === -1){
            throw new Error("Registro não encontrado")
        }
        data.account[indexAcc] = {id: account.id, name:account.name, balance: account.balance}

        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))
        res.status(201).send(account)
        logger.info(`PUT /account - with data: ${JSON.stringify(account)}`)

    } catch (error) {
        next(error)
    }
})

router.patch("/updateBalance", async  (req, res, next)=> {
    try {
        let account  = req.body;
        if(account.balance === null || !account.id){
            throw new Error("ID e Balance são obrigatórios")
        }
        const data = JSON.parse(await fs.readFile("accounts.json")) 
        const indexAcc = data.account.findIndex(data => data.id === parseInt(account.id))

        if(indexAcc === -1){
            throw new Error("Registro não encontrado")
        }

        data.account[indexAcc].balance = account.balance

        await fs.writeFile("accounts.json", JSON.stringify(data, null, 2))
        res.status(201).send(data.account[indexAcc])
        logger.info(`PATCH /account/updateBalance - From data: ${data.account[indexAcc]}`)

    } catch (error) {
        next(error)
    }
})

router.use((err, req, res, next)=>{
    logger.error(`In method: ${req.method} - ${req.baseUrl}, with message: ${err.message}`);
    res.status(500).send(err.message)

})

export default router;