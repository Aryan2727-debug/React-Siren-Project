import React from "react";
import Navbar from "./components/Navbar";
import { Route , Routes } from "react-router-dom";
//import Center from "./components/Center";
import Home from "./components/Home";
import Technology from "./components/Technology";
import Bollywood from "./components/Bollywood";
import Hollywood from "./components/Hollywood";
import Fitness from "./components/Fitness";
import Food from "./components/Food";
import Login from "./components/Login";
import "./App.css";

function App(){
    return(
        <>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/bollywood" element={<Bollywood/>}/>
              <Route exact path="/technology" element={<Technology/>}/>
              <Route exact path="/hollywood" element={<Hollywood/>}/>
              <Route exact path="/fitness" element={<Fitness/>}/>
              <Route exact path="/food" element={<Food/>}/>
              <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </>
    );
};

export default App;