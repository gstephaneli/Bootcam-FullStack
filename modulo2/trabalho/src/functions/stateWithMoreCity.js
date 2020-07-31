import {promises as fs} from 'fs'

export const stateWithMoreCity = async () => {
    const dataStates = JSON.parse(await fs.readFile("./src/jsonData/Estados.json"))

    let orderMoreCities = dataStates.map(async state => {
        const cities  = JSON.parse(await fs.readFile(`./src/jsonData/statesInJson/${state.Sigla}.json`))    
        return { uf:state.Sigla, cities:cities.length }
    });
    
    orderMoreCities = await Promise.all(orderMoreCities); 
    orderMoreCities.sort((a, b )=>b.cities - a.cities);

    await printFiveState(orderMoreCities);
}


const printFiveState = async(arrayOrderMoreCities) =>{
    const fiveStates = [];
    
    arrayOrderMoreCities.forEach(state => {
        if(fiveStates.length <5){
            fiveStates.push(`${state.uf}-${state.cities}`)
        }
    });
    console.log(fiveStates)
}