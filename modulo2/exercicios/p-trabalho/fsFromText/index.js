import {promises as fs} from 'fs'

//Melhroando a criação e leitura de arquivos com promises
const init = async ()=>{
    try {
        await fs.writeFile("test.txt","Teste criacao de arquivo pelo node")
        await fs.appendFile("test.txt", "\n'Adicionando outro pequeno texto'")
        const fileData = await fs.readFile("test.txt","utf-8")
        console.log(`Conteúdo do arquivo lido: ${fileData}`)
    } catch (error) {
        console.log(`Erro: ${err}`)
    }
}

init();

//Utlizando promises para criação e leitura de arquivos
// import fs from 'fs'
// fs.writeFile("test.txt","Teste criacao de arquivo pelo node").then(()=>{
//     fs.appendFile("test.txt", "\n'Adicionando outro pequeno texto'").then(()=>{
//         fs.readFile("test.txt","utf-8").then(data=>{
//             console.log(`Conteúdo do arquivo lido: ${data}`)
//         }).catch((err)=>{
//             console.log(`Erro na leitura do arquivo. Erro: ${err}`)
//         })
//     }).catch((err)=>{
//         console.log(`Erro na criação de mais uma linha no arquivo. Erro: ${err}`)
//     })
// }).catch((err)=>{
//     console.log(`Erro na criação do arquivo. Erro: ${err}`)
// })


//Utlizando callback para criação e leitura de arquivos
// import fs from 'fs';
// fs.writeFile("test.txt","Teste criacao de arquivo pelo node", function(err){
//     if(err){
//         console.log(`Erro na criação do arquivo. Erro: ${err}`)
//     }else{
//         fs.appendFile("test.txt", "\n'Adicionando outro pequeno texto' ", function(err){
//             if(err){
//                 console.log(`Erro na criação do arquivo. Erro: ${err}`)
//             }else{
//                 console.log("Arquivo criado com sucesso")
//                 fs.readFile("test.txt","utf-8",function(err,data){
//                     if(err){
//                         console.log(`Erro na criação do arquivo. Erro: ${err}`)
//                     }else{
//                         console.log(`Conteúdo do arquivo lido: ${data}`)
//                     }
//                 })
//             }
//         })
//     }
// })

