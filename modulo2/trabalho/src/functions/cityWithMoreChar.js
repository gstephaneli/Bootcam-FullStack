import {promises as fs} from 'fs'

export const cityWithMoreChar = async () => {
    const dataStates = JSON.parse(await fs.readFile("./src/jsonData/Estados.json"))
    
    return await moreCities(dataStates)  
}

const moreCities = async (dataArray)=>{
    const newDataArray = await dataArray.map(async state => {
        const cities  = JSON.parse(await fs.readFile(`./src/jsonData/statesInJson/${state.Sigla}.json`))    
        const newCities = await cities.map( city => {
            return { name:city.Nome, length:city.Nome.length, uf:state.Sigla }
        })
        newCities.sort((a,b) => a.length - b.length);
        return `${newCities[newCities.length-1].name}-${newCities[newCities.length-1].uf}`
    });
    
    return await Promise.all(newDataArray)
}