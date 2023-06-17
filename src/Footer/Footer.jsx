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

const Footer = ({page, numOfPages, handlePageNumOnChange}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const sortMenuOpen = Boolean(anchorEl);

  const handleSortMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="pagination border-t-2 border-gray-200/50 flex sm:items-center justify-between p-2 sm:px-20" style={{ height: "10vh" }}>
      <Pagination
        count={numOfPages}
        sx={paginationStyles}
        page={page}
        color="primary"
        onChange={handlePageNumOnChange} 
      />
      <div>
        <Button
          className="!bg-white border-2 border-gray-400 !capitalize rounded-sm"
          aria-controls={sortMenuOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={sortMenuOpen ? 'true' : undefined}
          onClick={handleSortMenuOpen}><p style={{ fontFamily: "Clash Display" }}>Sort by:&nbsp;&nbsp;default</p></Button>
        <Menu
          id="basic-menu"
          open={sortMenuOpen}
          onClose={handleSortMenuClose}
          anchorEl={anchorEl}
          sx={menuStyles}
          value="Release date"
        // onChange={handlePageSizeOnChange}
        >
          <MenuItem onClick={handleSortMenuClose} value="Default" disableRipple><p>Default</p></MenuItem>
          <MenuItem onClick={handleSortMenuClose} value="Release date" disableRipple><p>Release date</p></MenuItem>
          <MenuItem onClick={handleSortMenuClose} value="Rating" disableRipple><p>Rating</p></MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Footer