import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import NavigationLink from './NavigationLink/NavigationLink';
import './Navigation.css';

const navigation = (props) => {

    return (
            <div className="Navigation">
                <NavLink activeClassName='ActiveNav' exact to='/'>
                    <NavigationLink>Home</NavigationLink>
                </NavLink>
                <NavLink activeClassName='ActiveNav' exact to='/about'>
                    <NavigationLink>About</NavigationLink>
                </NavLink>
                <NavLink activeClassName='ActiveNav' exact to='/history'>
                    <NavigationLink>History</NavigationLink>
                </NavLink>
            </div>
    )
};
export default navigation;