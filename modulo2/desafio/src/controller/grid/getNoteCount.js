import { promises as fs } from "fs"

export default async (req, res) => {

    const payload =  req.body;
    try {   
        if(!payload.student || !payload.subject){
            throw new Error("Student e Subject são campos obrigatórios")
        }
        let dataBase = JSON.parse(await fs.readFile("src/dataBase/grades.json"))
    
        const allNote = await dataBase.grades.reduce((accumulator, current) => {
            if(current.student === payload.student && current.subject === payload.subject ){
                return accumulator = accumulator + current.value;
            }
            return accumulator
        },0)

        res.status(200).send(`Soma das notas: ${allNote.toString()}`)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}