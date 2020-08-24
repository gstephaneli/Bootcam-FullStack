import React, { Component } from 'react'

export default class ProgressBarSalary extends Component {
    render() {
        let {porcSalary, porcINSS, porcIRPF} = this.props

        porcINSS = `${porcINSS}%`
        porcIRPF = `${porcIRPF}%`
        porcSalary = `${porcSalary}%`
        return (
            <div style={{width: '100%', height: '50px', display:'flex'}}>
                <div id="INSS" style={{width: porcINSS, height: '50px', backgroundColor:'#e67e22'}}> </div>
                <div id="IRPF" style={{width: porcIRPF, height: '50px', backgroundColor:'#c0392b'}}> </div>
                <div id="SALARY" style={{width: porcSalary, height: '50px', backgroundColor:'#16a085'}}> </div>
            </div>
        )
    }
}
