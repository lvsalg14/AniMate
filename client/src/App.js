import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './AniMate.png';
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import AnimeInfo from "./components/AnimeInfo"

import { useState } from 'react';



function App(){
  return(
    <div className = "App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/anime/:mal_id" element={<AnimeInfo/>}/>
        </Routes>
      </Router>
    </div>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: 'home',
//       animeId: null,
//       animeData: [],
//     };
//   }

//   // Fetch anime data from the Express API
//   fetchAnimeData = async () => {
//     try {
//       const response = await fetch('http://localhost:9000/api/anime/list');
//       const data = await response.json();

//       this.setState({ animeData: data });
//     } catch (error) {
//       console.error('Error fetching anime data:', error);
//     }
//   };

//   // Function to navigate to the Anime List page
//   // goToAnimeList = () => {
//   //   this.setState({ currentPage: 'animeList', animeId: null });
//   // }

//   // Function to navigate to the Anime Details page
//   goToAnimeDetails = (animeId) => {
//     this.setState({ currentPage: 'animeDetails', animeId });
//   }

//   componentDidMount() {
//     // Fetch anime data when the component mounts
//     this.fetchAnimeData();
//   }

//   renderAnimeList() {
//     const { animeData } = this.state;

//     return (
//       <div>
//         <div class = "container">
//           <div class = "col-12">
//             <img style= {{width: '20%', height: 'auto'}} src = {logo}/>
//           </div>
//         </div>
//         <h2 style={{textAlign:'left'}}>Popular Anime</h2>
//         <div style={{ display: 'flex' }}>
//           {animeData.map(anime => (
//             <div key={anime.id} style={{ margin: '10px', textAlign: 'center' }}>
//               <img
//                 // src={anime.photo}
//                 src={process.env.PUBLIC_URL + '/photos/' + anime.photo}
//                 alt={anime.title}
//                 style={{ width: '150px', height: '200px', objectFit: 'cover' }}
//                 onClick={() => this.goToAnimeDetails(anime.id)}
//               />
//               <p>{anime.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   renderPage() {
//     const { currentPage, animeId } = this.state;

//     switch (currentPage) {
//       case 'animeList':
//         return <AnimeList onAnimeClick={this.goToAnimeDetails} />;
//       case 'animeDetails':
//         return <AnimeDetails animeId={animeId} onGoBack={() => this.setState({ currentPage: 'home' })}/>;
//       default:
//         return this.renderAnimeList();
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.renderPage()}
//       </div>
//     );
//   }
// }

export default App;
