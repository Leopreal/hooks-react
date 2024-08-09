import logo from './logo.svg';
import './App.css';
import TestandoState from './components/TestandoState';
import RenderizacaoLista from './components/RenderizacaoLista';
import CondicionalRender from './components/CondicionalRender';
import MostrarNome from './components/MostrarNome';
import DetalhesCarro from './components/DetalhesCarro';
import Material from './components/Material';
import Container from './components/Container';
import FuncaoComProps from './components/FuncaoComProps';
import { useState } from 'react';
import Mensagem from './components/Mensagem';
import MudarMensagem from './components/MudarMensagem';


function App() {
  const material = [
    {
      id: 1, objeto: "Caderno", cor: "vermelho", TemEstoque: true
    },
    {
      id: 2, objeto: "lapis", cor: "amarelo", TemEstoque: false
    },
    {
      id: 3, objeto: "estojo", cor: "vere", TemEstoque: true
    }
  ]

  function mostrarMensagem() {
    console.log("TESTEEEEE")
  }

  const [mensagem, setMensagem] = useState("")

  const handleMensagem = (msg) => {
    setMensagem(msg)
  }


  return (
    <div className="App">
      <h1>Hooks</h1>
      <TestandoState />
      <RenderizacaoLista />
      <CondicionalRender />
      <MostrarNome nome="Leo" />
      <DetalhesCarro 
      marca={"VW"} 
      KM={10000} 
      cor={"vermelho"} />
      {material.map((item) => (
        <Material key={item.id} objeto={item.objeto} cor={item.cor} TemEstoque={item.TemEstoqu} />
      ))}
      <Container>
        <p>um paragrafo</p>
      </Container>
      <FuncaoComProps minhaFuncao={mostrarMensagem} />
      <Mensagem msg={mensagem} />
      <MudarMensagem handleMensagem={handleMensagem} />
    </div>
  );
}

export default App;
