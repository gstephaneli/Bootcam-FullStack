import express from 'express'
import {studentModel} from '../models/studentModel.js'

const app = express();

app.post('/createStudent' , async (req, res) => {
    try {
        const student = new studentModel(req.body);
        await student.save();
        res.status(201).send(student)
    } catch (error) {
        res.status(400).send(`Erro in request: ${error}`)
    }
})

app.get('/getStudents' , async (req, res) => {
    try {
        const students = await studentModel.find({})
        res.status(201).send(students)
    } catch (error) {
        res.status(400).send(`Erro in request: ${error}`)
    }
})

app.put('/updateStudent/:id' , async (req, res) => {
    try {
        const id = req.params.id;
        const newStudent = await studentModel.findByIdAndUpdate({_id: id}, req.body, {new: true})
        res.status(201).send(newStudent)
    } catch (error) {
        res.status(400).send(`Erro in request: ${error}`)
    }
})

app.delete('/deleteStudent/:id' , async (req, res) => {
    try {
        const id = req.params.id;
        const isDeleted = await studentModel.findByIdAndDelete({_id: id})

        if(!isDeleted){
            res.status(400).send(`Document is not deleted`)
        }

        res.status(201).send(`Documet with id: ${id} deleted`)
    } catch (error) {
        res.status(500).send(`Erro in request: ${error}`)
    }
})



export {app as studentRouter}