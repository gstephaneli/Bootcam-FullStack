import React, { useState, useEffect } from 'react';

import InputValue from './components/InputValue/InputValue';
import PartBox from './components/PartBox/PartBox';
import formatNumber from './utils/format'

export default function App() {

  const [montanteValue, setMontanteValue] = useState('')
  const [jurosTaxa, setJurosTaxa] = useState('')
  const [countPart, setCountPart] = useState('')
  const [arrayOfPart, setArrayOfPart] = useState([])



  // useEffect(() => {
  //   setMontanteValue( montanteValue || undefined)
  //   setJurosTaxa( jurosTaxa || undefined)
  //   setCountPart( countPart || undefined)

  //   if(montanteValue && jurosTaxa && countPart){
  //     handleChangePartView()
  //   }

  // }, [montanteValue, jurosTaxa, countPart])

  const handleChangePartView = () => {
    let arrayParts = []
    let lastPart;
    let part;

    if(montanteValue && jurosTaxa && countPart){
      for (let index = 1; index <= countPart; index++) {
        if( arrayParts.length <= 0){
          part = {
            numberPart:index,
            lastValue:parseFloat(montanteValue),
            valueOfPart:calcValueOfPart(parseFloat(montanteValue), parseFloat(jurosTaxa)),
            porcValue:parseFloat((jurosTaxa).toFixed(2)),
          }
          arrayParts.push(part)
        }else{
          lastPart = arrayParts[arrayParts.length -1]
          const lastValuePart = parseFloat((lastPart.lastValue + lastPart.valueOfPart).toFixed(2))

          part = {
            numberPart:index,
            lastValue:lastValuePart,
            valueOfPart:calcValueOfPart(parseFloat(lastValuePart),  parseFloat(jurosTaxa)),
            porcValue:parseFloat((jurosTaxa).toFixed(2)),
          }

          arrayParts.push(part)
        }
      }
    }
    setArrayOfPart(arrayParts)
  }

  const calcValueOfPart = (value, porcentage) => {
    const valuePart = (value * porcentage).toFixed(2)
    return Math.round(parseFloat(valuePart) * 100) /100 

  }

  const handleChangeMontante = (valueInput) => {
    setMontanteValue(valueInput) 
    handleChangePartView()   
  }

  const handleChangeTaxa = (valueInput) => {
    setJurosTaxa(parseFloat(valueInput))  
    handleChangePartView()   
  
  }

  const handleChangeCountPart = (valueInput) => {
    setCountPart(valueInput) 
    handleChangePartView()   
       
  }

    return (
      <div className="container" >
        <h2 style={{textAlign:'center',marginBottom:'50px'}}>Juros Compostos</h2>
        <div style={styles.flexRow}>
          <InputValue idValue={'montanteID'} value={montanteValue} stepValue={1} type={'number'} description={'Montante inicial'} handleChangeValue={handleChangeMontante} />
          <InputValue idValue={'jurosID'} value={jurosTaxa} stepValue={0.1} type={'number'} description={'Taxa de juros'} handleChangeValue={handleChangeTaxa} />
          <InputValue idValue={'countPartID'} value={countPart} stepValue={1} type={'number'} description={'Número de parcelas'} handleChangeValue={handleChangeCountPart} />
        </div>
        <div style={styles.flexRowPart}>
          {arrayOfPart.map(({numberPart,lastValue, valueOfPart, porcValue})=>{
            return <PartBox key ={numberPart +1 } numberPart={numberPart} valuePart={lastValue} porcPart={porcValue} valueOfPorc={valueOfPart}/>
          })}

        </div>
      </div>
    );
}

const styles = {
  flexRow:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20px'
  },

  flexRowPart:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
  }
}
