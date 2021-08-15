import React from 'react';
import Logo from '../../Logo/Logo';
import Menu from '../Menu/Menu';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <Logo className="header__logo" logoSize={60} />
            <Menu className="header__menu" />
        </header>
    )
}