import React from 'react';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Author.css";


const author = (props) => {
    return (
        <div className="Author">
            <div className="Credentials">
                <h3>Name</h3>
                <h3>Surname</h3>
            </div>
            <div className="AuthorInfo">
                <FontAwesomeIcon className="AuthorImage" icon={faIdBadge} />
                <ul className="AuthorData">
                    <li>Age: {props.age}</li>
                    <li>Lorem ipsum: accusamus numquam.</li>
                    <li>Hobbys: {props.hobbys}</li>
                    <li>Technologies: {props.tech}</li>
                </ul>
            </div>
        </div>
    );
}

export default author;
