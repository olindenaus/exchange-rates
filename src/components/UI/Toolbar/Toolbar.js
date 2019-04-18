import React from 'react';
import './Toolbar.css';

import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
const toolbar = () => {

    return (
        <div className="Toolbar">
        
            <Logo height={60}/>
            <Navigation />
        </div>
    )
};
export default toolbar;