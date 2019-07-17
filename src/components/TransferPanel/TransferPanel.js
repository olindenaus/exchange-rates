import React from 'react';
import { faArrowLeft, faArrowRight, faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import './TransferPanel.css';
import Button from '../UI/Button/Button';
import Media from 'react-media';

const transferPanel = (props) => {

    let computer = (firstIcon, secondIcon) => (
        <React.Fragment>
            <Button text="Calculate" icon={firstIcon} clicked={props.leftToRight} />
            <Button text="Calculate" icon={secondIcon} clicked={props.rightToLeft} />
        </React.Fragment>
    );

    return (
        <div className="TransferPanel">
            <Media query="(max-width: 520px)">
                {matches =>
                    matches ? computer(faArrowDown, faArrowUp)
                        : computer(faArrowRight, faArrowLeft) 
                }
            </Media>
        </div >
    )
};
export default transferPanel;