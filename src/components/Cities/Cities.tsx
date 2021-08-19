import { FC } from 'react';
import './Cities.css';
import City from '../City/City';
import { cities } from '../../types/types';

interface CitiesProps {
  cities: cities[];
}

const Cities: FC<CitiesProps> = ({ cities }) => {
  return (
    <ul className="content__cities">
      {cities.map((c, i) => {
        return (
          <City city={c.value} key={i} />
        )
      })}
    </ul>
  )
}

export default Cities;