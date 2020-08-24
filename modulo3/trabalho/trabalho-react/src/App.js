import React, { Component } from 'react';
import InputText from './components/Input/InputText';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      all_sal:0,
      base_INSS:'',
      desc_INSS:'',
      base_IRPF:'',
      desc_IRPF:'',
      liquid_sal:'',
      porcINSS:0,
      liquidSal:0,
      porcIRPF:0
    }
  }
  

  handleSalaryDesc = (event)=> {
    const inputValue = event.target.value

    let aux1, aux2, aux3, aux4, descInss, porc

    if( inputValue <= 1045.00){
      aux1 = 1045.00 * 0.075
      descInss = Number(aux1).toFixed(2)
      porc = Number((descInss * 100)/inputValue).toFixed(2)
      this.setState({
        base_INSS:`R$ ${inputValue}`,
        base_IRPF:`R$ ${inputValue - descInss}`,
        desc_INSS:`R$ ${aux1} (${porc}%)`,
        all_sal:inputValue,
        porcINSS: porc,
        baseIRPF: inputValue - descInss,
        liquid_sal: inputValue - descInss,
        porcLiquid:0
      })
    }else if(inputValue <= 2089.60){
      aux1 = 1045.00 * 0.075
      aux2 = (1045.00 - inputValue) * 0.09

      descInss = Number((aux1 - aux2)).toFixed(2)
      porc = Number((descInss * 100)/inputValue).toFixed(2)

      this.setState({
        base_INSS:`R$ ${inputValue}`,
        base_IRPF:`R$ ${inputValue - descInss}`,
        desc_INSS:`R$ ${descInss} (${porc}%)`,
        all_sal:inputValue,
        porcINSS: porc,
        baseIRPF: inputValue - descInss,
        liquid_sal: inputValue - descInss
      })
    }else if(inputValue <= 3134.40){
      aux1 = 1045.00 * 0.075
      aux2 = (1045.00 - 2089.60) * 0.09
      aux3 = (2089.60 - inputValue) * 0.12

      descInss =  Number((aux1 -aux2 - aux3)).toFixed(2)
      porc = Number((descInss * 100)/inputValue).toFixed(2)

      this.setState({
        base_INSS:`R$ ${inputValue}`,
        base_IRPF:`R$ ${inputValue - descInss}`,
        desc_INSS:`R$ ${descInss} (${porc}%)`,
        all_sal:inputValue,
        porcINSS: porc,
        baseIRPF: inputValue - descInss,
        liquid_sal: inputValue - descInss
      })
    } else if (inputValue <= 6101.06){

      aux1 = 1045.00 * 0.075
      aux2 = (1045.00 - 2089.60) * 0.09
      aux3 = (2089.60 - 3134.40) * 0.12
      aux4 = (3134.40 - inputValue) * 0.14
      
      descInss = Number((aux1 -aux2 - aux3 - aux4)).toFixed(2)
      porc = Number((descInss * 100)/inputValue).toFixed(2)

      this.setState({
        base_INSS:`R$ ${inputValue}`,
        base_IRPF:`R$ ${inputValue - descInss}`,
        desc_INSS:`R$ ${descInss} (${porc}%) `,
        all_sal:inputValue,
        porcINSS: porc,
        baseIRPF: inputValue - descInss,
        liquid_sal: inputValue - descInss
      })
    }else{
      aux1 = 1045.00 * 0.075
      aux2 = (1045.00 - 2089.60) * 0.09
      aux3 = (2089.60 - 3134.40) * 0.12
      aux4 = (3134.40 - 6101.06) * 0.14
      
      descInss = Number((aux1 -aux2 - aux3 - aux4)).toFixed(2)
      porc = Number((descInss * 100)/inputValue).toFixed(2)

      this.setState({
        base_INSS:`R$ ${inputValue}`,
        base_IRPF:`R$ ${inputValue - descInss}`,
        desc_INSS:`R$ ${descInss} (${porc}%) `,
        porcINSS: porc,
        all_sal:inputValue,
        baseIRPF: inputValue - descInss,
        liquid_sal: inputValue - descInss

      })
    }

    this.handleDescIRPF()
  }

  handleDescIRPF = () =>{
    let {all_sal, baseIRPF} = this.state
    let porcIRPF, porcLiquid, descIRPF, liquidSal
    console.log('baseIRPF', baseIRPF)
     if(baseIRPF <= 1903.98){
      porcIRPF = 0
      liquidSal = baseIRPF
      porcLiquid = Number((liquidSal * 100)/all_sal).toFixed(2)

      this.setState({
        desc_IRPF: `R$ 0 (${porcIRPF}%)`,
        liquid_sal: `R$ ${baseIRPF} (${porcLiquid}%)`,
        porcIRPF: 0,
        porcLiquid
      })

     }else if(baseIRPF >= 1903.99 && baseIRPF <= 2826.65){
      console.log('2826', 2826)

      descIRPF = Number((baseIRPF * 0.075) - 142.80).toFixed(2)
      porcIRPF = Number((descIRPF * 100)/all_sal).toFixed(2)
      liquidSal = baseIRPF - descIRPF
      porcLiquid = Number((liquidSal * 100)/all_sal).toFixed(2)

      this.setState({
        desc_IRPF: `R$ ${descIRPF} (${porcIRPF}%)`,
        liquid_sal: `R$ ${liquidSal} (${porcLiquid}%)`,
        porcIRPF,
        porcLiquid
      })

    }else if(baseIRPF <= 3751.05){
      console.log('3751.05.68', 3751.68)

      descIRPF = Number((baseIRPF * 0.15) - 354.80).toFixed(2)
      porcIRPF = Number((descIRPF * 100)/all_sal).toFixed(2)
      liquidSal = baseIRPF - descIRPF
      porcLiquid = Number((liquidSal * 100)/all_sal).toFixed(2)

      this.setState({
        desc_IRPF: `R$ ${descIRPF} (${porcIRPF}%)`,
        liquid_sal: `R$ ${liquidSal} (${porcLiquid}%)`,
        porcIRPF,
        porcLiquid
      })
    } else if (baseIRPF <= 4664.68){
      console.log('4664.68', 4664.68)
      descIRPF = Number((baseIRPF * 0.225) - 636.13).toFixed(2)
      porcIRPF = Number((descIRPF * 100)/all_sal).toFixed(2)
      liquidSal = baseIRPF - descIRPF
      porcLiquid = Number((liquidSal * 100)/all_sal).toFixed(2)

      this.setState({
        desc_IRPF: `R$ ${descIRPF} (${porcIRPF}%)`,
        liquid_sal: `R$ ${liquidSal} (${porcLiquid}%)`,
        porcIRPF,
        porcLiquid
      })
    }else{
      descIRPF = Number((baseIRPF * 0.275) - 869.36).toFixed(2)
      porcIRPF = Number((descIRPF * 100)/all_sal).toFixed(2)
      liquidSal = baseIRPF - descIRPF
      porcLiquid = Number((liquidSal * 100)/all_sal).toFixed(2)

      this.setState({
        desc_IRPF: `R$ ${descIRPF} (${porcIRPF}%)`,
        liquid_sal: `R$ ${liquidSal} (${porcLiquid}%)`,
        porcIRPF,
        porcLiquid
      })
    }
  }

  render() {
    let { base_INSS, desc_INSS, base_IRPF, desc_IRPF, liquid_sal, porcINSS, porcLiquid, porcIRPF} = this.state
    console.log('porcLiquid', porcLiquid)

    return (
      <div className="container col s12">
        <div className="input-field col s12">
          <input  onChange={this.handleSalaryDesc} id="all_sal" type="number" className="validate"/>
          <label className="active" htmlFor="all_sal">Salário bruto</label>
        </div>
        <div className="row col s12">
          <InputText valueInfo={base_INSS} text="Base INSS" id="base_INSS"/>
          <InputText valueInfo={desc_INSS} text="Desconto INSS" id="desc_INSS"/>
          <InputText valueInfo={base_IRPF} text="Base IRPF" id="base_IRPF"/>
          <InputText valueInfo={desc_IRPF} text="Desconto IRPF" id="desc_IRPF"/>
          <InputText valueInfo={liquid_sal} text="Salário Liquido" id="liquid_sal"/>
        </div>
        <ProgressBarSalary porcSalary={porcLiquid} porcINSS={porcINSS} porcIRPF={porcIRPF} />
      </div> 
    )
  }
}
