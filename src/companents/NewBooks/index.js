import React from 'react';
import './index.scss'
import img from '../../img/image 6.png'
import img1 from '../../img/image 5.png'
import img2 from '../../img/image 7.png'

const NewBooks = () => {
    return (
        <div id='newBooks'>
            <div className="container">
                <div className="newBooks">
                    <h1>New Books</h1>
                    <div className="newBooks--block">
                        <div className="newBooks--block__book1">
                                <img src={img} alt="img"/>
                                <h2>The Climate Book: <br/> The Facts and the <br/> Solutions</h2>
                                <p>by Greta Thunberg</p>
                            </div>
                            <div className="newBooks--block__book2">
                                <img src={img1} alt="img"/>
                                <h2>The Climate Book: <br/> The Facts and the <br/> Solutions</h2>
                                <p>by Greta Thunberg</p>
                            </div>

                            <div className="newBooks--block__book1">
                                <img src={img2} alt="img"/>
                                <h2>Rest Is Resistance: <br/> A Manifesto</h2>
                                <p>by Tricia Hersey</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBooks;