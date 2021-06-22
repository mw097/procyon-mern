import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
import Background3DModel from './components/Background3DModel/Background3DModel';
import AnimationOverlay from './components/AnimationOverlay/AnimationOverlay';

const App = () => {
    return (
        <div className="app">
            <Background3DModel />
            <Header />
            <AnimationOverlay />
        </div>
    );
};

export default App;