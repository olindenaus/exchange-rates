import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import NavigationLink from './NavigationLink/NavigationLink';
import './Navigation.css';

const navigation = (props) => {

    return (
            <div className="Navigation">
                <NavLink to='/'>
                    <NavigationLink>Home</NavigationLink>
                </NavLink>
                <NavLink to='/about'>
                    <NavigationLink>About</NavigationLink>
                </NavLink>
            </div>
    )
};
export default navigation;