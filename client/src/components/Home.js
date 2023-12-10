import React, {useEffect, useState} from "react"
import {useLocation, useNavigate} from 'react-router-dom';
import {AnimeList} from './AnimeList';
import './style.css'

function Home(){
    // const location = useLocation()

    const [search, setSearch]=useState("");
    const [searchData, setSearchData]=useState();
    const [popularData, setPopular]=useState();

    const getPopularData=async()=>{
        const popularResponse=await fetch('https://api.jikan.moe/v4/top/anime');
        const popularData=await popularResponse.json(); 
        setPopular(popularData.data);
    };
    useEffect(()=>{
        getPopularData();
    },[]);

    const getSearchData=async()=>{
        const searchResponse=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&genres_exclude=12&limit=10`);
        const searchData=await searchResponse.json();
        setSearchData(searchData.data);
    }
    useEffect(()=>{
        getSearchData();
    },[search]);
    

    return(
        <>
        <div className = "homepage">
            {/* <h1>Hello {location.state.id} and welcome to the homepage</h1> */}
            <div className = "header">
                <h1>MyAnimeList</h1>
                <div className="search-box">
                    <input type="search" placeholder="Search your anime" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="anime-row">
                <h2 className="text-heading">Search</h2>
                <div className="row">
                    <AnimeList animeList={searchData} />
                </div>
            </div>
            <div className="anime-row">
                <h2 className="text-heading">Popular</h2>
                <div className="row">
                    <AnimeList animeList={popularData} />
                </div>
            </div>
        </div>
        </>
    )


}
export default Home;