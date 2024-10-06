import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className="header ">
        <div className="container bg-slate-300">
            <div className="logo">
                <img src="https://demo2.cybersoft.edu.vn/logo.png" alt="logo" />
                <div className="search">
                    <input type="text" placeholder="tìm kiếm"/>
                    <SearchIcon/>
                </div>
            </div>
            <div className="menu">
              
            </div>
        </div>
    </div>
  )
}

export default Header