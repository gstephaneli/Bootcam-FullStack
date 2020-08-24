import React from 'react'

export default function Action({type, id, onActionClick}) {

    const handleIconClick = () =>{
        onActionClick(id, type)
    }

    return (
        <span onClick={handleIconClick} className="material-icons" style={{cursor:'pointer'}} > {type} </span>
    )
}
