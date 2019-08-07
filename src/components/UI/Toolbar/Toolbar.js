import React, { useState } from 'react';
import './Toolbar.css';
import Media from 'react-media';

import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import Burger from '../Burger/Burger';

const toolbar = () => {
    const [show, changeShow] = useState(false);

    return (
        <div className="Toolbar">
            <Logo height={60} />
            {show ? <Navigation /> : null}
            <Burger clicked={() => changeShow(!show)}/>
        </div>
    )
};
export default toolbar;