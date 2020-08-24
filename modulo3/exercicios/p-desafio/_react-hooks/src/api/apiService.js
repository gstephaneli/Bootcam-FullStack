import axios from 'axios'
const API_URL = 'http://localhost:3001/grade/'

const GRADE_VALIDATION = [
    {
        id:1,
        gradeType:'Exercícios',
        minValue:0,
        maxValue:10
    },
    {
        id:2,
        gradeType:'Trabalho Prático',
        minValue:0,
        maxValue:40
    },
    {
        id:3,
        gradeType:'Desafio',
        minValue:0,
        maxValue:50
    }
]

async function getAllGrades() {
    const res  = await axios.get(API_URL)

    const grades = res.data.grades.map((grade)=>{
        const {subject, student, type} = grade
        return{
            ...grade,
            studentLowerCase: student.toLowerCase(),
            subjectLowerCase: subject.toLowerCase(),
            typeLowerCase: type.toLowerCase(),
            isDeleted:false
        }

    })

    let allStudents = new Set();
    grades.forEach(grade => {
        allStudents.add(grade.student)
    });

    allStudents = Array.from(allStudents)

    let allSubjects = new Set();
    grades.forEach(grade => {
        allSubjects.add(grade.subject)
    });

    allSubjects = Array.from(allSubjects)

    let allGradesTypes = new Set();
    grades.forEach(grade => {
        allGradesTypes.add(grade.type)
    });

    allGradesTypes = Array.from(allGradesTypes)

    const allCombinations = []
    allStudents.forEach(student =>{
        allSubjects.forEach(subject =>{
            allGradesTypes.forEach(type =>{
                allCombinations.push({
                    student,
                    subject,
                    type
                })
            })
        })
    })

    let nextId = 0
    grades.forEach((grade)=>{
        if(grade.id > nextId){
            nextId = grade.id
        }
    })

    allCombinations.forEach(({student, subject, type}) => {
        const hasItem = grades.find(grade =>{
            return grade.subject === subject && grade.student === student && grade.type === type
        });

        if(!hasItem){
            grades.push({
                id: nextId++,
                student,
                studentLowerCase: student.toLowerCase(),
                subject,
                subjectLowerCase: subject.toLowerCase(),
                type,
                typeLowerCase: type.toLowerCase(),
                value:0,
                isDeleted:true
            })
        }
    })

    
    grades.sort((a,b) => a.typeLowerCase.localeCompare(b.typeLowerCase))
    grades.sort((a,b) => a.subjectLowerCase.localeCompare(b.subjectLowerCase))
    grades.sort((a,b) => a.studentLowerCase.localeCompare(b.studentLowerCase))


    return grades

}

async function insertGrade(grade){
    const response = await axios.post(API_URL, grade)
    return response.data.id
}

async function updateGrade(grade){
    const response = await axios.put(API_URL, grade)
    return response.data
}

async function deleteGrade(grade){
    const response = await axios.delete(`${API_URL}/${grade.id}`)
    return response.data
}


async function getValidationFromGradeType(gradeType){
    const gradeValidation =  GRADE_VALIDATION.find(
        item => item.gradeType === gradeType
    )

    const {maxValue, minValue} = gradeValidation
    return {
        minValue,
        maxValue
    }
}

export {getAllGrades , getValidationFromGradeType, insertGrade, updateGrade, deleteGrade}