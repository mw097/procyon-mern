import React from 'react';
import './SignInForm.scss';

export default function SignInForm() {
    return (
        <div className="sign-in-form">
            <h4 className="sign-in-form__title">Create account</h4>
            <form className="sign-in-form__form">
                <input
                    className="sign-in-form__input"
                    id="sign-in-email"
                    type="email"
                    placeholder="E-mail"
                />
                <br />
                <input
                    className="sign-in-form__input"
                    id="sign-in-password"
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input
                    className="sign-in-form__input-submit"
                    id="sign-in-submit"
                    type="submit"
                    value="Sign in"
                />
            </form>
        </div>
    )
}