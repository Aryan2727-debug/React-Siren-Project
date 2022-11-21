import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Food.css";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";

function Food(){
    return(
        <>
            <Navbar/>

            <h3 className="food-header">Food</h3>

            <div className="card-11">
              <a href="https://pinchofyum.com/"><img src={food1} className="river-img-11"/></a>

              <h5 className="joshua-heading1">Explore for different cuisines available</h5>
              <p className="gujarat-para1">Gujarat is vastly underrated and a mystery to us why 
              the region isn't more well-known as a tourist destination.
              <br/>
              <br/>
              Travel / August 21 2017</p>

            </div>

            <div className="card-22">
            <a href="https://pinchofyum.com/"><img src={food2} className="river-img-11"/></a>

              <h5 className="joshua-heading1">Multiple sweet dish options also available</h5>
              <p className="gujarat-para1">Gujarat is vastly underrated and a mystery to us why 
              the region isn't more well-known as a tourist destination.
              <br/>
              <br/>
              Travel / August 21 2017</p>
              
            </div>

            <div className="card-33">
            <a href="https://pinchofyum.com/"><img src={food3} className="river-img-11"/></a>

              <h5 className="joshua-heading1">Don't miss the Gourmet Pizzas & Burgers!</h5>
              <p className="gujarat-para1">Gujarat is vastly underrated and a mystery to us why 
              the region isn't more well-known as a tourist destination.
              <br/>
              <br/>
              Travel / August 21 2017</p>
              
            </div>

            <h3 className="article-heading111">Latest Articles</h3>

            <div className="card-444">
            <a href="https://pinchofyum.com/"><img src={food4} className="field-img111"/></a>

              <h5 className="catch-head111">The quality of food is top-notch</h5>
              <p className="guj-para111">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card-555">
            <a href="https://pinchofyum.com/"><img src={food5} className="field-img111"/></a>

              <h5 className="catch-head111">Choose from many options available</h5>
              <p className="guj-para111">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="card-666">
            <a href="https://pinchofyum.com/"><img src={food1} className="field-img111"/></a>

              <h5 className="catch-head111">The prices are really affordable</h5>
              <p className="guj-para111">Gujarat is vastly underrated and a mystery to us <br/>why 
              the region isn't more well-known as a tourist <br/>destination.
              <br/>
              Travel / August 21 2017</p>
            </div>

            <div className="advertisement-div111">
              <h3 className="ad-heading111">Advertisement</h3>
            </div>

            <div className="footer-food">
              <Footer/>
            </div>
        </>
    );
};

export default Food;