import { FC } from 'react';
import './Header.css';
import pageLogo from '../../images/page-logo.svg';
import avatar from '../../images/user-avatar.svg';

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__block">
        <img src={pageLogo} alt="CRM logo" className="header__logo header__logo_type_main" />
        <h1 className="header__tittle">Wrench CRM</h1>
      </div>
      <div className="header__block">
        <img src={avatar} alt="Аватар" className="header__logo header__logo_type_avatar" />
        <p className="header__tittle">Имя Фамилия</p>
      </div>
    </div>
  );
}

export default Header;