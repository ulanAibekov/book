import React from 'react';
import about from "../../img/about-img.png";

const About = () => {
    return (
            <div id='about'>
                <div className="container">
                    <div className="about">
                        <h1>About Us</h1>
                        <div className="about--img">
                            <img src={about} alt="img"/>
                            <p>We believe that books have the power to change lives, and
                                we're dedicated to helping our customers find the perfect
                                book for them. Whether you're looking for an escape from
                                reality, an educational read, or a book to inspire you, we've
                                got you covered.
                                Thank you for choosing to shop with us. We look forward to</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default About;