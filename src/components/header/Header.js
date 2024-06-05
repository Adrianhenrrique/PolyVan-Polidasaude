import React, { useState } from 'react';
import style from './Header.module.css';
import logo from '../../assets/imgs/logoPoli.png';
import iconChat from '../../assets/imgs/chatIcon.svg';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={style.cabecalho}>
            <img className={style.cabecalho__logo} src={logo} alt="logo da instituição Poli Da Saúde" />
            <nav className={style.cabecalho__navegacao}>
                <ul className={style.cabecalho__navegacao__items}>
                    <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Inicio</a></li>
                    <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Sobre</a></li>
                    <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Serviços</a></li>
                    <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Contato</a></li>
                </ul>
                <div className={style.cabecalho__navegacao__mobile}>
                    <div onClick={toggleMenu} className={style.hamburgerMenu}>
                        <div className={style.bar}></div>
                        <div className={style.bar}></div>
                        <div className={style.bar}></div>
                    </div>
                    <ul className={`${style.navLinks} ${menuOpen ? style.navLinksOpen : ''}`}>
                        <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Inicio</a></li>
                        <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Sobre</a></li>
                        <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Serviços</a></li>
                        <li className={style.cabecalho__navegacao__items__item}><a href="#" className={style.cabecalho__navegacao__items__item__link}>Contato</a></li>
                    </ul>
                </div>
            </nav>
            <a href="#" className={style.cabecalho__chat}><img src={iconChat} alt="icone de chat" />Fale conosco agora</a>
        </div>
    );
}

export default Header;
