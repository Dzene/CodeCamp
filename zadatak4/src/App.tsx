import './App.css'
import NameDisplay from './components/NameDisplay'

function App() {

  return (
    <>
      <h2>CodeCamp / Zadatak 4:</h2>
      <h3>Komponenta koja prima ime i prezime i ispisuje ih u paragrafu:
      </h3>

      <NameDisplay firstName="Dženeta" lastName="Indžić" />
      <br/>
    </>
  )
}

export default App
