import React from 'react';
import './index.scss'
import data from "../Data/Data"
import {HiOutlineAdjustmentsHorizontal} from "react-icons/hi2";

const AllBooks = () => {
    // const book = document.querySelector(".book")
    return (
        <div id="allbooks">
            <div className="container">
                <div className="allbooks">
                    <h1>All Books</h1>
                    <p>Here you can find all the books you need</p>
                    <div className="allbooks--btn">
                        <div className="allbooks--btn__text">
                            <h2>Filters</h2>
                            <a href="#">clear filters</a>
                        </div>
                        <select className="SortBy">
                            <option className='option' value="popular"> Sort by Popular</option>
                            <option value="a-z" > Sort by  A-Z</option>
                            <option value="z-a"> Sort by  Z-A</option>
                        </select>
                        <div className="allbooks--btn__icon">
                            <HiOutlineAdjustmentsHorizontal/>
                        </div>
                    </div>

                    <div className="allbooks--block">
                        <div className="allbooks--block__check">
                            <h3>Genres</h3>
                            <h5> <input type="checkbox" style={{marginRight:'15px', width:'18px', height:'18px',}}/> AutographedBooks</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Sci-Fi</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> For kids</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> For teenagers</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Finance</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Detective</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Romantic</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Psychology</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Self-Improvement</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Educational</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Literature</h5>
                            <h5> <input type="checkbox" style={{marginRight:'15px',width:'18px', height:'18px',}}/> Religion</h5>
                        </div>

                        <div className="allbooks--block__books">
                            {/*<div className="allbooks--block__books--book">*/}
                            {
                                data.map((el,idx)=>(
                                    <div className="allbooks--block__books--book">
                                        <img src={el.img} alt="img"/>
                                        <h4>{el.name}</h4>
                                        <h5>{el.avtor}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;