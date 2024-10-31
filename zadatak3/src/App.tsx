import './App.css'
import LoginStatus from './components/LoginStatus'

function App() {

  return (
    <>
      <h2>CodeCamp / Zadatak 3:</h2>
      <h3>Komponenta koja prima isLoggedIn i prikazuje poruku o tome je li korisnik prijavljen:
      </h3>

      <LoginStatus isLoggedIn={true} />
      <br/>
    </>
  )
}

export default App
