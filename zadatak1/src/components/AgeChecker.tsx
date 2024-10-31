import { FC } from 'react';

interface AgeCheckerProps {
  age: number;
}

const AgeChecker: FC<AgeCheckerProps> = ({ age }) => {
  return (
    <div>
      {age < 18 ? <p>Osoba je mlađa od 18 godina.</p> : <p>Osoba je starija od 18 godina.</p>}
    </div>
  );
};

export default AgeChecker;
