import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import './Plot.css';

const renderLineChart = (props) => {
    
    return (
        <LineChart className={"LineChart"} width={props.width} height={props.height} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="blue" dot={false} />
            {props.SMAEnable ? <Line type="monotone" dataKey="sma" stroke="red" dot={false} /> : null}
            {props.BBEnable ? [ <Line type="monotone" dataKey="topBouli" stroke="green" dot={false} />,
                                <Line type="monotone" dataKey="botBouli" stroke="green" dot={false} />] : null}
            <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis type="number" mirror={true} domain={['auto', 'auto']} stroke="#fff"/>
            <Tooltip />
        </LineChart>
    )
};

export default renderLineChart;