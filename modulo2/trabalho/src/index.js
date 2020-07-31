import {writeStateCities} from './functions/writeStateJson.js'
import {countCityUF} from './functions/countCityUF.js'
import {stateWithLessCity} from './functions/stateWithLessCity.js'
import {stateWithMoreCity} from './functions/stateWithMoreCity.js'
import {cityWithMoreChar} from './functions/cityWithMoreChar.js'
import {cityWithLessChar} from './functions/cityWithLessChar.js'
import {biggestCity} from './functions/biggestCity.js'
import {smallestCity} from './functions/smallestCity.js'

const start = async () => {

    console.log(`\n----------1----------`)
    await writeStateCities();
    console.log(`\nCriado todos arquivos`)
    
    console.log(`\n----------3----------`)
    await stateWithMoreCity()

    console.log(`\n----------4----------`)
    await stateWithLessCity()
    
    console.log(`\n----------5----------`)
    console.log(await cityWithMoreChar())
    
    console.log(`\n----------6----------`)
    console.log(JSON.stringify(await cityWithLessChar()))
    
    console.log(`\n----------7----------`)
    await biggestCity()
    
    console.log(`\n----------8----------`)
    await smallestCity()

    console.log(`\n----------2----------`)
    await countCityUF(true)
}

start();