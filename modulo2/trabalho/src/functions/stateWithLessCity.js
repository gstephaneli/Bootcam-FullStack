import {promises as fs} from 'fs'

export const stateWithLessCity = async () => {
    const dataStates = JSON.parse(await fs.readFile("./src/jsonData/Estados.json"))

    let orderLessCities = dataStates.map(async state => {
        const cities  = JSON.parse(await fs.readFile(`./src/jsonData/statesInJson/${state.Sigla}.json`))    
        return { uf:state.Sigla, cities:cities.length }
    });
    
    orderLessCities = await Promise.all(orderLessCities); 
    orderLessCities.sort((a, b )=>a.cities - b.cities);

    await printFiveState(orderLessCities);
}


const printFiveState = async(arrayOrderLessCities) =>{
    const fiveStates = [];
    // console.log(arrayOrderLessCities)
    // for (let i = arrayOrderLessCities.lenght; i <= arrayOrderLessCities.lenght - 5; i--) {
    //     fiveStates.push(`${arrayOrderLessCities[i].uf}-${arrayOrderLessCities[i].cities}`)
    // }
    arrayOrderLessCities.forEach(state => {
        if(fiveStates.length <5){
            fiveStates.push(`${state.uf}-${state.cities}`)
        }
    });
    fiveStates.reverse()

    console.log(fiveStates)
}