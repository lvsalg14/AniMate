import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './assets/AniMate.png';
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import AnimeInfo from "./components/AnimeInfo"
import Favorites from "./components/Favorites"

import { useState } from 'react';



function App(){
  return(
    <div className = "App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/favorites" element= {<Favorites/>}/>
          <Route path="/anime/:mal_id" element={<AnimeInfo/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
