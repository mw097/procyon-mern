import React, { useState, useEffect } from 'react';
import './Login.scss';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login({ menuOpened }) {
    const [isLogged, setIsLogged] = useState(false);
    const [isChoosedRegistartion, setIsChoosedRegistartion] = useState(true);

    useEffect(() => {
        setIsLogged(false);
        setIsChoosedRegistartion(true);
        return () => {
            setIsLogged(false);
            setIsChoosedRegistartion(false);
        }
    }, [isLogged, isChoosedRegistartion]);

    return (
        <div className="login">
            { isLogged ? <button className="login__button"><FaUserAlt /></button> :
                <button className="login__button">
                    <Link className={`login__link${menuOpened ?  '--negative' : ''}`} to="/sign-up"> Login | Register </Link>
                </button>
            }
        </div>
    )
}
