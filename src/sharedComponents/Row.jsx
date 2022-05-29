import React, { useEffect, useState } from 'react'
import SmallCard from './SmallCard'
import '../assets/css/row.css'
import axios from '../api/axios';
import BigCard from './BigCard';
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const  IMAGE_INITIAL_PATH = 'https://image.tmdb.org/t/p/original'
  useEffect(()=>{
      let getMovies = async ()=>{
      let data = await axios.get(props.url)
      console.log(data.data.results);
      setMovies(data.data.results);
      }
      getMovies();
  },[props.url])
  return (
    <>
        <h3 id='title'>{props.title}</h3>
        <div className="cards_container">
          {
            props.bigCard?
            movies.map((movie,key)=>{
              return(
                <BigCard key={key} image={`${IMAGE_INITIAL_PATH}${movie.backdrop_path}`}/>
              )
            
          })
            :
                  movies.map((movie,key)=>{
                return(
                  <SmallCard key={key} image={`${IMAGE_INITIAL_PATH}${movie.poster_path}`}/>
                )
              
            })
            
          
          }
          
        </div>
    </>
  )
}

export default Row