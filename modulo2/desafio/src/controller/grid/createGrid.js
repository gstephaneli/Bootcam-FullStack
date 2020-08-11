import { promises as fs } from "fs"

export default async (req, res) => {
    const payload =  req.body;
    try {   
        if(!payload.student || !payload.subject || !payload.type || !payload.value){
            throw new Error("Student, Subject, Type e Value são campos obrigatórios")
        }
        let dataBase = JSON.parse(await fs.readFile("src/dataBase/grades.json"))
    
        const id = dataBase.nextId++
        const timestamp = new Date();
        const {student, subject, type, value} = payload
    
        const newGrid = {id, student, subject, type, value, timestamp}
    
        dataBase.grades.push(newGrid)
    
        await fs.writeFile("src/dataBase/grades.json", JSON.stringify(dataBase, null, 2))
    
        res.status(201).send(newGrid)
    } catch (error) {
        res.status(500).send(error.message)
    }
}