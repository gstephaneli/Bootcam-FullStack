import {cityWithMoreChar} from './cityWithMoreChar.js'

export const biggestCity = async () => {

    const allBiggestCities = await cityWithMoreChar()
    allBiggestCities.sort((a, b) => b.length - a.length);
    console.log(allBiggestCities[0])
}
