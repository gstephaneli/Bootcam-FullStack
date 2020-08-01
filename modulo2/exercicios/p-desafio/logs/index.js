import express from "express"
import winston from "winston"


const app = express();

app.use(express.json());

const { combine, printf, label, timestamp } = winston.format
const myFormat = printf(({level, message, label, timestamp}) =>{
    return `${timestamp} [${label}] ${level}: ${message}`
}

)

const logger = winston.createLogger({
    level:"silly",
    transports:[
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "meus_logs"}),
    ],
    format:combine(
        label({label: "my-logs"}),
        timestamp(),
        myFormat
    )
})

logger.error("Error log")
logger.warn("Error warn")
logger.info("Error info")
logger.debug("Error debug")
logger.verbose("Error verbose")
logger.silly("Error silly")
logger.log("Info" ,"Hello Loggers")



app.get("/log",  (err, req, res, next)=>{
    
})

app.use((err, req, res, next)=>{
    console.log("Tratando todas rotas");
    next(err)
})


app.listen(8888,()=>{
    console.log("rodando");
})