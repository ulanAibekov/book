import React from 'react';
import './index.scss'
import img from '../../img/image 6.png'
import Slider from "react-slick";

const NewBooks = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id='newBooks'>
            <div className="container">
                <div className="newBooks">
                    <h1>New Books</h1>
                    <div className="newBooks--block">
                        <Slider {...settings}>
                            <div className="newBooks--block__book1">
                                <img src={img} alt="img"/>
                                <p>The Climate Book: <br/> The Facts and the <br/> Solutions</p>
                                <span>by Greta Thunberg</span>
                            </div>
                            <div className="newBooks--block__book1">
                                <img src={img} alt="img"/>
                                <p>The Climate Book: <br/> The Facts and the <br/> Solutions</p>
                                <span>by Greta Thunberg</span>
                            </div>

                            <div className="newBooks--block__book1">
                                <img src={img} alt="img"/>
                                <p>Rest Is Resistance: <br/> A Manifesto</p>
                                <span>by Tricia Hersey</span>
                            </div>

                            <div className="newBooks--block__book1">
                                <img src={img} alt="img"/>
                                <p>A New Name: <br/> Septology VI-VII</p>
                                <span>by Jon Fosse</span>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBooks;