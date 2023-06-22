import './App.scss';
import Header from "./companents/Header";
import Hero from "./companents/Hero";
import NewBooks from "./companents/NewBooks";
import Books from "./companents/Books";
import About from "./companents/About";
import Footer from "./companents/Footer";
import AllBooks from "./companents/AllBooks";
import Genres from "./companents/Genres";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Genres/>
        <NewBooks/>
        <Books/>
        <About/>
        <Footer/>
        <AllBooks/>
    </div>
  );
}

export default App;
