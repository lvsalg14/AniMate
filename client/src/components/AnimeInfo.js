import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    <div className="anime-info-container">
      {animeInfo ? (
        <>
          <h2>{animeInfo.title}</h2>
          <img src={animeInfo.images.jpg.large_image_url} alt={animeInfo.title} />
          {animeInfo.synopsis ? (
            <p>{animeInfo.synopsis}</p>
          ) : (
            <p>No synopsis available for this anime.</p>
            )}
          <p>Genres:</p>
          <ul>
            {animeInfo.genres.map((genre, index) => (
            <li key={index}>{genre.name}</li>
            ))}
        </ul>
          <p>Episodes: {animeInfo.episodes}</p>
          {animeInfo.score ? (
            <p>Score: {animeInfo.score}</p>
          ) : (
            <p>No score available for this anime.</p>
            )}
          <button onClick={goBack}>Back to Home Page</button>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>Loading anime information...</p>
      )}
    </div>
  );
};

export default AnimeInfo;
