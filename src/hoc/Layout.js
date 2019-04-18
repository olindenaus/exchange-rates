import React from 'react';

import Toolbar from '../components/UI/Toolbar/Toolbar';
import Footer from '../components/UI/Footer/Footer';
import './Layout.css';
const layout = (props) => {

    return (
        <div className="Layout">
            <Toolbar />
            <div className="Content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
};
export default layout;