import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
                {name: 'Page B', uv: 500, pv: 3000, amt: 800},
                {name: 'Page C', uv: 500, pv: 4000, amt: 2400}];

                /**
                 * uv - wartość Y
                 * pv - ??
                 * amt - ??
                 */

const renderLineChart = (props) => {
    return (
        <LineChart width={1200} height={600} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke="blue" dot={false}/>
            <Line type="monotone" dataKey="sma" stroke="red" dot={false}/>
            <Line type="monotone" dataKey="topBouli" stroke="yellow" dot={false}/>
            <Line type="monotone" dataKey="botBouli" stroke="yellow" dot={false}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis type = "number" domain={[4.0, 4.2]}/>
            <Tooltip />
        </LineChart>
    )
};

export default renderLineChart;