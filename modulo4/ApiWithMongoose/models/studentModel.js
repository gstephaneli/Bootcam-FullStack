import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true
    },
    age: {
        type: Number, 
        require: true,
        validate(value) {
            if(value < 18)
            throw new Error(`Menor de idade`)
        }
    },
    city: {
        type: String, 
        require: true,
        
    }
})

const studentModel = mongoose.model('student', studentSchema, 'student')

export {studentModel}