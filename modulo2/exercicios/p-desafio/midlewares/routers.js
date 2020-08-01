import express from "express"

const router = express.Router();

router.get("/", (req,res) => {
    console.log("rota de teste")
    res.send("rota de teste(GET)")
})

export default router