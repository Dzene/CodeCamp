//Komponenta koja prima ime i prezime kao props i ispisuje ih:


import { FC } from 'react';

interface FullNameDisplayProps {
  firstName: string;
  lastName: string;
}

const FullNameDisplay: FC<FullNameDisplayProps> = ({ firstName, lastName }) => {
  return (
    <div>
      <p>{firstName} {lastName}</p>
    </div>
  );
};

export default FullNameDisplay;
