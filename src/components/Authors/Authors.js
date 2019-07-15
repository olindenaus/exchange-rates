import React from 'react';
import Author from './Author/Author';

import "./Authors.css";

const autors = (props) => {
    return (
        <div className="Authors">
            <Author age={23} hobbys='kajaki' tech='react'></Author>
            <Author age={24} hobbys='computer' tech='java'></Author>
        </div>
    )
}

export default autors;