import mongoose from 'mongoose';

// Local BD
// mongoose.connect("mongodb://localhost/DataBASE")



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

const studentSchema = mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true},
    city: {type: String, require: true}
})

//Difened schema motel of collection
mongoose.model('student', studentSchema, 'student')

const student = mongoose.model('student')

new student({
    name:"Guilherme New",
    age: 21,
    city: "Hortolandia"
}).save().then(()=> console.log('Sucess in insert document')).catch(err => `Error: ${err}`)

