import { FC } from 'react';
import './Menu.css'
import { NavLink } from 'react-router-dom';
import MainLinkLogo from '../../images/main-link-logo.svg';
import SearchLinkLogo from '../../images/search-link-logo.svg';
import TablesLinkLogo from '../../images/tables-link-logo.svg';
import CalendarLinkLogo from '../../images/calendar-link-logo.svg';
import MapsLinkLogo from '../../images/maps-link-logo.svg';
import WidgetsLinkLogo from '../../images/widgets-link-logo.svg';
import SettingsLinkLogo from '../../images/settings-link-logo.svg';
import SettingsProfileLinkImage from '../../images/settings-profile-link-logo.svg';
import FinanceLinkImage from '../../images/finance-link-logo.svg';
import ExitLinkImage from '../../images/exit-link-logo.svg';
import { useState } from 'react';

const Menu: FC = () => {

  const [stateSettings, setStateSettings] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);

  const classSettings = `menu__settings-block ${stateSettings ? 'menu__settings-block_active' : ''}`;
  const classMenuMobyle = `menu menu_type_mobyle ${stateMenu ? 'menu_type_mobyle_active' : ''}`;

  const handleToggleSettings = () => {
    setStateSettings((state) => { return !state });
  }

  const handleToggleMenuBtn = () => {
    setStateMenu(state => !state)
  }

  return (
    <>
      <div className="menu-btn menu-btn_active" onClick={handleToggleMenuBtn}></div>
      <nav className={classMenuMobyle}>
        <h2 className="menu__title">Меню</h2>
        <NavLink className="menu__link" activeClassName="menu__link_active" exact to="/">
          <img src={MainLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Главная</p>
        </NavLink>
        <NavLink className="menu__link" activeClassName="menu__link_active" exact to="/address">
          <img src={SearchLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Поиск адрессов</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={TablesLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Таблицы</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={CalendarLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Календарь</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={MapsLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Карты</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={WidgetsLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Виджеты</p>
        </NavLink>
        <div className="menu__link menu__settings" onClick={handleToggleSettings}>
          <img src={SettingsLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Настройки</p>
        </div>
        <div className={classSettings}>
          <NavLink className="menu__link menu__link_type_nested" exact to="#">
            <img src={SettingsProfileLinkImage} alt="логотип страницы главной" className="menu__logo" />
            <p className="menu__link-text">Настройки профиля</p>
          </NavLink>
          <NavLink className="menu__link menu__link_type_nested" exact to="#">
            <img src={FinanceLinkImage} alt="логотип страницы главной" className="menu__logo" />
            <p className="menu__link-text">Управление финансами</p>
          </NavLink>
        </div>
        <NavLink className="menu__link" exact to="#">
          <img src={ExitLinkImage} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Выход</p>
        </NavLink>
      </nav >

      <nav className="menu menu_type_desktop">
        <h2 className="menu__title">Меню</h2>
        <NavLink className="menu__link" activeClassName="menu__link_active" exact to="/">
          <img src={MainLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Главная</p>
        </NavLink>
        <NavLink className="menu__link" activeClassName="menu__link_active" exact to="/address">
          <img src={SearchLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Поиск адрессов</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={TablesLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Таблицы</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={CalendarLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Календарь</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={MapsLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Карты</p>
        </NavLink>
        <NavLink className="menu__link" exact to="#">
          <img src={WidgetsLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Виджеты</p>
        </NavLink>
        <div className="menu__link menu__settings" onClick={handleToggleSettings}>
          <img src={SettingsLinkLogo} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Настройки</p>
        </div>
        <div className={classSettings}>
          <NavLink className="menu__link menu__link_type_nested" exact to="#">
            <img src={SettingsProfileLinkImage} alt="логотип страницы главной" className="menu__logo" />
            <p className="menu__link-text">Настройки профиля</p>
          </NavLink>
          <NavLink className="menu__link menu__link_type_nested" exact to="#">
            <img src={FinanceLinkImage} alt="логотип страницы главной" className="menu__logo" />
            <p className="menu__link-text">Управление финансами</p>
          </NavLink>
        </div>
        <NavLink className="menu__link" exact to="#">
          <img src={ExitLinkImage} alt="логотип страницы главной" className="menu__logo" />
          <p className="menu__link-text">Выход</p>
        </NavLink>
      </nav >
    </>
  )
}

export default Menu;