import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './reduxStore/posts/actions/fetch_posts';
import PostPropertyList from  './postPropertyList';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
// import Acres from "./appclone/99acres";
import Home from './routes/Home';
import PostProperty from './routes/PostProperty';
import Navbar from './app/navbar';
import PostCity from './routes/PostCity';
import NotFound from './routes/NotFound';

function App() {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchPosts())
  // }, [])
  return (
    
    <div className="App ">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/properties" element={<PostProperty/>}/>
          <Route path="/properties/:id" element={<PostProperty/>}/>
          <Route path="/cities" element={<PostCity/>}/>
          <Route path="/cities/:id" element={<PostCity/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </Router>
      {/* <PostPropertyList/> */}
      <footer>
        <div>
          <section>
            <h4>Our Partners</h4>
            <ul>
              <li>
                <a href="https://www.naukri.com/">Naukri.com - Jobs in India</a>
              </li>
              <li>
                <a href="https://www.naukrigulf.com/">
                  Naukrigulf.com - Jobs in middle east
                </a>
              </li>
              <li>
                <a href="https://www.jeevansathi.com/">
                  Jeevansathi.com - Matrimonials
                </a>
              </li>
              <li>
                <a href="http://www.brijj.com/">
                  Brijj.com - Professional Networking
                </a>
              </li>
              <li>
                <a href="https://www.shiksha.com/">
                  Shiksha.com - Education Career Info
                </a>
              </li>
              <li>
                <a href="https://www.policybazaar.com/">
                  Policybazaar.com - Insurance India
                </a>
              </li>
              <li>
                <a href="https://www.meritnation.com/">
                  Meritnation.com - Online Educational Assessment
                </a>
              </li>
              <li>
                <a href="https://www.paisabazaar.com/">PaisaBazaar.com</a>
              </li>
              <li>
                <a href="https://www.ambitionbox.com/">AmbitionBox.com</a>
              </li>
              <li>
                <a href="https://www.firstnaukri.com/">
                  FirstNaukri.com - A jobsite for campus hiring
                </a>
              </li>
              <li>
                <a href="https://www.jobhai.com/">
                  Jobhai.com – Find Jobs Near You
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <h4>Contact Us</h4>
            <div>
              Toll Free - 1800 41 99099
              <br />
              <small>Monday - Saturday (9:00AM to 11:00PM IST)</small>
            </div>
            <h5>Email - feedback@99acres.com</h5>
          </section>
          <section>
            <h4>Connect with us</h4>
            <p>
              All rights reserved - Info Edge (India) Ltd.
              <br />A naukri.com group venture
            </p>
          </section>
        </div>
      </footer>
    </div>
  
    
  );
}

export default App;