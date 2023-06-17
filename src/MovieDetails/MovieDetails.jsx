import React from 'react'
import "./MovieDetails.css"
import defaultPoster from "../MovieCard/defaultPoster.png"
import { Rating } from '@mui/material'
import LoadingView from './LoadingView'
import ErrorView from './ErrorView'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const MovieDetails = ({ movieId, detailsModalOpen: open, setDetailsModalOpen: setOpen }) => {
  const { isError, isLoading, isSuccess, refetch, error, data: movie } = useQuery(
    ["/movies", movieId],
    () => fetchMovieData(),
    { enabled: open, staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  )

  // Function to make fetch movie data
  async function fetchMovieData() {
    const url = `https://www.omdbapi.com/?i=${movieId}&apikey=afd2d51f&r=json`
    console.log(url)
    const response = await axios.get(url)
    return response.data
  }

  return (
    <div className="modal-backdrop"
      onClick={() => open ? setOpen(false) : () => { }}
      style={{ display: open ? "flex" : "none" }}
    >
      <div className="modal bg-white flex rounded-md p-2 w-5/6 h-1/2 sm:w-1/2" onClick={(e) => e.stopPropagation()}>
        {isLoading && <LoadingView />}
        {isError && <ErrorView refetch={refetch} />}
        {
          !isLoading && isSuccess &&
          <>
            <div className="poster borderr border-red-400 rounded-md">
              <img src={movie.Poster !== "N/A" ? movie.Poster : defaultPoster} className="rounded-l-md" />
            </div>
            <div className="details-container borderr-2 border-black bg-rred-300">
              <div className="details bgg-red-300 w-full h-full rounded-r-md flex flex-col gap-2 items-center">
                <div className="title p-1 w-full flex items-center">
                  <h1 className="text-2xl font-bold borderr w-full text-center">{movie.Title}</h1>
                </div>
                <div className="tags">
                  <div className="borderr flex flex-wrap justify-around items-center gap-2" style={{ minWidth: "55%" }}>
                    <p className="text-sm rounded-xl bg-gray-200 px-2" style={{ background: "#EEEEEE" }}>{movie.Year}</p>
                    <p className="text-sm rounded-xl bg-gray-200 px-2" style={{ background: "#EEEEEE" }}>{movie.Genre}</p>
                  </div>
                </div>
                {
                  movie.imdbRating !== "N/A" ? 
                  <Rating name="movie-rating" defaultValue={+movie.imdbRating * 0.5} precision={0.1} readOnly /> :
                  <p className="text-sm text-red-600">No rating available</p>
                }
                <div className="plot text-sm overflow-y-scroll px-2 text-center">
                  <p>{movie.Plot}</p>
                </div>
                <div className="actors-container borderr flex flex-col justify-around items-center gap-1">
                  <h2 className="font-semibold">Starring:</h2>
                  <div className="actors flex flex-wrap borderr-2 w-full gap-2 overflow-y-scroll justify-around items-center">
                    {
                      movie.Actors.split(", ").map((actor) => <p className="text-sm rounded-xl bg-gray-200 px-2" style={{ background: "#EEEEEE" }}>{actor}</p>)
                    }
                  </div>

                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default MovieDetails