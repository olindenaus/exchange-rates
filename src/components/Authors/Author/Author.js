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
                <ul className="AuthorData">
                    <li>Age: {props.age}</li>
                    <li>Lorem ipsum: accusamus numquam.</li>
                    <li>Hobbys: {props.hobbys}</li>
                    <li>Technologies: {props.tech}</li>
                    <li>OSTATNIO JADŁ: kaszankę z jagodami</li>
                </ul>
            </div>
        </div>
    );
}

export default author;
