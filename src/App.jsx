import { useEffect, useState } from 'react'
import './App.css'
import Movies from './Movies/Movies';
import NavBar from './NavBar/NavBar';
import { useQuery } from '@tanstack/react-query';
import Footer from './Footer/Footer';
import axios from 'axios';
import MovieDetails from './MovieDetails/MovieDetails';
import { useSearchParams } from "react-router-dom";


function App() {
  const [query, setQuery] = useState("")
  const [searchParams, setSearchParams] = useSearchParams({});
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(null)
  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [movieId, setmovieId] = useState(null)
  const [sortType, setSortType] = useState()
  const itemsPerPage = 10

  // Hook to fetch search results
  const { isError, isFetching, isSuccess, refetch, error, fetchStatus, status, data: moviesData } = useQuery(
    ["/movies"],
    () => fetchResults(),
    { enabled: false, staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  )
  const isLoading = fetchStatus === 'fetching' && status === 'loading'

  let movies = null;
  // if fetch is successful, set moviesData to movies variable
  if (isSuccess) {
    movies = moviesData
  }

  // Trigger refetch on page change only if theres a query
  useEffect(() => {
    if (query) {
      refetch()
    }
  }, [page])

   // Trigger refetch if theres a URL parameter
  useEffect(() => {
    const value = searchParams.get('query')
    if (value !== null || value.trim().length === 0) {
      setQuery(value)
      refetch()
    }
    // console.log("searchparam:", value)
  }, [])

  console.log("current page:", page)
  // console.log("isFetching:", isFetching)
  console.log(movies)


  // Calculate of pages based on total number of results returned
  let numOfPages;
  if (totalResults % itemsPerPage === 0) {
    numOfPages = totalResults / itemsPerPage
  } else {
    numOfPages = Math.floor(totalResults / itemsPerPage) + 1
  }

  // Function to make fetch movies
  async function fetchResults() {
    console.log(query)
    const value = searchParams.get('query')
    // set searchQuery to url param if present else set to query
    let searchQuery;
    if (value !== null) {
      searchQuery = value
    } else {
      searchQuery = query
    }
    const url = `https://www.omdbapi.com/?s=${searchQuery}&page=${page}&apikey=afd2d51f&r=json`
    console.log(url)
    const response = await axios.get(url)
    // Set the total number of results to state 
    setTotalResults(response.data.totalResults)
    return response.data
  }

  const handleQueryOnChange = (e) => {
    setSearchParams({ query: e.target.value });
    setQuery(e.target.value)
  }

  const handlePageChange = (e, page) => setPage(page)

  // sets the movie id to state and modal to true
  const viewMovieDetails = (id) => {
    setmovieId(id)
    setDetailsModalOpen(true)
  }

  //  Resets page to 1 and calls refetch to trigger a fetch
  const handleSearchButtonOnClick = () => {
    setPage(1)
    refetch()
  }

  return (
    <div className="h-screen border relative overflow-hidden bg-gray-200/80">
      <NavBar
        handleSearchButtonOnClick={handleSearchButtonOnClick}
        query={query}
        handleQueryOnChange={handleQueryOnChange} />
      <Movies
        viewMovieDetails={viewMovieDetails}
        movies={movies}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        refetch={refetch}
      />
      <MovieDetails
        detailsModalOpen={detailsModalOpen}
        setDetailsModalOpen={setDetailsModalOpen}
        movieId={movieId}
      />
      {isSuccess && <Footer page={page} numOfPages={numOfPages} handlePageChange={handlePageChange} />}
    </div>
  )
}

export default App
