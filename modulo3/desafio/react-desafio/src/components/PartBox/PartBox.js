import React from 'react'
import css from './partBox.module.css'

export default function PartBox({numberPart, valuePart, porcPart, valueOfPorc}) {

    return (
        <div className={css.flexRow}>
            <p>{numberPart}</p>
            <div className={css.flexColumn} style={{paddingLeft:'15px'}}>
                <samp style={{color:'green'}}><strong>R$ {valuePart}</strong></samp>
                <samp style={{color:'green'}}><strong>{valueOfPorc > 0 ? '+' : '-'} R$ {valueOfPorc}</strong></samp>
                <samp style={{color:'blue'}}><strong>{porcPart}%</strong></samp>
            </div>
        </div>
    )
}

