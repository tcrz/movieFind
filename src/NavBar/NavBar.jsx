import React, { useState } from 'react'
import { Menu, MenuItem, Button, InputAdornment, OutlinedInput } from '@mui/material'
import { AiOutlineSearch, AiFillFilter} from 'react-icons/ai';
import "./NavBar.css"

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

const NavBar = ({ handleQueryOnChange, handleSearchButtonOnClick, query, setSortType, sortType }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const sortMenuOpen = Boolean(anchorEl);

  const handleSetSortType = (type) => {
    setSortType(type)
    handleSortMenuClose()
  }

  const handleSortMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="main-nav w-full bg-noiseBg flex items-center justify-between borderr-2 border-red-300 px-4 pt-0 bg-red-400 sm:px-7 gap-2" style={{ height: "9vh" }}>
        {/* Logo and searchbar */}
        <div className="borderr-2 hidden sm:flex items-center gapp-3 " style={{ height: "100%" }}>
          <div className='w-full flex items-center gap-3'>
            <h3 className="text-xl font-semibold">Movie&nbsp;<span className="text-blue-600">Find</span></h3>
          </div>
        </div>
        <div className="borderr w-3/4 sm:w-2/5">
          <OutlinedInput
            className="bg-noiseBg input-field"
            style={{ width: "100%" }}
            placeholder="Search movie"
            value={query}
            onChange={handleQueryOnChange}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  className={`cursor-default !px-0 !py-2 text-sm !rounded-full ${!query.trim() ? "!text-gray-600 !bg-gray-300" : "cursor-pointer !text-white !bg-blue-600 hover:!bg-blue-700"}`}
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)" }}
                  onClick={handleSearchButtonOnClick}
                  disabled={query.trim().length === 0}>
                  <AiOutlineSearch />
                </Button>
              </InputAdornment>
            } />
        </div>
        <div>
          <Button
            className="!capitalize rounded-sm !flex !items-center gap-1 !bg-blue-600 !text-white"
            aria-controls={sortMenuOpen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={sortMenuOpen ? 'true' : undefined}
            onClick={handleSortMenuOpen}>
              <AiFillFilter />
              <p className="text-xs" style={{ fontFamily: "Clash Display" }}> Sort:&nbsp;&nbsp;{sortType}</p></Button>
          <Menu
            id="basic-menu"
            open={sortMenuOpen}
            onClose={handleSortMenuClose}
            anchorEl={anchorEl}
            sx={menuStyles}
            value="Release date"
          >
            <MenuItem onClick={()=>handleSetSortType("Default")} value="Default" disableRipple><p>Default</p></MenuItem>
            <MenuItem onClick={()=>handleSetSortType("Year")} value="Release date" disableRipple><p>Release year</p></MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  )
}

export default NavBar