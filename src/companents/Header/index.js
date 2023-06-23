import React from 'react';
import {BiSearch, BiShoppingBag} from "react-icons/bi";
import './index.scss'

const Header = () => {
    return (<div id='header'>
        <div className="container">
            <div className="header">
                <div className="header--logo">
                    <a className='a' style={{
                    color: "#818EEA"
                }}>Bookshop</a>
                    <div className='header--logo__nav'>
                        <a href="">Categories</a> <a href="">Recent</a>
                        <a href="">Books</a> <a href="">About Us</a>
                    </div>
                </div>
                <div className='header--icons'>
                    <a className="a-search"><BiSearch/></a> <a className='a-shop'><BiShoppingBag/></a>
                    <a href="#">0</a></div>
            </div>
        </div>
    </div>);
};
export default Header;