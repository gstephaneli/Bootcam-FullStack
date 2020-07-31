import {cityWithLessChar} from './cityWithLessChar.js'

export const smallestCity = async () => {

    const allSmallesCities = await cityWithLessChar()
    allSmallesCities.sort((a, b) => a.localeCompare(b));;
    allSmallesCities.sort((a, b) => a.length - b.length);
    console.log(allSmallesCities[0])
}
