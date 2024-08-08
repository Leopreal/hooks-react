import React from 'react'

const Material = ({id, objeto, cor, TemEstoque}) => {
  return (
    <div>
        <ul>
            <li>ID: {id}</li>
            <li>obejto: {objeto}</li>
            <li>cor: {cor}</li>
            <li>{TemEstoque && <p>Tem estoque</p>}</li>
        </ul>
    </div>
  )
}

export default Material