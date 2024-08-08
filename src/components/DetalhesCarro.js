import React from 'react'

const DetalhesCarro = ({marca, KM, cor}) => {
  return (
    <div>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {KM}</li>
            <li>cor: {cor}</li>
        </ul>
    </div>
  )
}

export default DetalhesCarro