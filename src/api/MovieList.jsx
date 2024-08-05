import axios from 'axios'
import React from 'react'
const apiKey= process.env.REACT_APP_APIKEY
const baseUrl= process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(
        `${baseUrl}/movie/popular?language=en-US&page=1&api_key=${apiKey}`
    )
  return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
  return search.data
}
