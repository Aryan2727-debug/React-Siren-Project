import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Bollywood.css";
import fort1 from "../images/fort1.jpg";
import fort2 from "../images/fort2.jpg";
import fort3 from "../images/fort3.jpg";

function Bollywood(){
    return(
        <>
            <Navbar/>

            <h3 className="bolly-heading">Bollywood</h3>

            <div className="card41">
              <a href="https://www.britannica.com/topic/Great-Wall-of-China"><img src={fort1} className="field1"/></a>

              <h5 className="catch1">Explore the Great Wall Of China</h5>
              <p className="guj1">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card42">
             <a href="https://www.britannica.com/place/Jami-Masjid-mosque-Delhi-India"><img src={fort2} className="field1"/></a>

              <h5 className="catch1">Explore the Jama Masjid</h5>
              <p className="guj1">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card43">
            <a href="https://www.britannica.com/topic/Red-Fort"><img src={fort3} className="field1"/></a>

              <h5 className="catch1">Explore the Red Fort</h5>
              <p className="guj1">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="advertisement-div1">
              <h3 className="ad-heading1">Advertisement</h3>
            </div>

            <div className="footer">
             <Footer/>
            </div>
            
        </>
    );
};

export default Bollywood;