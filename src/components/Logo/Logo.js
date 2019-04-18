import React from 'react';

import logoImage from '../../assets/img/logo.svg';
import './Logo.css';

const myLogo = (props) => {

    return (
        <div className="Logo" style = {{height: props.height}}>
            <img src={logoImage} alt="Our logo" />
        </div>
    )
};
export default myLogo;