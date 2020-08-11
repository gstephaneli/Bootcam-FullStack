import { promises as fs } from "fs"

export default async (req, res) => {

    const id =  req.params.id;
    try {   
        let dataBase = JSON.parse(await fs.readFile("src/dataBase/grades.json"))
    
        const grid = dataBase.grades.find(data => data.id === parseInt(id))
        if(!grid){
            throw new Error("Registro não encontrado")
        }
    
        res.status(200).send(grid)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}