import { promises as fs } from "fs"

export default async (req, res) => {

    const id =  req.params.id;
    try {   

        let dataBase = JSON.parse(await fs.readFile("src/dataBase/grades.json"))
    
        const indexArray = dataBase.grades.findIndex(data => data.id === parseInt(id))
        if(indexArray === -1){
            res.status(404).send("Registro não encontrado")
        }
        dataBase.grades = dataBase.grades.filter(data => data.id !== parseInt(id))

        await fs.writeFile("src/dataBase/grades.json", JSON.stringify(dataBase, null, 2))
    
        res.status(200).send(`Grade com id: ${id} deletada com sucesso`)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}