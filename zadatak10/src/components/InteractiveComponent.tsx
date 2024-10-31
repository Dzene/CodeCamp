import { useState, useEffect, useRef } from 'react';

const InteractiveComponent = () => {
  // 1. Prikaži poruku u konzoli samo prilikom prvog renderiranja komponente
  useEffect(() => {
    console.log("Komponenta je prvi put renderirana");
  }, []);

  // 2. Definiramo stanje i postavljamo početnu vrijednost
  const [state, setState] = useState("Initial State");

  // 3. Praćenje promjena stanja i ažuriranje naslova dokumenta na temelju tog stanja
  useEffect(() => {
    console.log("Stanje se promijenilo:", state);
    document.title = `Stanje: ${state}`;  // Postavljanje naslova dokumenta
  }, [state]);

  // 4. Definira referencu za tajmer, izbjegavajući ponovno renderiranje
  const timerRef = useRef(0);

  // 5. Postavljanje tajmera koji se ažurira svake sekunde, bez izazivanja ponovnog renderiranja
  useEffect(() => {
    const timer = setInterval(() => {
      timerRef.current += 1;  // Ažuriramo vrijednost referencom, ne izazivamo renderiranje
      console.log("Vrijeme:", timerRef.current);
    }, 1000);
    return () => clearInterval(timer);  // Brisanje tajmera prilikom demontiranja komponente
  }, []);

  // 6. Definiramo referencu za input polje i postavljamo je kao <HTMLInputElement | null> za TypeScript
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 7. Funkcija za postavljanje fokusa na input polje kad se klikne na dugme
  const handleButtonClick = () => {
    if (inputRef.current) {  // Provjera da li referenca postoji
      inputRef.current.focus();  // Postavlja fokus na input polje
    }
  };

  return (
    <div>
      <h1>Interactive Component</h1>
      <p>Stanje: {state}</p>
      <button onClick={() => setState("Novo Stanje")}>Promijeni Stanje</button>
      <input ref={inputRef} type="text" placeholder="Unesite tekst ovdje" />
      <button onClick={handleButtonClick}>Fokusiraj input</button>
    </div>
  );
};

export default InteractiveComponent;
