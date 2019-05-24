import React from 'react';

import NavigationLink from './NavigationLink/NavigationLink';
import './Navigation.css';

const navigation = (props) => {

    return (
        <div className="Navigation">
            <NavigationLink>Home</NavigationLink>
            <NavigationLink>About</NavigationLink>
        </div>
    )
};
export default navigation;