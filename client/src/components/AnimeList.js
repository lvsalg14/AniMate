// AnimeList.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AnimeInfo from './AnimeInfo';


export const AnimeList = ({animeList,user,navigate}) => {
    
  return (
    <>
    {
      animeList ?(
        animeList.map((anime,index)=>{
          return(
            <Link  key={anime.mal_id}
            to={`/anime/${anime.mal_id}?user=${user}`}>
            <div className="card" >
              <img src={anime.images.jpg.large_image_url} alt="animeImage"/>
              <div className="animeInfo">
                <h4>{anime.title}</h4>
              </div>
            </div>
            </Link>
          );
        })
      ):"Not Found"
    }
    </>
  );
};

export default AnimeList;
