import React from 'react'
import { InputAdornment, OutlinedInput } from '@mui/material'
import { AiOutlineSearch } from 'react-icons/ai';
import "./NavBar.css"
import logo from './logo.png'

const NavBar = ({handleSearchButtonOnClick, query}) => {
  return (
    <>
      <nav className="main-nav w-full bg-noiseBg flex items-center justify-between borderr-2 border-red-300 px-7 pt-0 bg-red-400" style={{ height: "9vh" }}>
        {/* Logo and searchbar */}
        <div className="borderr-2 flex items-center gapp-3" style={{ height: "100%" }}>
          <div className='cursor-pointer w-full flex items-center gap-3'>
            <h3 className="text-xl font-semibold">Movie&nbsp;<span className="text-blue-600">Find</span></h3>
          </div>
        </div>
        <div className="borderr" style={{ width: "27%" }}>
          <OutlinedInput className="bg-noiseBg input-field invisible sm:visible" style={{ width: "100%" }} placeholder="Search movie"
            endAdornment={<InputAdornment position="end"><p className={`cursor-pointer text-sm text-white rounded-full ${!query ? "bg-gray-300" : "bg-blue-600"} hover:bg-blue-900`} style={{padding: ".6em .8em", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"}}><AiOutlineSearch /></p></InputAdornment>} />
        </div>
        <div className="borderr logo" style={{ borderColor: "#868686", padding: ".3em" }}>
          <img src={logo} alt="pokemon group" className="borrder border-orange-400" />
        </div>
      </nav>
    </>
  )
}

export default NavBar