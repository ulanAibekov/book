import React from 'react';
import {BiSearch, BiShoppingBag} from "react-icons/bi";
import './index.scss'

const Header = () => {
    return (<div id='header'>
            <div className="container">
                <div className="header">
                    <a className='a' style={{color: "#818EEA"}}>Bookshop</a>
                    <div className='header--nav'><a href="">Categories</a>
                        <a href="">Recent</a> <a href="">Books</a>
                        <a href="">About Us</a></div>
                    <div className='icons'><a className="a-search"><BiSearch/></a>
                        <a className='a-shop'><BiShoppingBag/></a>                         <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;