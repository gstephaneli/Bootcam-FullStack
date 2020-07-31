import {promises as fs} from 'fs'

export const cityWithLessChar = async ()=>{
    const dataStates = JSON.parse(await fs.readFile("./src/jsonData/Estados.json"))

    return await lessCities(dataStates)
}

const lessCities = async (dataArray)=>{
    const newDataArray = dataArray.map(async state => {
        let cities  = JSON.parse(await fs.readFile(`./src/jsonData/statesInJson/${state.Sigla}.json`))    
        cities = cities.sort((a, b) => a.Nome.localeCompare(b.Nome))
        const newCities = cities.map( city => {
            return { name:city.Nome, length:city.Nome.length, uf:state.Sigla }
        })
        newCities.sort((a,b) => a.length - b.length);
        return `${newCities[0].name}-${newCities[0].uf}`
    });
    
    return await Promise.all(newDataArray)
}