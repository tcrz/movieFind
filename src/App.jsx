import { useState } from 'react'
import './App.css'
import Movies from './Movies/Movies';
import NavBar from './NavBar/NavBar';
import { useQuery } from '@tanstack/react-query';
import Footer from './Footer/Footer';


function App() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(null)
  const itemsPerPage = 10

  // Hook to fetch search results
  const { isLoading, isError, isSuccess, refetch, data: moviesData } = useQuery(
    ["/pokemon", page, query],
    fetchResults,
    { enabled: false, staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  )

  // Set the total number of results to state and 
  // set enabled to false (This will prevent automatic fetches when search query changes)
  // useEffect(() => {
  //   setTotalResults()
  // },[isSuccess])


  // Calculate of pages based on total number of results returned
  let numOfPages;
  if (totalResults % itemsPerPage === 0) {
    numOfPages = totalResults / itemsPerPage
  } else {
    numOfPages = Math.floor(totalResults / itemsPerPage) + 1
  }

  async function fetchResults() {
    const url = `https://www.omdbapi.com/?s=${query}&page=${page}&apikey=afd2d51f&r=json`
    console.log(url)
    const response = await axios.get(url)
    return response.data
  }

  const handleQueryOnChange = (e) => setQuery(e.target.value)

  const handlePageNumOnChange = (page) => {
    setPageNum(page)
    refetch()
  }

  // Calls refetch func to trigger a manual fetch
  const handleSearchButtonOnClick = () => {
    refetch()
  }

  return (
    <section className="h-screen border relative overflow-hidden">
      <NavBar handleSearchButtonOnClick={handleSearchButtonOnClick} query={query} />
      <Movies isLoading={isLoading} isError={isError} isSuccess={isSuccess} />
      {isSuccess && <Footer page={page} numOfPages={numOfPages} handlePageNumOnChange={handlePageNumOnChange} />}
    </section>
  )
}

export default App
