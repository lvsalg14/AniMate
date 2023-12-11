import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logo from '../assets/AniMate.png';

export const AnimeInfo = () => {
  const { mal_id } = useParams();
  const [animeInfo, setAnimeInfo] = useState();
  const navigate = useNavigate();

    const getData=async()=>{
        const response=await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
        const responseData=await response.json();
        setAnimeInfo(responseData.data);
        console.log(responseData.data);
    };
    useEffect(()=>{
        getData();
    }, [mal_id]);

    const goBack=()=>{
        navigate(-1);
    }
  return (
      <>
      <div className="template">
      <div className = "homepage">
          <div className = "header">
              <img
                  src={logo}
                  alt="AniMate Image"
                  className="header-image"
                  onClick={goBack}
                  style={{cursor: 'pointer'}}
              />
              <div className="container-contentbar">
                      <button className="home-button" onClick={goBack}>Home</button>
              </div>
          </div>
      </div>
    <div>
      {animeInfo ? (
        <>
          <h2 style={{marginTop:'20px'}}>{animeInfo.title}</h2>
          <img style={{marginTop:'10px', marginBottom:'10px'}} src={animeInfo.images.jpg.large_image_url} alt={animeInfo.title} />
          <div className="anime-info-container"> 
          {animeInfo.synopsis ? (
            <p style={{ marginLeft:'5px', marginTop:'5px' ,textAlign: 'left' }}> <strong>Synopsis:</strong> {animeInfo.synopsis}</p>
          ) : (
            <p>No synopsis available for this anime.</p>
            )}
          <ol style={{listStyle: 'none', display:'flex',marginTop:'5px'}}>
            <p style={{ marginLeft: '5px' }}><strong>Genres:</strong></p>
            {animeInfo.genres.map((genre, index) => (
            <li key={index} style={{ marginLeft:'5px'}}>{genre.name}</li>
            ))}
          </ol>
          <p style={{ display: 'flex',marginLeft: '5px'}}> <strong>Episodes:</strong> <span style={{ marginLeft: '2px' }}>{animeInfo.episodes}</span></p>
          {animeInfo.score ?(
            <p style={{ display: 'flex',marginLeft: '5px',marginBottom:'5px'}}><strong>Score:</strong> <span style={{ marginLeft: '2px' }}>{animeInfo.score}</span></p>
          ) : (
            <p>No score available for this anime.</p>
          )}
        </div>
          <button className="backtohome-button" onClick={goBack}>Back to Home Page</button>
        </>
      ) : (
        <p>Loading anime information...</p>
      )}
    </div>
  </div>
  </>
  );
};

export default AnimeInfo;
