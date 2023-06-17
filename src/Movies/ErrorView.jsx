import React from 'react'
import logo from '../NavBar/logo.png'

const ErrorView = ({refetch}) => {
  return (
    <div className="flex flex-col items-center justify-around" style={{height: "80vh"}}>
      <div className="borderr-2 border-black flex flex-col items-center">
        <img className="" src={logo} alt="moviefind logo" style={{width:"50%", height: "50%"}}/>
        <p className="text-center text-xl text-red-500">Sorry, an error occurred. <span className="text-gray-500 underline cursor-pointer" onClick={refetch}>Try again</span></p>
      </div>
      
    </div>
  )
}

export default ErrorView