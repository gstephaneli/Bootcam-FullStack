import express from 'express'
import mongoose from 'mongoose'

import {studentRouter} from './routes/studentRouter.js'

const conectionInBD = async() =>{
    try {
         await mongoose.connect('mongodb+srv://adminbd:mongo123@cluster0.r196i.mongodb.net/grades?retryWrites=true&w=majority', {
             useNewUrlParser: true,
             useUnifiedTopology: true,
             useFindAndModify: false,
             useCreateIndex: true
             })  
     console.log(`Conection suceffult`) 
    } catch (error) {
     console.log(`Not conection, Erro: ${error}`) 
    }
     
 }
 
 conectionInBD()
 
const app = express()

app.use(express.json())
app.use(studentRouter)

app.listen(3333, ()=> console.log(`Server ON`))