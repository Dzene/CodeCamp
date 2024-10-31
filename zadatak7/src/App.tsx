import './App.css'
import NameList from './components/NameList'

function App() {
  const names = ['Dženeta', 'Alma', 'Sara', 'Dijana'];

  return (
    <>
      <h2>CodeCamp / Zadatak 7:</h2>
      <h3>Komponenta koja sadrži niz imena i ispisuje svako ime u paragrafu:
      </h3>

      <NameList names={names} />
      <br/>
    </>
  )
}

export default App
