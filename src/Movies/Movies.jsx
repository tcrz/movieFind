import React, { useEffect, useState } from 'react'
import { Pagination, Button, Menu, MenuItem } from '@mui/material'
import NavBar from '../NavBar/NavBar';
import MovieCard from '../MovieCard/MovieCard'
import DefaultView from './DefaultView'
import EmptyView from './EmptyView'
import ErrorView from './ErrorView'
import { useQuery } from '@tanstack/react-query'

const paginationStyles = {
  '& li button': {
    background: "#E1E1E1",
    fontFamily: "Clash display",
    borderRadius: "8px",
    fontWeight: "500",
    lineHeight: "30px",
  },
  '& li button:hover': {
    backgroundColor: "transparent",
    border: "1px solid"
  },
  '& li button.Mui-selected': {
    backgroundColor: `#2563eb`,
    color: 'white',
  },
  '& li button.Mui-selected:hover': {
    backgroundColor: `#2563eb`,
  }
}

const menuStyles = {
  '& MuiList-root': {
    borderRadius: "8px",
  },
  '& li p': {
    fontFamily: "Clash display",
  },
  '& li:hover': {
    color: "white",
    backgroundColor: `#2563eb`,
  }
}

const Movies = () => {
  const [query, setQuery] = useState("")
  const [pageNum, setPageNum] = useState(1)
  const [enabled, setEnabled] = useState(false)
  const [totalResults, setTotalResults] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const sortMenuOpen = Boolean(anchorEl);
  const itemsPerPage = 10

  // Fetch search results -- refetches when query or page number changes
  // Fetch will only trigger when enabled === true
  const { isLoading, error, isSuccess, refetch, data: pokemonData } = useQuery(
    ["/pokemon", pageNum], () => fetchResults(),
    { enabled: enabled, staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
  )

  // Set the total number of results to state and set enabled to false 
  // useEffect(() => {
  //   setEnabled(false)
  //   setTotalResults()
  // },[])

  async function fetchResults(query) {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=afd2d51f&r=json`
    console.log(url)
    const response = await axios.get(url)
    return response.data
  }

  const handleQueryOnChange = (e) => setQuery(e.target.value)

  const handleSearchButtonOnClick = () => setEnabled(true)

  // Calculate of pages based on total number of results returned
  let numOfPages;
  if (totalResults % itemsPerPage === 0) {
    numOfPages = totalResults / itemsPerPage
  } else {
    numOfPages = Math.floor(totalResults / itemsPerPage) + 1
  }

  const handleSortMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <NavBar />
      <body className="borderr-2 border-black bg-gray-200/80" style={{ marginTop: "9vh", height: "90vh" }}>
        {/* <section style={{ height: "80vh" }} className="borderr-2 pokemon-list grid grid-cols-1 gap-x-4 gap-y-4 px-20 pt-5 h-full overflow-y-scroll sm:grid-cols-2 lg:grid-cols-4">
        <MovieCard />
      </section> */}
        <ErrorView />
        {/* <EmptyView /> */}
        {/* <DefaultView /> */}
        <div className="pagination border-t-2 border-gray-200/50 flex sm:items-center justify-between p-2 sm:px-20" style={{ height: "10vh" }}>
          <Pagination
            count={numOfPages}
            sx={paginationStyles}
            page={pageNum}
            color="primary"
          // onChange={handlePageChange} 
          />
          <div>
            <Button
              className="!bg-white border-2 border-gray-400 !capitalize rounded-sm"
              aria-controls={sortMenuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={sortMenuOpen ? 'true' : undefined}
              onClick={handleSortMenuOpen}><p style={{ fontFamily: "Clash Display" }}>Sort by:&nbsp;&nbsp;default</p></Button>
            <Menu
              id="basic-menu"
              open={sortMenuOpen}
              onClose={handleSortMenuClose}
              anchorEl={anchorEl}
              sx={menuStyles}
              // className="input-field"
              value="Release date"
            // onChange={handlePageSizeOnChange}
            >
              <MenuItem onClick={handleSortMenuClose} value="Default" disableRipple><p>Default</p></MenuItem>
              <MenuItem onClick={handleSortMenuClose} value="Release date" disableRipple><p>Release date</p></MenuItem>
              <MenuItem onClick={handleSortMenuClose} value="Rating" disableRipple><p>Rating</p></MenuItem>
            </Menu>
          </div>
        </div>
      </body>
    </>
  )
}

export default Movies