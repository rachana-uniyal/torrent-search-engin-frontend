import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer'
import About from './components/about';
import Feedback from './components/feedback'
import SearchCard from './components/searchCard';
import Torrents from './components/torrents';



const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path = "/about" element={<About/>}/>
          <Route exact path = "/feedback" element={<Feedback/>}/>
          <Route exact path = "/" element={<SearchCard/>}/>
          <Route exact path = "/search" element={<Torrents/>}/>
        </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
