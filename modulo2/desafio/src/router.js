import express from "express"

import createGrid from "./controller/grid/createGrid.js"
import updateGrid from "./controller/grid/updateGrid.js"
import deleteGrid from "./controller/grid/deleteGrid.js"
import searchGrid from "./controller/grid/searchGrid.js"
import getNoteCount from "./controller/grid/getNoteCount.js"
import getAverage from "./controller/grid/getAverage.js"
import getPodium from "./controller/grid/getPodium.js"



const router = express.Router()

router.post("/createGrid",createGrid)
router.put("/updateGrid",updateGrid)
router.delete("/deleteGrid/:id",deleteGrid)
router.get("/searchGrid/:id",searchGrid)
router.get("/getNoteCount",getNoteCount)
router.get("/getAverage",getAverage)
router.get("/getPodium",getPodium)


export default router