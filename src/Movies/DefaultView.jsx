import React from 'react'
import logo from '../NavBar/logo.png'

const DefaultView = () => {
  return (
    <div className="flex flex-col items-center justify-around" style={{height: "80vh"}}>
      <div className="borderr-2 border-black flex flex-col items-center">
        <img className="" src={logo} alt="moviefind logo" style={{width:"40%", height: "40%"}}/>
        <h1 className="font-semibold">Movie&nbsp;<span className="text-blue-600">Find</span></h1>
        <p className="text-xl text-gray-500">Search for movies and check out some results.</p>
        <p className="text-xl text-gray-500">Cheers!</p>
      </div>
      
    </div>
  )
}

export default DefaultView