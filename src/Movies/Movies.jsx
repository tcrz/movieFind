import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import DefaultView from './DefaultView'
import EmptyView from './EmptyView'
import ErrorView from './ErrorView'
import LoadingView from './LoadingView';


const Movies = ({ viewMovieDetails, movies, isLoading, isFetching, isError, isSuccess, refetch }) => {
  return (
    <>
      <section className="borderr-2 border-black bg-gray-200/80" style={{ marginTop: "9vh", height: "80vh" }}>
        {isError && <ErrorView refetch={refetch} />}
        {(isLoading || isFetching) && <LoadingView />}
        {(!isLoading && !isFetching) && isSuccess && movies.Response === "False" && <EmptyView message={movies.Error} />}
        {movies === null && <DefaultView />}
        {
          (!isLoading && !isFetching) && isSuccess && movies.Response === "True" &&
          <div style={{ height: "80vh" }}
            className="movies-list borderr-2 pokemon-list grid grid-cols-1 gap-x-4 gap-y-4 px-20 pt-5 h-full overflow-y-scroll sm:grid-cols-2 lg:grid-cols-4">
            {
              movies.Search.map((movie) => (
                <MovieCard
                  viewMovieDetails={viewMovieDetails}
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                />
              ))
            }
          </div>
        }
      </section>
    </>
  )
}

export default Movies