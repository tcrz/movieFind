import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import DefaultView from './DefaultView'
import EmptyView from './EmptyView'
import ErrorView from './ErrorView'
import LoadingView from './LoadingView';


const Movies = ({numOfPages, pageNum, movies, isLoading, isError, isSuccess, refetch}) => {
  return (
    <>
      <body className="borderr-2 border-black bg-gray-200/80" style={{ marginTop: "9vh", height: "90vh" }}>
          {
            isSuccess && 
            <section style={{ height: "80vh" }} className="borderr-2 pokemon-list grid grid-cols-1 gap-x-4 gap-y-4 px-20 pt-5 h-full overflow-y-scroll sm:grid-cols-2 lg:grid-cols-4">
              {movies.map((movie) => <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} />)}
            </section>
          }
        <section style={{ height: "80vh" }} className="borderr-2 pokemon-list grid grid-cols-1 gap-x-4 gap-y-4 px-20 pt-5 h-full overflow-y-scroll sm:grid-cols-2 lg:grid-cols-4">
          <MovieCard />
        </section>
        {isError && <ErrorView />}
        {isSuccess && movies.length === 0 && <EmptyView />}
        {isLoading && <LoadingView />}
        {movies === null && <DefaultView />}
        
      </body>
    </>
  )
}

export default Movies