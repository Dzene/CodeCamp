//Komponenta koja prima ime i prezime i ispisuje ih u paragrafu:


import { FC } from 'react';

interface NameDisplayProps {
  firstName: string;
  lastName: string;
}

const NameDisplay: FC<NameDisplayProps> = ({ firstName, lastName }) => {
  return (
    <p>{firstName} {lastName}</p>
  );
};

export default NameDisplay;
