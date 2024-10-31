//Komponenta koja sadrži niz imena i ispisuje svako ime u paragrafu:


import { FC } from 'react';

interface NameListProps {
  names: string[];
}

const NameList: FC<NameListProps> = ({ names }) => {
  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default NameList;
