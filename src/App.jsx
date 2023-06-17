import { useEffect, useState } from 'react'
import './App.css'
import Movies from './Movies/Movies';
import NavBar from './NavBar/NavBar';
import { useQuery } from '@tanstack/react-query';
import Footer from './Footer/Footer';
import axios from 'axios';


function App() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(null)
  const itemsPerPage = 10
  console.log(query)
  // Hook to fetch search results
  const { isError, isFetching, isSuccess, refetch, error, fetchStatus, status, data: moviesData } = useQuery(
    ["/movies"],
    ()=>fetchResults(),
    { enabled: false, staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  )
  const isLoading = fetchStatus === 'fetching' && status === 'loading'

  let movies = null;
  if (isSuccess){
    movies = moviesData
  }

  // Trigger refetch on page change only if theres a query
  useEffect(()=>{
    if (query) {
      refetch()
    }
  }, [page])

  console.log(error)
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

  // Function to make fetch call
  async function fetchResults() {
    const url = `https://www.omdbapi.com/?s=${query}&page=${page}&apikey=afd2d51f&r=json`
    console.log(url)
    const response = await axios.get(url)
    // Set the total number of results to state 
    setTotalResults(response.data.totalResults)
    return response.data
  }

  const handleQueryOnChange = (e) => setQuery(e.target.value)

  const handlePageChange = (e, page) => setPage(page)

  // Calls refetch func to trigger a manual fetch
  const handleSearchButtonOnClick = () => {
    refetch()
  }

  return (
    <div className="h-screen border relative overflow-hidden bg-gray-200/80">
      <NavBar handleSearchButtonOnClick={handleSearchButtonOnClick} query={query} handleQueryOnChange={handleQueryOnChange} />
      <Movies movies={movies} isLoading={isLoading} isFetching={isFetching} isError={isError} isSuccess={isSuccess} refetch={refetch} />
      {isSuccess && <Footer page={page} numOfPages={numOfPages} handlePageChange={handlePageChange} />}
    </div>
  )
}

export default App
