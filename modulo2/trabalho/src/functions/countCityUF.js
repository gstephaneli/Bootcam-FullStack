import readline from 'readline'
import {promises as fs} from 'fs'

export const countCityUF = async (isInput, uf = '' ) => {
    
    
        if(isInput){
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })
            rl.question(`-------------------------------------\nDe qual UF deseja saber a quantidade de cidade: `,
                 async inputUf => {
                    uf = inputUf;
                    rl.close();
                    const city = await getCity(uf);
                    console.log(`Tamanho do encontrado: ${city.length}`)
                });
        }else{
            const city = await getCity(uf)
            return city;
            
        }
}

const getCity = async uf => {
    try {
        const city  = JSON.parse(await fs.readFile(`./src/jsonData/statesInJson/${uf.toUpperCase()}.json`))    
        return city;
    } catch (error) {
        console.log(`UF invalido : ${error}`)
    }
}