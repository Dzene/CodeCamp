//Komponenta koja prima isLoggedIn i prikazuje poruku o tome je li korisnik prijavljen:


import { FC } from 'react';

interface LoginStatusProps {
  isLoggedIn: boolean;
}

const LoginStatus: FC<LoginStatusProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <p>Korisnik je prijavljen.</p> : <p>Korisnik nije prijavljen.</p>}
    </div>
  );
};

export default LoginStatus;
