import React, {useEffect, useState} from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import {AnimeList} from './AnimeList';
import './style.css'
import logo from '../assets/AniMate.png';
import favorites from './Favorites';

function Home(){
    
    const location = useLocation()
    const history = useNavigate()
    const {user} = location.state
    console.log("User in AnimeInfo:", user); 

    const [search, setSearch]=useState("");
    const [searchData, setSearchData]=useState();
    const [popularData, setPopular]=useState();
    const [myAnimeList, setMyAnimeList]=useState([]);
    const navigate = useNavigate();

    const addTo=(anime)=>{
        const newArray=[...myAnimeList,anime];
        setMyAnimeList(newArray);
    }
    const removeFrom=(anime)=>{
        const newArray=myAnimeList.filter((myanime)=>{
            return myanime.mal_id !== anime.mal_id
        })
        setMyAnimeList(newArray);
    }

    const getPopularData=async()=>{
        const popularResponse=await fetch('https://api.jikan.moe/v4/top/anime');
        const popularData=await popularResponse.json(); 
        setPopular(popularData.data);
    };
   
    const getSearchData=async()=>{
        const searchResponse=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&genres_exclude=12`);
        const searchData=await searchResponse.json();
        setSearchData(searchData.data);
    }
    
    useEffect(()=>{
        const delay = 334; // 0.334 seconds delay between requests
        const timer = setTimeout(()=> {
            getPopularData();
            getSearchData();
        }, delay);
        
        return () => clearTimeout(timer); // Clear the timer on component unmount
    },[search]);
    
    const home=()=>{
        navigate(0);
    }
    
    return(
        <>
        <div className = "template">
            <div className = "header">
                <img
                    src={logo}
                    alt="AniMate Image"
                    className="header-image"
                    onClick={home}
                    style={{cursor: 'pointer'}}
                />
                <div className="container-contentbar">
                        <button className="home-button" onClick={home}>Home</button>
                        {/* <button className="fav-button" onClick={favorites}>Favorites</button> */}
                        <div className="search-box">
                            <input type="search" placeholder="Search for an anime..." onChange={(e)=>setSearch(e.target.value)}/>
                        </div>
                </div>
               
            </div>
        
        <h2 className="fixed-heading">Search</h2>
        <div className="scroll-container">
            <div className="anime-row">
                <div className="row">
                    <AnimeList handleList={(anime)=>addTo(anime)} animeList={searchData} user = {user} navigate = {navigate}/>
                </div>
            </div>
        </div>
        <h2 className="fixed-heading">Popular</h2>
        <div className="scroll-container">
            <div className="anime-row">
                <div className="row">
                    <AnimeList handleList={(anime)=>addTo(anime)} animeList={popularData} user = {user} navigate = {navigate}/>
                </div>
            </div>
        </div>
        <h2 className="fixed-heading">My List</h2>
        <div className="scroll-container">
            <div className="anime-row">
                <div className="row">
                    <AnimeList handleList={(anime)=>removeFrom(anime)} animeList={myAnimeList} user = {user} navigate = {navigate}/>
                </div>
            </div>
        </div>
        </div>
        </>
    )


}
export default Home;