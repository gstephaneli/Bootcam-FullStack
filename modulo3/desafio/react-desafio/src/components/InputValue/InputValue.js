import React from 'react'

export default function InputValue({value, type, description, idValue, stepValue, handleChangeValue}) {

    const handleInputValue = (event) =>{
        handleChangeValue(event.target.value)
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input value={value} onChange={handleInputValue} id={idValue} step={stepValue} type={type} className="validate"/>
                <label className="active" htmlFor={idValue}><strong >{description}</strong></label>
            </div>
        </div>
    )
}
