import './App.scss';
import Header from "./companents/Header";
import Hero from "./companents/Hero";
import NewBooks from "./companents/NewBooks";
import Books from "./companents/Books";
import About from "./companents/About";
import Footer from "./companents/Footer";
import Genres from "./companents/Genres";
import {Route, Routes} from "react-router-dom";
import React from "react";
import AllBooks from "./companents/AllBooks";
import Pages from "./companents/pages";

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
            <Route path={'/'} element={<Pages/>}/>
            <Route path='/pages' element={<AllBooks/>}/>
        </Routes>
        <Footer/>
    </div>

  );
}

export default App;
