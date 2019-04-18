import React from 'react';

import './TransferPanel.css';
import Button from '../UI/Button/Button';

const transferPanel = (props) => {

    return (
        <div className="TransferPanel">
        <Button text="Przelicz -->"/>
        <Button text="Przelicz <--"/>
        </div>
    )
};
export default transferPanel;