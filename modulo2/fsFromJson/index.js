import {promises as fs} from 'fs'

const writeReadeJson = async ()=>{
    const objTest = {
        name:"Guilherme",
        age:"20",
        dateOfBirth:"14/04/2000",
        work:{
            occupation:"developer",
            languageSkills:["Java","C","Javascript"]
        },
        education:{
            university:"UNIP",
            course:"Sistemas de informação",
            half:"4"
        }
    }
    
    try {
        await fs.writeFile("test.json", JSON.stringify(objTest));
        const fileData = JSON.parse(await fs.readFile("test.json"));
        fileData.education.half = "5"

        await fs.writeFile("test.json", JSON.stringify(fileData));
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
writeReadeJson()