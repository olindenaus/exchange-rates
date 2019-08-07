import React from 'react';

import './Burger.css';

const burgerMenu = (props) => {

    return (
        <div onClick={props.clicked} className={"BurgerMenu"}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};
export default burgerMenu;