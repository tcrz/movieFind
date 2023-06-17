import React from 'react'
import { Button, InputAdornment, OutlinedInput } from '@mui/material'
import { AiOutlineSearch } from 'react-icons/ai';
import "./NavBar.css"
import logo from './logo.png'

const NavBar = ({ handleQueryOnChange, handleSearchButtonOnClick, query }) => {
  return (
    <>
      <nav className="main-nav w-full bg-noiseBg flex items-center justify-between borderr-2 border-red-300 px-4 pt-0 bg-red-400 sm:px-7" style={{ height: "9vh" }}>
        {/* Logo and searchbar */}
        <div className="borderr-2 hidden sm:flex items-center gapp-3 " style={{ height: "100%" }}>
          <div className='cursor-pointer w-full flex items-center gap-3'>
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
                  className={`cursor-default !px-0 !py-2 text-sm !rounded-full ${!query ? "!text-gray-600 !bg-gray-300" : "cursor-pointer !text-white !bg-blue-600 hover:!bg-blue-700"}`}
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)" }}
                  onClick={handleSearchButtonOnClick}
                  disabled={query.trim().length === 0}>
                  <AiOutlineSearch />
                </Button>
              </InputAdornment>
            } />
        </div>
        <div className="borderr logo" style={{ borderColor: "#868686", padding: ".3em" }}>
          <img src={logo} alt="pokemon group" className="borrder border-orange-400" />
        </div>
      </nav>
    </>
  )
}

export default NavBar