import React from 'react';
import './AnimationOverlay.scss';
import { Switch } from 'react-router-dom';
import MainPageText from '../MainPageText/MainPageText';
// import SignUpForm from '../../SignUpForm/SignUpForm';
// import SignInForm from '../../forms/SignInForm/SignInForm';
import NoPathMatchPage from '../../NoPathMatchPage/NoPathMatchPage';
import LoginModal from '../../modals/LoginModal/LoginModal';

export default function AnimationOverlay() {
    return (
        <div className="animation-overlay">
            <Switch>
                <MainPageText path="/" exact />
                <LoginModal />
                {/* <SignUpForm path="/sign-up" />
                <SignInForm path="/sign-in" /> */}
                <NoPathMatchPage path="*" />
            </Switch>
        </div>
    )
}
