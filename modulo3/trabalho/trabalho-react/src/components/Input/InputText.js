import React, { Component } from 'react'

export default class InputText extends Component {

    render() {
        const {text, id, valueInfo} = this.props
        return (
            <div className="input-field col s3">
                <input disable={true.toString()} value={valueInfo} id={id} type="text" className="validate"/>
                <label className="active" htmlFor={id}>{text}</label>
            </div>
            
        )
    }
}
