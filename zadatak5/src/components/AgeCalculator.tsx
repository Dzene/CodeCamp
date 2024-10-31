//Komponenta koja prima ime, prezime i godinu rođenja, te ispisuje izračunate godine:

import { FC } from 'react';

interface AgeCalculatorProps {
  firstName: string;
  lastName: string;
  birthYear: number;
}

const AgeCalculator: FC<AgeCalculatorProps> = ({ firstName, lastName, birthYear }) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <p>{firstName} {lastName} ima {age} godina.</p>
  );
};

export default AgeCalculator;
