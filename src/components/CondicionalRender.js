import React, { useState } from 'react'

const CondicionalRender = () => {
    const [x] = useState(false)


    const [nome] = useState("Leo")

  return (
    <div>
        <h1>renderiza?</h1>
        {x && <p>x é true</p>}
        {!x && <p>x é falso</p>}
        <h1>if ternario</h1>
        {nome === "Leo" ? (
            <div>
                <p>{nome}</p>
            </div>
        ) : (
            <div>
                <p>nome nao encontrado  </p>
            </div>
        )}
    </div>

  )
}

export default CondicionalRender