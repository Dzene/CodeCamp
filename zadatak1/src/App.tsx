import './App.css'
import AgeChecker from './components/AgeChecker'

function App() {

  return (
    <>
      <h2>CodeCamp / Zadatak 1:</h2>
      <h3>Komponenta koja prima godine i ispisuje poruku ovisno o tome je li osoba mlađa ili starija od 18 godina:
      </h3>

      <AgeChecker age={20} />
      <br/>
    </>
  )
}

export default App
