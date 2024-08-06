import React, { useState } from 'react'



const TestandoState = () => {

    const [numero, setNumero] = useState(10)

  return (
    <div>
        <div>
            <h1>Testando hook State</h1>
            <p>o numero é {numero}</p>
            <button onClick={() => setNumero(15)}>Clique aqui</button>
        </div>
    </div>
  )
}

export default TestandoState