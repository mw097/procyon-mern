import React, { useState } from 'react';
import './Menu.scss';
import { FaBars } from 'react-icons/fa';

export default function Menu() {
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = (event) => {
        event.preventDefault();
        menuOpened? setMenuOpened(false) : setMenuOpened(true);
    }

    return (
        <div className="menu">
            <div className="container" onClick={toggleMenu}>
            <button className={`menu__button${menuOpened? '': '--negative'}`}> Menu </button>
            <FaBars className={`menu__icon${menuOpened? '': '--negative'}`} />
            </div>
            <nav className={`menu__nav menu__nav--${menuOpened? 'opened':'closed'}`}>
                <ul className="menu__list">
                    <li className="menu__list-element"><a className="menu__link" href="/">Home</a></li>
                    <li className="menu__list-element"><a className="menu__link" href="/about">About</a></li>
                    <li className="menu__list-element"><a className="menu__link" href="/faq">F&Q</a></li>
                    <li className="menu__list-element"><a className="menu__link" href="/articles">Articles</a></li>
                </ul>
            </nav>
        </div>
    )
}