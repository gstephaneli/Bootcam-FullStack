import React, { useState, useEffect } from 'react';
import { getNewTimestamp } from './helpers/dataTimeHelpers'

export default function App() {

    const [clickArray, setClickArray] = useState([])

    useEffect(() => {document.title = clickArray.length.toString()})
    
    const handleClick = () => {
      const newClickArray = Object.assign([],clickArray);
      newClickArray.push(getNewTimestamp())
      setClickArray(newClickArray)
    }
    
    //sempre que rodar é atualizado o que estiver aqui (ngOnInit do angular?)

    return (
      <div>
        <h1>
          Using Hooks
        </h1>

        <h4>
        Component for rendering the timestamp when clicking
        </h4>

        <button onClick={handleClick}>Clique aqui </button>

        <ul>
          {clickArray.map( item => {
            return <li key={item}> {item} </li>
          })}
        </ul>
      </div>
  )
}
