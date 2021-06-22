import React from 'react';
import './Logo.scss'
import logo from '../../assets/logo512.png'

export default function Logo({ logoSize, text = true, fontSize = 48 }) {
    const style = {
        "fontSize": `${fontSize}px`
    };

    return (
        <div className="logo">
            <img className="logo__image" height={logoSize} width={logoSize} src={logo} alt="Procyon logo."/>
            { text? <span className="logo__name--negative" style={style}> Procyon </span> : null}
        </div>
    )
}
