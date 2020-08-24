import React, { useState, useEffect } from 'react';

import * as api from './api/apiService.js' 
import Spinner from './components/Spinner/Spinner.js';
import GradesControl from './components/Grades/GradesControl.js';

export default function App() {
  const [allGrades, setAllGrades] = useState([])
  const [selectedGrade, setSelectedGrade] = useState({})
  const [isModalOpen, setIsModalOpen] = useState([])

  useEffect(() => {
    const getGrades = async() => {
      const grades =  await api.getAllGrades()
      setTimeout(() => {
        setAllGrades(grades)
      }, 2000);
      
    };
    getGrades()
  }, [])


  const handleOnDelete = async () =>{
    console.log("handleOnDelete")
  }

  const handleOnPersist = async ()=>{
    console.log("handleOnPersist")
  }
    return (
      
      <div>
        <h1 className="center">Controle de Notas</h1>
        {allGrades.length <= 0 && <Spinner />}
        {allGrades.length > 0 && <GradesControl grades={allGrades} onDelete={handleOnDelete} onPersist={handleOnPersist}/>}

      </div>
    )
  
}
