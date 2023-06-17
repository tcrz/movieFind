import React from 'react'
import logo from '../NavBar/logo.png'
import { CircularProgress } from '@mui/material'

const LoadingView = () => {
  return (
    <div className=" flex flex-col items-center justify-around" style={{height: "80vh"}}>
      <div className="borderr-2 border-black flex flex-col items-center">
        <CircularProgress />
        <p className="text-xl text-gray-500">Loading results...</p>
      </div>
      
    </div>
  )
}

export default LoadingView