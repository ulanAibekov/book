import React from 'react';
import book1 from '../../img/book-1.png'

const Books = () => {
    return (
        <div id='books'>
            <div className="container">
                <div className="books">
                    <div className="books--title">
                        <h1>Books</h1>
                        <h3>View all</h3>
                    </div>
                    <div className="books--block">
                        <div className="book">
                            <img src={book1} alt="img"/>
                            <h2>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h2>
                            <p>by Mark Manson</p>
                        </div>
                        <div className="book">
                            <img src={book1} alt="img"/>
                            <h2>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h2>
                            <p>by Mark Manson</p>
                        </div>
                        <div className="book">
                            <img src={book1} alt="img"/>
                            <h2>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h2>
                            <p>by Mark Manson</p>
                        </div>
                        <div className="book">
                            <img src={book1} alt="img"/>
                            <h2>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h2>
                            <p>by Mark Manson</p>
                        </div>
                        <div className="book">
                            <img src={book1} alt="img"/>
                            <h2>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h2>
                            <p>by Mark Manson</p>
                        </div>
                        <div className="book">
                            <img src={book1} alt="img"/>
                            <h2>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h2>
                            <p>by Mark Manson</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;