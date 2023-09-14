import React,{useState, useEffect} from 'react'
import {FaPlay, FaPlus} from 'react-icons/fa'
import './Banner.css'
import axios from '../axios'
import requests from './Request'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )

      return request
    }

    fetchData()
  }, [])

// console.log(movie)
  const shorthen = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
    <header className='banner' 
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: ' top center'

    }}>

      <div className="bannerContent">
        <h1 className="bannerTitle">{
        movie?.title || movie?.name || movie?.original_title
        }</h1>
        <h1 className="bannerDescription">
          {shorthen(`${movie?.overview}`, 200)}
        </h1>
        <div className="bannerButtons">
          <button className='bannerBtn'> <FaPlay />Play</button>
          <button className='bannerBtn trans'> < FaPlus />My List</button>
        </div>
      </div>

      <div className="bannerFade" />

    </header>
  )
}

export default Banner