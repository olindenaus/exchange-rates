import React from 'react';

import './NavigationLink.css';

const navigationLink = (props) => {

    return (
        <div className="NavigationLink">
            {props.children}
        </div>
    )
};
export default navigationLink;