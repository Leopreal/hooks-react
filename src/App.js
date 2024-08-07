import logo from './logo.svg';
import './App.css';
import TestandoState from './components/TestandoState';
import RenderizacaoLista from './components/RenderizacaoLista';
import CondicionalRender from './components/CondicionalRender';
import MostrarNome from './components/MostrarNome';


function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <TestandoState />
      <RenderizacaoLista />
      <CondicionalRender />
      <MostrarNome nome="Leo" />
    </div>
  );
}

export default App;
