import express from "express"
import swaggerUi from 'swagger-ui-express'

import router from "./router.js"
import { swaggerDocument } from './swagger.js'

const app = express();

app.use(express.json());
app.use(router)
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(3000, async ()=>{
    try {
        console.log("Servidor started");
    } catch (error) {
        console.log("Erro ao subir o servidor");
    }
})