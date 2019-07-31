import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Form } from 'react-bootstrap';

import './History.css';

import axios from '../../config/Axios';
import Plot from '../../components/Plots/Plot/Plot';
import DownloadPanel from '../../components/DownloadPanel/DownloadPanel';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rates: [],
            data: [],
            query: ``,
            date: { from: '', to: '' },
            fromDateStart: new Date('2017-01-01'),
            toDateStart: new Date('2018-01-01'),
            smaVisibility: false,
            bbVisiblity: false
        }
    }

    prepareData = () => {
        let data = { ...this.state.rates };
        let plotData = [];
        for (var date in data) {
            var obj = data[date];
            const formatedData = { name: date, value: obj[this.props.lowerCurrency] };
            plotData.push(formatedData);
        }
        let sorted = this.sortData(plotData);
        sorted = this.addSma(sorted);
        sorted = this.addBoulinger(sorted);
        this.setState({ data: sorted });
    }

    sortData = (data) => {
        return data.sort(this.compare);
    }

    compare = (a, b) => {
        const dateA = a.name.toUpperCase();
        const dateB = b.name.toUpperCase();

        let comparison = 0;
        if (dateA > dateB) {
            comparison = 1;
        } else if (dateA < dateB) {
            comparison = -1;
        }
        return comparison;
    }

    addSma = (sorted) => {
        let data = sorted;
        let dataWithSma = [];
        for (var i in data) {
            let obj = data[i];
            let smaValue = this.getSmaValue(i, data);
            const withSma = {
                ...obj,
                sma: smaValue,
            }
            dataWithSma.push(withSma);
        }
        return dataWithSma;
    }

    getSmaValue = (index, data) => {
        const smaSamples = 20;
        let sum = 0;
        let endIndex = parseInt(index) + parseInt(smaSamples);
        if (endIndex < data.length) {
            for (let i = 0; i < smaSamples; i++) {
                let newIndex = parseInt(index) + parseInt(i);
                sum += data[newIndex]['value'];
            }
        } else {
            let tillEnd = data.length - index;
            let goBack = smaSamples - tillEnd;
            let startAt = index - goBack;
            for (let i = startAt; i < data.length; i++) {
                sum += data[i].value;
            }
        }
        return Math.round((sum / smaSamples) * 10000) / 10000;
    }

    addBoulinger = (sorted) => {
        let k = 2;
        let dataWithBoulinger = [];
        for (var i in sorted) {
            let obj = sorted[i];
            let boulinger = this.getBoulingerValue(i, sorted);
            const withBoulinger = {
                ...obj,
                topBouli: Math.round((obj.sma + k * boulinger) * 1000) / 1000,
                botBouli: Math.round((obj.sma - k * boulinger) * 1000) / 1000,
            }
            dataWithBoulinger.push(withBoulinger);
        }
        return dataWithBoulinger;
    }

    getBoulingerValue = (index, data) => {
        const smaSamples = 20;
        let dev = 0;
        let endIndex = parseInt(index) + parseInt(smaSamples);
        let sma = data[index].sma;
        if (endIndex < data.length) {
            for (let i = 0; i < smaSamples; i++) {
                let j = parseInt(index) + parseInt(i);
                dev += Math.pow(data[j]['value'] - data[j]['sma'], 2);
            }
            dev = Math.sqrt(1 / (smaSamples - 1) * dev);
        } else {
            let tillEnd = data.length - index;
            let goBack = smaSamples - tillEnd;
            let startAt = index - goBack;
            for (let i = startAt; i < data.length; i++) {
                dev += Math.pow(data[i]['value'] - data[i]['sma'], 2);
            }
            dev = Math.sqrt(1 / (smaSamples - 1) * dev);
        }
        return Math.round((dev) * 10000) / 10000
        // return {top: sma+k*dev, bottom: sma-k*dev};
    }

    getData = (query) => {
        if (this.state.query !== query) {
            axios.get(query)
                .then(result => {
                    this.setState({ rates: result.data.rates, query: query });
                    this.prepareData();
                    console.log(result);
                });
        }
    }

    buttonClicked = () => {
        let startDate = this.state.fromDateStart;
        let endDate = this.state.toDateStart;
        startDate = this.getDate(startDate);
        endDate = this.getDate(endDate);
        let query = `/history?start_at=${startDate}&end_at=${endDate}&base=${this.props.upperCurrency}&symbols=${this.props.lowerCurrency}`;
        console.log(query);
        
        this.getData(query);
    }

    getDate = (date) => {
        let year = date.getFullYear();
        let day = this.getDayFormated(date);
        let month = this.getMonthFormated(date);
        return year + '-' + month + '-' + day;
    }

    getDayFormated = (date) => {
        let day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        return day;
    }

    getMonthFormated = (date) => {
        let month = date.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        return month;
    }

    handleFromDateChange = (date) => {
        this.setState({ fromDateStart: date })
    }

    handleToDateChange = (date) => {
        this.setState({ toDateStart: date })
    }

    setSMADisplay = (isSMADisplayed) => {
        this.setState({ smaVisibility: isSMADisplayed });
    }

    setBBDisplay = (isBBDisplayed) => {
        this.setState({ bbVisiblity: isBBDisplayed });
    }


    render() {
        return (
            <div className={"History"}>
                <h1>History</h1>
                <DownloadPanel
                    toDateStart={this.state.toDateStart}
                    fromDateStart={this.state.fromDateStart}
                    toDateChanged={this.handleToDateChange}
                    fromDateChanged={this.handleFromDateChange}
                    buttonClicked={this.buttonClicked}
                    currencyOptions={this.props.opt}
                />
                <div className="Plot">
                    <Plot data={this.state.data} SMAEnable={this.state.smaVisibility}
                          BBEnable={this.state.bbVisiblity} height={350} width={700} />
                    <div className="PlotOptions">
                       
                            <Form.Check label="SMA" onChange={e => this.setSMADisplay(e.target.checked)} />
                            <Form.Check label="Bollinger bands" onChange={e => this.setBBDisplay(e.target.checked)} />
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        opt: state.options,
        upperCurrency: state.leftBlockCurrency,
        lowerCurrency: state.rightBlockCurrency
    }
}

export default connect(mapStateToProps)(History);