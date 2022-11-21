import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";
import street1 from "../images/street1.jpg";
import street2 from "../images/street2.jpg";
import street3 from "../images/street3.jpg";
import river1 from "../images/river1.jpg";
import river2 from "../images/river2.jpg";
import river3 from "../images/river3.jpg";
import field1 from "../images/field1.jpg";
import field2 from "../images/field2.jpg";
import field3 from "../images/field3.jpeg";
import fort1 from "../images/fort1.jpg";
import taj from "../images/taj.jpg";
import wall1 from "../images/wall1.jpg";
import garden from "../images/garden.jpg";
import fort2 from "../images/fort2.jpg";


function Home(){
    return(
        <>
         <Navbar/>
         
         <div className="images-div1">
                <a href="https://nyc.streetsblog.org/"><img src={street1} className="street-img-1"/></a>
                <a href="https://nyc.streetsblog.org/"><img src={street2} className="street-img-2"/></a>
                <a href="https://nyc.streetsblog.org/"><img src={street3} className="street-img-3"/></a>
            </div>

            <h3 className="latest-heading">The Latest</h3>

            <div className="card-1">
              <a href="https://timesofindia.indiatimes.com/travel/topic/fort/articles"><img src={river1} className="river-img-1"/></a>

              <h5 className="joshua-heading">Joshua Tree Overnight Adventure</h5>
              <p className="gujarat-para">Gujarat is vastly underrated and a mystery to us why 
              the region isn't more well-known as a tourist destination.
              <br/>
              <br/>
              Travel / August 21 2017</p>

            </div>

            <div className="card-2">
            <a href="https://timesofindia.indiatimes.com/travel/topic/fort/articles"><img src={river3} className="river-img-1"/></a>

              <h5 className="joshua-heading">See beautiful rivers and forests!</h5>
              <p className="gujarat-para">Gujarat is vastly underrated and a mystery to us why 
              the region isn't more well-known as a tourist destination.
              <br/>
              <br/>
              Travel / August 21 2017</p>
              
            </div>

            <div className="card-3">
            <a href="https://timesofindia.indiatimes.com/travel/topic/fort/articles"><img src={river2} className="river-img-1"/></a>

              <h5 className="joshua-heading">Welcome to the Amazon!</h5>
              <p className="gujarat-para">Gujarat is vastly underrated and a mystery to us why 
              the region isn't more well-known as a tourist destination.
              <br/>
              <br/>
              Travel / August 21 2017</p>
              
            </div>

            <h3 className="article-heading">Latest Articles</h3>

            <div className="card-4">
              <a href="https://www.farmers.gov/blog"><img src={field1} className="field-img"/></a>

              <h5 className="catch-head">Catch waves with an adventure guide</h5>
              <p className="guj-para">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card-5">
            <a href="https://www.farmers.gov/blog"><img src={field2} className="field-img"/></a>

              <h5 className="catch-head">Images of fields and farms</h5>
              <p className="guj-para">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card-6">
            <a href="https://www.farmers.gov/blog"><img src={field3} className="field-img"/></a>

              <h5 className="catch-head">Different methods of farming available</h5>
              <p className="guj-para">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="advertisement-div">
              <h3 className="ad-heading">Advertisement</h3>
            </div>

            <h3 className="top-post">Top Posts</h3>

            <a href="https://traveltriangle.com/blog/7-wonders-of-the-world/"><img src={fort1} className="fort-img1"/></a>

            <div className="posts-div">
            <a href="https://traveltriangle.com/blog/7-wonders-of-the-world/"><img src={wall1} className="wall-img1"/></a>
            <a href="https://traveltriangle.com/blog/7-wonders-of-the-world/"><img src={taj} className="wall-img2"/></a>
            <a href="https://traveltriangle.com/blog/7-wonders-of-the-world/"><img src={garden} className="wall-img3"/></a>
            </div>

            <a href="https://traveltriangle.com/blog/7-wonders-of-the-world/"><img src={fort2} className="fort-img2"/></a>

         <Footer/>
        </>
    );
};

export default Home;