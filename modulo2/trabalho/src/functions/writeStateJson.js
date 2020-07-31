import {promises as fs} from 'fs'

export const writeStateCities = async()=>{
     try {
         
         const dataCities = JSON.parse(await fs.readFile("./src/jsonData/Cidades.json"))
         const dataStates = JSON.parse(await fs.readFile("./src/jsonData/Estados.json"))
     
         dataStates.forEach(state => {
             let objState = []
             dataCities.forEach(city=>{
                 if(city.Estado === state.ID){
                     objState.push(city)
                 }
             })
             objState.sort((a, b) => b.Nome.localeCompare(a.Nome));
             fs.writeFile(`./src/jsonData/statesInJson/${state.Sigla}.json`,JSON.stringify(objState))
         });
     } catch (error) {
         console.log(`Error: ${error}`)
     }
}

