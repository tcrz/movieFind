import React from 'react'
import logo from '../NavBar/logo.png'

const EmptyView = () => {
  return (
    <div className="flex flex-col items-center justify-around" style={{height: "80vh"}}>
      <div className="borderr-2 border-black flex flex-col items-center">
        <img className="" src={logo} alt="moviefind logo" style={{width:"50%", height: "50%"}}/>
        <p className="text-xl text-gray-500">Sorry, no results found for this query.</p>
        <p className="text-xl text-gray-500">Search for something else?</p>
      </div>
      
    </div>
  )
}

export default EmptyView