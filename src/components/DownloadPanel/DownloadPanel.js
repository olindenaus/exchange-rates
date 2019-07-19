import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/Actions/actions';
import DatePicker from 'react-date-picker';
import Button from 'react-bootstrap/Button';
import Input from '../UI/Input/Input';
import './DownloadPanel.css';


const downloadPanel = (props) => {

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
                    changed={(e) => props.onLeftCurrencyChanged(e.target.value)}
                    options={props.currencyOptions}
                    value={props.upperCurrency}>
                </Input>
                <Input
                    label="In respect to:"
                    elementType="select"
                    options={props.currencyOptions}
                    changed={(e) => props.onRightCurrencyChanged(e.target.value)}
                    value={props.lowerCurrency}>
                </Input>
            </div>
            <Button
                size="lg"
                onClick={props.buttonClicked}
            >Fetch!</Button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        upperCurrency: state.leftBlockCurrency,
        lowerCurrency: state.rightBlockCurrency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLeftCurrencyChanged: (optionValue) => dispatch(actions.setLeftBlockCurrency(optionValue)),
        onRightCurrencyChanged: (optionValue) => dispatch(actions.setRightBlockCurrency(optionValue)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(downloadPanel);