import React, { useState } from 'react';

function CounterComponent() {
  // Inicijaliziramo stanje `count` na 0
  const [count, setCount] = useState(0);

  // Funkcije za promjenu stanja brojača
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <p>Trenutna vrijednost: {count}</p>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
    </div>
  );
}

export default CounterComponent;
