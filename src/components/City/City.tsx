import { FC } from 'react';
import './City.css';

interface CityProps {
  city: string;
}

const City: FC<CityProps> = ({ city }) => {
  return (
    <li className="content__city-item">
      <p className="content__city-text">{city}</p>
    </li>
  )
}

export default City;