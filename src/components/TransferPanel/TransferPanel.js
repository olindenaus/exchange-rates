import React from 'react';

import './TransferPanel.css';
import Button from '../UI/Button/Button';

const transferPanel = (props) => {

    return (
        <div className="TransferPanel">
        <Button text="Przelicz -->" clicked={props.leftToRight}/>
        <Button text="Przelicz <--"/>
        </div>
    )
};
export default transferPanel;