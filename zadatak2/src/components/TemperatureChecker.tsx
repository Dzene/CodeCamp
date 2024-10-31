//Komponenta koja prima temperaturu i prikazuje poruku "Toplo" ili "Hladno":

import { FC } from 'react';

interface TemperatureCheckerProps {
  temperature: number;
}

const TemperatureChecker: FC<TemperatureCheckerProps> = ({ temperature }) => {
  return (
    <div>
      {temperature >= 20 ? <p>Toplo</p> : <p>Hladno</p>}
    </div>
  );
};

export default TemperatureChecker;
