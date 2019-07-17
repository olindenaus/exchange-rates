import React from 'react';
import DatePicker from 'react-date-picker';
import Button from 'react-bootstrap/Button';
import Input from '../UI/Input/Input';
import './DownloadPanel.css';


const downloadPanel = (props) => {

    const options = ['EUR', 'PLN'];

    return (
        <div className="Panel">
            <div className="Dates">
                <div className="Dateblock">
                    From:
                    <DatePicker
                        className={"DatePicker"}
                        value={props.fromDateStart}
                        onChange={props.fromDateChanged}
                    />
                </div>
                <div className="Dateblock">
                    To:
                <DatePicker
                        className={"DatePicker"}
                        value={props.toDateStart}
                        onChange={props.toDateChanged}
                    />
                </div>
            </div>
            <div className="Inputs">
                <Input
                    label="Value of:"
                    elementType="select"
                    changed={null}
                    options={options}
                    value={null}>
                </Input>
                <Input
                    label="In respect to:"
                    elementType="select"
                    options={options}
                    changed={null}
                    value={null}>
                </Input>
            </div>
            <Button
                size="lg"
                onClick={props.buttonClicked}
            >Fetch!</Button>
        </div>
    )
};
export default downloadPanel;