import express from "express"
import cors from "cors"
import {promises as fs }from "fs"
import swaggerUi from 'swagger-ui-express'
import winston from "winston"

import routers from "./routers/router.js"
import { swaggerDocument } from './swagger.js'

const app = express();

const {combine, timestamp, label, printf} = winston.format
const myLoggerFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`
})
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "my-logger-of-api.log"})
    ],
    format: combine(
        label({label: "Logger API"}),
        timestamp(),
        myLoggerFormat
    )
})


app.use(express.json());

//Cors libera outras rotas acessarem os endpoints da api
app.use(cors())

//Adicionando rota para documentação
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//Adicionando arquivo de rotas
app.use("/account", routers)

//Levantar servidor
app.listen(8888, async ()=>{
    const initialJson = {
        nextId:1,
        account:[]
    }
    try {
        logger.info("Api started");
        await fs.readFile("accounts.json")
    } catch (error) {
        await fs.writeFile("accounts.json", JSON.stringify(initialJson)).then(()=>{
            logger.info("Api started and File created");
        }).catch(err => logger.error("Erro na criação do arquivo"))
    }
})