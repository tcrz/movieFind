import React, { useState } from 'react'
import { Pagination, Button, Menu, MenuItem } from '@mui/material'

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

const Footer = ({page, numOfPages, handlePageChange}) => {
  return (
    <div className="pagination border-t-2 border-gray-200/50 flex sm:items-center justify-between p-2 sm:px-20" style={{ height: "10vh" }}>
      <Pagination
        count={numOfPages}
        sx={paginationStyles}
        page={page}
        color="primary"
        onChange={handlePageChange} 
      />
    </div>
  )
}

export default Footer