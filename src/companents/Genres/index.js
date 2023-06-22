import React from 'react';
import card1 from '../../img/card1.png'
import card2 from '../../img/card 2.png'
import card3 from '../../img/card 3.png'
import card4 from '../../img/card 4.png'
import card6 from '../../img/image 8.png'

const Genres = () => {

    return (
        <div id='genres'>
            <div className="container">
                <div className="genres">
                    <div className="genres--title">
                        <h1>Genres</h1>
                        <a href="#">View all</a>
                    </div>
                    <div className="genres--book">
                        <div className="genres--book__block">
                            <img src={card1} alt="img"/>
                            <p>Ski-Fi</p>
                        </div>
                        <div className="genres--book__block">
                            <img src={card6} alt="img"/>
                            <p>For Kids</p>
                        </div>
                        <div className="genres--book__block">
                            <img src={card2} alt="img"/>
                            <p>Psychology</p>
                        </div>
                        <div className="genres--book__block">
                            <img src={card3} alt="img"/>
                            <p>Romantic</p>
                        </div>
                        <div className="genres--book__block">
                            <img src={card4} alt="img"/>
                            <p>Detective</p>
                        </div>
                        <div className="genres--book__block">
                            <img src={card6} alt="img"/>
                            <p>Finance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Genres;