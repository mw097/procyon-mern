import React, { useState, useEffect } from 'react';
import './Login.scss';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login({ menuOpened }) {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(false);
        return () => {
            setIsLogged(false);
        }
    }, [isLogged]);

    return (
        <div className="login">
            { isLogged ? <button className="login__button"><FaUserAlt /></button> :
                <button className="login__button">
                    <Link className={`login__link${menuOpened ? '--negative' : ''}`} to="/sign-in"> Sign in | </Link>
                    <Link className={`login__link${menuOpened ? '--negative' : ''}`} to="/sign-up"> Sign up </Link>
                </button>
            }
        </div>
    )
}