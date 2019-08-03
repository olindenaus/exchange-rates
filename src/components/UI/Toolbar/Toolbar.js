import React from 'react';
import './Toolbar.css';
import Media from 'react-media';

import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
const toolbar = () => {
    return (
        <div className="Toolbar">
            <Media query="(max-width: 520px)">
                {matches =>
                    matches ? <Logo height={45} />
                        : <Logo height={60} />
                }
            </Media>
            <Navigation />
        </div>
    )
};
export default toolbar;