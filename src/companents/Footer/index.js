import React from 'react';
import './index.scss'
import {RiBook3Fill, RiBookFill, RiBookMarkFill, RiContactsBook2Fill} from "react-icons/ri";




const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--text">
                        <h1>Sign up for our newsletter</h1>
                        <h2>Be the first to know about our special offers, news, and updates.</h2>
                        <h3><input type="email" placeholder="Email Address"/><button>Sign Up</button></h3>
                    </div>
                   <div className="footer--lorem">
                       <div className="footer--lorem__li">
                           <h4>Lorem Ipsum</h4>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                       </div>
                       <div className="footer--lorem__li">
                           <h4>Lorem Ipsum</h4>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                           <h5>lorem</h5>
                       </div>
                   </div>
                  <div className="footer--lorem">
                      <div className="footer--lorem__li">
                          <h4>Lorem Ipsum</h4>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                      </div>
                      <div className="footer--lorem__li">
                          <h4>Lorem Ipsum</h4>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                          <h5>lorem</h5>
                      </div>
                  </div>
                </div>
                <div className="floor--blocks">
                    <div className="floor--blocks__block">
                        <RiBookMarkFill className="icon"/>
                        <h1>Genres</h1>
                    </div>
                    <div className="floor--blocks__block">
                        <RiBook3Fill className="icon"/>
                        <h1>New</h1>
                    </div>
                    <div className="floor--blocks__block">
                        <RiBookFill className="icon"/>
                        <h1>Books</h1>
                    </div>
                    <div className="floor--blocks__block">
                        <RiContactsBook2Fill className="icon"/>
                        <h1>About</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
