import React from 'react';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Author.css";


const author = (props) => {
    return (
        <div className="Author">
            <div className="Credentials">
                <h1>Name</h1>
                <h1>Surname</h1>
            </div>
            <div className="AuthorInfo">
                <FontAwesomeIcon className="AuthorImage" icon={faIdBadge} />
                <div className="AuthorData">
                    <p>Age: {props.age}</p>
                    <p>Lorem ipsum: accusamus numquam.</p>
                    <p>Hobbys: {props.hobbys}</p>
                    <p>Technologies: {props.tech}</p>
                </div>
            </div>
        </div>
    );
}

export default author;
