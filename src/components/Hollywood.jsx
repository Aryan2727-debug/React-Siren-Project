import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Hollywood.css";
import holly from "../images/holly.jpg";
import hollyStreet from "../images/holly-street.jpg";
import hollyStreet2 from "../images/holly-street2.jpg";

function Hollywood(){
    return(
        <>
            <Navbar/>
            
            <h3 className="hollywood-header">Hollywood</h3>

            <div className="card411">
            <a href="https://www.hollywoodreporter.com/"><img src={hollyStreet} className="field11"/></a>

              <h5 className="catch11">Get a chance to explore Hollywood!</h5>
              <p className="guj11">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card422">
            <a href="https://www.hollywoodreporter.com/"><img src={holly} className="field11"/></a>

              <h5 className="catch11">Roam around in the famous Hollywood</h5>
              <p className="guj11">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card433">
            <a href="https://www.hollywoodreporter.com/"><img src={hollyStreet2} className="field11"/></a>

              <h5 className="catch11">Enjoy the lights of the street</h5>
              <p className="guj11">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="advertisement-div11">
              <h3 className="ad-heading11">Advertisement</h3>
            </div>

            <div className="footer-holly">
              <Footer/>
            </div>
        </>
    );
};

export default Hollywood;