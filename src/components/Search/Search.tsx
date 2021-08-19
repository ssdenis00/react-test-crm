import React, { FC } from 'react';
import { useEffect, useState } from 'react';
import './Search.css';
import btnLogo from '../../images/search-btn-logo.svg';
import Cities from '../Cities/Cities';

interface cities {
  cities: [];
}

const Search: FC = () => {

  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [querySearch, setQuerySearch] = useState<string>('');

  useEffect(() => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "7c7024e45b0c67dfc9e080da14deac46b9f7ca0c";
    const query = querySearch;

    const options: RequestInit = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({ query })
    }

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        setCities(result.suggestions);
      })
      .catch(error => console.log("error", error));
  }, [querySearch]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuerySearch(inputValue);
  }

  return (
    <div className="content">
      <h2 className="content__tittle">Поиск адресов</h2>
      <p className="content__subtitle">Введите интересующий вас адрес</p>
      <form action="#" className="form-search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-search__input"
          placeholder="Введите интересующий вас адрес"
          minLength={3}
          value={inputValue || ''}
          onChange={handleChangeValue}
          required
        />
        <button className="form-search__btn">
          <img src={btnLogo} alt="логотип кнопки поиска" className="form-search__btn-logo" />
          Поиск
        </button>
      </form>

      <div className={`content__search-results ${cities.length !== 0 ? 'content__search-results_active' : ''}`}>
        <h3 className="content__title">Адреса</h3>
        <Cities cities={cities} />
      </div>
    </div>
  )
}

export default Search;