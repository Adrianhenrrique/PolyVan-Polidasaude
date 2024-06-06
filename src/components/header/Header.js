import React, { useState, useEffect  } from 'react';
import style from './Header.module.css';
import logo from '../../assets/imgs/logoPoli.png';
import iconChat from '../../assets/imgs/chatIcon.svg';

function Header() {
    const [activeSection, setActiveSection] = useState(localStorage.getItem('activeSection') || '');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
        localStorage.setItem('activeSection', section);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'contact'];
            const scrollPos = window.scrollY + window.innerHeight / 2;
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= scrollPos && rect.bottom >= scrollPos) {
                        setActiveSection(section);
                        localStorage.setItem('activeSection', section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={style.cabecalho}>
            <img className={style.cabecalho__logo} src={logo} alt="logo da instituição Poli Da Saúde" />
            <nav className={style.cabecalho__navegacao}>
            <ul className={style.cabecalho__navegacao__items}>
                <li className={style.cabecalho__navegacao__items__item}>
                    <a href="#home" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'home' ? style.active : ''}`} onClick={() => handleSectionClick('home')}>Inicio</a>
                </li>
                <li className={style.cabecalho__navegacao__items__item}>
                    <a href="#about" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'about' ? style.active : ''}`} onClick={() => handleSectionClick('about')}>Sobre</a>
                </li>
                <li className={style.cabecalho__navegacao__items__item}>
                    <a href="#services" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'services' ? style.active : ''}`} onClick={() => handleSectionClick('services')}>Serviços</a>
                </li>
                <li className={style.cabecalho__navegacao__items__item}>
                    <a href="#contact" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'contact' ? style.active : ''}`} onClick={() => handleSectionClick('contact')}>Contato</a>
                </li>
            </ul>
            <div className={style.cabecalho__navegacao__mobile}>
                <div onClick={toggleMenu} className={style.hamburgerMenu}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
                <ul className={`${style.navLinks} ${menuOpen ? style.navLinksOpen : ''}`}>
                    <li className={style.cabecalho__navegacao__items__item}>
                        <a href="#home" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'home' ? style.active : ''}`} onClick={() => handleSectionClick('home')}>Inicio</a>
                    </li>
                    <li className={style.cabecalho__navegacao__items__item}>
                        <a href="#about" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'about' ? style.active : ''}`} onClick={() => handleSectionClick('about')}>Sobre</a>
                    </li>
                    <li className={style.cabecalho__navegacao__items__item}>
                        <a href="#services" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'services' ? style.active : ''}`} onClick={() => handleSectionClick('services')}>Serviços</a>
                    </li>
                    <li className={style.cabecalho__navegacao__items__item}>
                        <a href="#contact" className={`${style.cabecalho__navegacao__items__item__link} ${activeSection === 'contact' ? style.active : ''}`} onClick={() => handleSectionClick('contact')}>Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
            <a href="#" className={style.cabecalho__chat}><img src={iconChat} alt="icone de chat" />Fale conosco agora</a>
        </div>
    );
}

export default Header;
