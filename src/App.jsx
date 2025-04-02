import Botao from "./componentes/Botao"
import Caixa from "./componentes/Caixa"
import Etiqueta from "./componentes/Etiqueta"

const App = ()=> {

  return (
    <>
    <h3>Aula Retomada Componentes</h3>
    <Etiqueta texto="Texto enviado pelo App" />
    <Etiqueta texto="Corinthians meu amor" />
    <Etiqueta />
    <Caixa />
    <Botao />
    </>
  )
}

export default App