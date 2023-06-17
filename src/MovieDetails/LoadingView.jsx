import React from 'react'
import logo from '../NavBar/logo.png'
import { CircularProgress } from '@mui/material'

const LoadingView = () => {
  return (
    <div className="border-2 flex flex-col items-center justify-around w-full" style={{height: "100%"}}>
      <div className="borderr-2 border-black flex flex-col items-center gap-2">
        <CircularProgress />
        <p className="text-sm text-gray-500">Loading movie details...</p>
      </div>
      
    </div>
  )
}

export default LoadingView