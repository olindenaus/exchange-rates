import React from 'react';
import "./About.css";
import Authors from '../../components/Authors/Authors'

const About = () => {
    return (
        <div className="About">
            <div className="Description">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est odio error facilis adipisci sint, possimus dolores aspernatur, non quo rerum officia sit quam, magnam exercitationem veniam eveniet vel architecto!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas quam possimus quae voluptates voluptatibus, sed et pariatur similique libero rerum provident esse vitae commodi dolore ut deserunt, cupiditate facilis.
                </p>
            </div>

            <div className="AuthorsWrapper">
                <Authors />
            </div>
        </div>
    )
};
export default About;