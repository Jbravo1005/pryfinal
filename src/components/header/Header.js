import {NavLink} from 'react-router-dom';
import '../../styles/css/Header.css';
import { useNavigate } from 'react-router-dom';
// import { useRef, useEffect } from 'react';
// import logo from '../assets/img/logo.png';

const Header = () => {

  const documentReady = () => {


    const menuIconContainer = document.getElementById('menuIconContainer');
    const menuCloseIconContainer = document.getElementById('menuCloseIconContainer');
  
    const headerNavMenuList = document.querySelector('.header-nav__menu-list');
  
  
    const openMenu = () => {
      headerNavMenuList.classList.add('header-nav__menu-list--open');
    };
  
    const closeMenu = () => {
      headerNavMenuList.classList.remove('header-nav__menu-list--open');
    };
  
    menuIconContainer.addEventListener('click', openMenu);
    menuCloseIconContainer.addEventListener('click', closeMenu);
  
  };
  
  document.addEventListener('DOMContentLoaded', documentReady);

  // const headerNavThemeIconContainer = useRef();

  // const toggleTheme = () => {
  //   const body = document.querySelector('.body');

  //   body.classList.toggle('body--light');
  //   headerNavThemeIconContainer.current.classList.toggle('header-nav__theme-icon-container--active');

  //   if (body.classList.contains('body--light')) {
  //     localStorage.setItem('darkMode', 'false');
  //   } else {
  //     localStorage.setItem('darkMode', 'true');
  //   }
  // };

  // useEffect(() => {
  //   if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
  //     document.querySelector('.body').classList.remove('body--light');
  //     headerNavThemeIconContainer.current.classList.remove('header-nav__theme-icon-container--active');
  //   } else {
  //     document.querySelector('.body').classList.add('body--light');
  //     headerNavThemeIconContainer.current.classList.add('header-nav__theme-icon-container--active');
  //   }
  // }, []);

  return (
    <header className="header">
        <nav className="header-nav">
            <div className="header-nav__container">
                
                <h2> <a href="#hero" className="header-nav__logo">Jk Studio</a></h2>
    
                <button className="header-nav__menu-icon-container" id="menuIconContainer">
                    <i className="bi bi-list"></i>
                </button>
    
                <ul className="header-nav__menu-list">
                    <li className="header-nav__menu-item">
                        <a href="#hero" className="header-nav__menu-link">Inicio</a>
                    </li>
                    <li className="header-nav__menu-item">
                        <a href="#team" className="header-nav__menu-link">Nosotros</a>
                    </li>
                    <li className="header-nav__menu-item">
                        <a href="#gallery" className="header-nav__menu-link">Portafolio</a>
                    </li>
                    <li className="header-nav__menu-item">
                        <a href="./categorias/categorias.html" className="header-nav__menu-link" target="_blank">Categorias</a>
                    </li>
                    <li className="header-nav__menu-item">
                        <a href="./contacto/contacto.html" className="header-nav__menu-link header-nav__menu-link--active" target="_blank">Contacto</a>
                    </li>
                    <li className="header-nav__menu-item header-nav__menu-item--menu-close">
                        <button className="header-nav__menu-close-icon-container" id="menuCloseIconContainer">
                          <i className="bi bi-x-circle"></i>
                        </button>
                      </li>
                </ul>
            </div>
        </nav>
    </header>

  );
}

export default Header;