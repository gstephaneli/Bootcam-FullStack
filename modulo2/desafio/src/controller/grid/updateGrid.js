import { promises as fs } from "fs"

export default async (req, res) => {

    const payload =  req.body;
    try {   
        if(!payload.id || !payload.student || !payload.subject || !payload.type || !payload.value){
            throw new Error("ID, Student, Subject, Type e Value são campos obrigatórios")
        }
        let dataBase = JSON.parse(await fs.readFile("src/dataBase/grades.json"))
    
        const indexArray = dataBase.grades.findIndex(data => data.id === parseInt(payload.id))
        if(indexArray === -1){
            res.status(404).send("Registro não encontrado")
        }
        
        dataBase.grades[indexArray].student = payload.student;
        dataBase.grades[indexArray].subject = payload.subject;
        dataBase.grades[indexArray].type = payload.type;
        dataBase.grades[indexArray].value = payload.value;

        await fs.writeFile("src/dataBase/grades.json", JSON.stringify(dataBase, null, 2))
    
        res.status(200).send(dataBase.grades[indexArray])
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}