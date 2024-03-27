import React, { useState } from 'react'

const ReactCounter = () => {
    const [schet, setSchet]=useState(0)
    const plus=()=>{
        setSchet(schet+1)
    }
  return (
    <div>
        <h1>{schet}</h1>
        <button onClick={plus}>+</button>
        <button onClick={()=>setSchet(schet-1)}>-</button>
    </div>
  )
}

export default ReactCounter