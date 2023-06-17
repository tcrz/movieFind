import React from 'react'
import logo from '../NavBar/logo.png'

const EmptyView = ({message}) => {
  return (
    <div className="flex flex-col items-center justify-around" style={{height: "80vh"}}>
      <div className="borderr-2 border-black flex flex-col items-center">
        <img className="" src={logo} alt="moviefind logo" style={{width:"40%", height: "50%"}}/>
        <p className="text-xl text-gray-500">{message}</p>
        <p className="text-xl text-gray-500">Search for something else?</p>
      </div>
      
    </div>
  )
}

export default EmptyView