import React from 'react';
import './SignUpForm.scss';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
    return (
        <div className="sign-up-form">
            <h4 className="sign-up-form__title">Create account</h4>
            <form className="sign-up-form__form">
                <input
                    className="sign-up-form__input"
                    id="sign-up-email"
                    type="email"
                    placeholder="E-mail"
                />
                <br />
                <input
                    className="sign-up-form__input"
                    id="sign-up-password"
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input
                    className="sign-up-form__input"
                    id="sign-up-re-password"
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input
                    className="sign-up-form__input-submit"
                    id="sign-up-submit"
                    type="submit"
                    value="Sign up"
                />
            </form>
            <Link to="/sign-in">Already have account? Click here to <span>Login</span></Link>
        </div>
    )
}