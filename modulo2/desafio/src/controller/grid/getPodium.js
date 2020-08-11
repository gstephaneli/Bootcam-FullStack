import { promises as fs } from "fs"

export default async (req, res) => {

    const payload =  req.body;
    try {   
        if(!payload.subject || !payload.type){
            throw new Error("Subject e Type são campos obrigatórios")
        }
        let dataBase = JSON.parse(await fs.readFile("src/dataBase/grades.json"))
        dataBase.grades.sort((a,b) => b.value - a.value )
        let countLength = 0
        
        const gridPodium = await dataBase.grades.filter(grid => {
            if( grid.subject === payload.subject && grid.type === payload.type && countLength < 3 ){
                countLength ++;
                return grid
            }
        },0)

        res.status(200).send(gridPodium)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}