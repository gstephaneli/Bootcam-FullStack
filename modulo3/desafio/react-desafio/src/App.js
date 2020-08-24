import React, { useState, useEffect } from 'react';

import InputValue from './components/InputValue/InputValue';
import PartBox from './components/PartBox/PartBox';
import formatNumber from './utils/format'

export default function App() {

  const [montanteValue, setMontanteValue] = useState(0)
  const [jurosTaxa, setJurosTaxa] = useState(0)
  const [countPart, setCountPart] = useState(0)
  const [arrayOfPart, setArrayOfPart] = useState([])



  useEffect(handleChangePartView, [montanteValue, jurosTaxa, countPart])

  function handleChangePartView(){
    let arrayParts = []
    let lastPart;
    let part;
    let valueGeneratePart;

    if(montanteValue && jurosTaxa && countPart){
      for (let index = 1; index <= countPart; index++) {
        if( arrayParts.length <= 0){
          // valueGeneratePart = calcValueOfPart(montanteValue, (jurosTaxa / 100))
          valueGeneratePart = parseFloat(calcValueOfPart(montanteValue, (jurosTaxa / 100)).toFixed(2))
          const lastValue = parseFloat((montanteValue + valueGeneratePart).toFixed(2))
          part = {
            numberPart:index,
            lastValue,
            valueOfPart:valueGeneratePart,
            porcValue:((valueGeneratePart * 100) / montanteValue).toFixed(2),
          }
          arrayParts.push(part)
        }else{
          lastPart = arrayParts[arrayParts.length -1]
          // valueGeneratePart = calcValueOfPart(lastPart.lastValue,  (jurosTaxa / 100))
          valueGeneratePart = parseFloat(calcValueOfPart(lastPart.lastValue,  (jurosTaxa / 100)).toFixed(2))
          // let valueOfPart = parseFloat(lastPart.valueOfPart) + valueGeneratePart
          let valueOfPart = (parseFloat(parseFloat(lastPart.valueOfPart) + valueGeneratePart).toFixed(2))
          part = {
            numberPart:index,
            lastValue:parseFloat((lastPart.lastValue + valueGeneratePart).toFixed(2)),
            valueOfPart,
            porcValue:((valueOfPart * 100) / montanteValue).toFixed(2),
          }

          arrayParts.push(part)
        }
      }
    }
    setArrayOfPart(arrayParts)
  }

  const calcValueOfPart = (value, porcentage) => {
    const valuePart = ((value) * porcentage)
    return parseFloat(valuePart.toFixed(2))

  }

  const handleChangeMontante = (valueInput) => {
    setMontanteValue(parseFloat(valueInput)) 
    // handleChangePartView()   
  }

  const handleChangeTaxa = (valueInput) => {
    setJurosTaxa(parseFloat(valueInput))  
    // handleChangePartView()   
  
  }

  const handleChangeCountPart = (valueInput) => {
    setCountPart(valueInput) 
    // handleChangePartView()   
       
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
