import React from 'react';
import Header from './components/mainPage/Header/Header';
import './App.scss';
import Background3DModel from './components/mainPage/Background3DModel/Background3DModel';
import AnimationOverlay from './components/mainPage/AnimationOverlay/AnimationOverlay';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Background3DModel />
                <Header />
                <AnimationOverlay />
            </Router>
        </div>
    );
};

export default App;