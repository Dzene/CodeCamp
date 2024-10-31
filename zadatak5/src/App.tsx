import './App.css'
import AgeCalculator from './components/AgeCalculator'

function App() {

  return (
    <>
      <h2>CodeCamp / Zadatak 5:</h2>
      <h3>Komponenta koja prima ime, prezime i godinu rođenja, te ispisuje izračunate godine:
      </h3>

      <AgeCalculator firstName="Alma" lastName="Muratović" birthYear={1998} />
      <br/>
    </>
  )
}

export default App
