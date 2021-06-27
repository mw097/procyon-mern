import React from 'react';
import './AnimationOverlay.scss';
import { Switch } from 'react-router-dom';
import MainPageText from '../MainPageText/MainPageText';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';

export default function AnimationOverlay() {
    return (
        <div className="animation-overlay">
            <Switch>
                <MainPageText path="/" exact />
                <SignUpForm path="/sign-up" />
                <SignInForm path="/sign-in" />
            </Switch>
        </div>
    )
}
