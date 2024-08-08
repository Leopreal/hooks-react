import logo from './logo.svg';
import './App.css';
import TestandoState from './components/TestandoState';
import RenderizacaoLista from './components/RenderizacaoLista';
import CondicionalRender from './components/CondicionalRender';
import MostrarNome from './components/MostrarNome';
import DetalhesCarro from './components/DetalhesCarro';
import Material from './components/Material';


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


  return (
    <div className="App">
      <h1>Hooks</h1>
      <TestandoState />
      <RenderizacaoLista />
      <CondicionalRender />
      <MostrarNome nome="Leo" />
      <DetalhesCarro marca={"VW"} KM={10000} cor={"vermelho"} />
      {material.map((item) => (
        <Material id={item.id} objeto={item.objeto} cor={item.cor} TemEstoque={item.TemEstoque} />
      ))}
    </div>
  );
}

export default App;
