import './App.css'
import FullNameDisplay from './components/FullNameDisplay'

function App() {

  return (
    <>
      <h2>CodeCamp / Zadatak 6:</h2>
      <h3>Komponenta koja prima ime i prezime kao props i ispisuje ih:
      </h3>

      <FullNameDisplay firstName="Dženeta" lastName="Indžić" />
      <br/>
    </>
  )
}

export default App
