import React from 'react';
import book1 from '../../img/book-1.png'
import book2 from '../../img/book-2.png'
import book3 from '../../img/book-3.png'
import book4 from '../../img/book-4.png'
import book5 from '../../img/book-5.png'
import book6 from '../../img/book-7.jpg'

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

                                    <div className="books--block__book">
                                        <img src={book1} alt="img"/>
                                        <h2>THE SUBTLE ART OF  NOT GIVING A F*CK</h2>
                                        <p>by Mark Manson</p>
                                    </div>
                                    <div className="books--block__book">

                                    <div className="book">
                                        <img src={book1} alt="img"/>
                                        <h2>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h2>
                                        <p>by Mark Manson</p>
                                    </div>
                                    <div className="book">
                                        <img src={book2} alt="img"/>
                                        <h2>8 RULES OF LOVE</h2>
                                        <p>by Jay Shetty</p>
                                    </div>
                                    <div className="books--block__book">
                                        <img src={book3} alt="img"/>
                                        <h2>THE CREATIVE ACT</h2>
                                        <p>by Rick Rubin with Neil Strauss</p>
                                    </div>
                                    <div className="books--block__book">
                                        <img src={book4} alt="img"/>
                                        <h2> THE BOY, THE MOLE, THE FOX AND THE <br/> HORSE</h2>
                                        <p>by Charlie Mackesy</p>
                                    </div>
                                    <div className="books--block__book">
                                    <div className="book">
                                        <img src={book3} alt="img"/>
                                        <h2>THE CREATIVE ACT</h2>
                                        <p>by Rick Rubin with Neil <br/> Strauss</p>
                                    </div>
                                    <div className="book">
                                        <img src={book4} alt="img"/>
                                        <h2> THE BOY, THE MOLE, <br/> THE FOX AND THE <br/> HORSE</h2>
                                        <p>by Charlie Mackesy</p>
                                    </div>
                                    <div className="book">
                                        <img src={book5} alt="img"/>
                                        <h2>HARRY POTTER</h2>
                                        <p>by J.K. Rowling</p>
                                    </div>

                                    <div className="books--block__book">

                                    <div className="book">

                                        <img src={book6} alt="img"/>
                                        <h2>IT ENDS WITH US</h2>
                                        <p>by Colleen Hoover</p>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
