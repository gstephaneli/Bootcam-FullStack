import React, { Component } from 'react'
import formatNumber from '../../utils/utils'
import css from './hearder.module.css'

export default class Header extends Component {

    handleInputChange = (event) => {
        this.props.onChangeFilter(event.target.value)
    }
    render() {
        const {totalPopulation, filter, countryCount} = this.props
        return (
            <div className={css.flexRow}>
                <input placeholder="Filtro" className={css.inputStyle} type="text" value={filter} onChange={this.handleInputChange}/>
                |<span>Paises: <strong>{countryCount}</strong> </span>  
                |<span>População Total: <strong>{formatNumber(totalPopulation)}</strong> </span>
            </div>
        )
    }
}
