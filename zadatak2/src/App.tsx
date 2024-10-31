import './App.css'
import TemperatureChecker from './components/TemperatureChecker'

function App() {

  return (
    <>
      <h2>CodeCamp / Zadatak 2:</h2>
      <h3>Komponenta koja prima temperaturu i prikazuje poruku "Toplo" ili "Hladno":
      </h3>

      <TemperatureChecker temperature={25} />
      <br/>
    </>
  )
}

export default App
