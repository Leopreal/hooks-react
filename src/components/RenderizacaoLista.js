import React from 'react'
import { useState } from 'react'

const RenderizacaoLista = () => {
    const [lista] = useState(["leo", "mateus", "josias"])

    const [usuarios, setUsuarios] = useState([
        {id: 1, nome: "leo", idade: 19},
        {id: 2, nome: "lucas", idade: 20},
        {id: 3, nome: "mateus", idade: 54}
    ])

    const deletarAleatorio = () => {
        const NumAleatorio = Math.floor(Math.random() * 4)

        setUsuarios((prevUsuarios) => {
            console.log(prevUsuarios)
            return prevUsuarios.filter((usuario) => NumAleatorio !== usuario.id)
        })
    }
  return (

    <div>
        {/* {lista.map((item) => (
            <li>{item}</li>
        ))} */}
        <ul>
            {usuarios.map((usuario) => (
                <li key={usuario.id}>
                    {usuario.nome} - {usuario.idade}
                </li>
            ))}
        </ul>
        <button onClick={deletarAleatorio}>CLICA</button>
    </div>
  )
}

export default RenderizacaoLista