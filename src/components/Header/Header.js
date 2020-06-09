import React from 'react'

import "./Header.css"

const Header = () => 
    <div className="Header">
        <div className="Logo">
            <span role="img" aria-label="Super Amazing Most Wonderful Awesome Note App Logo">📝</span>
        </div>
        <span className="StickyName">
            <input placeholder="Enter Name" maxLength="30"></input>
        </span>
        <div className="Menu">☰</div>
    </div>

export default Header