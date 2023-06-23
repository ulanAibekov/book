import React from 'react';
import Header from "../Header";
import Hero from "../Hero";
import Genres from "../Genres";
import NewBooks from "../NewBooks";
import Books from "../Books";
import About from "../About";
import Footer from "../Footer";

const Index = () => {
    return (
        <div>
            <Hero/>
            <Genres/>
            <NewBooks/>
            <Books/>
            <About/>

        </div>
    );
};

export default Index;