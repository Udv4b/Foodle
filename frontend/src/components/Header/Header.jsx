import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your food here</h2>
        <p>We deliver your food at your doorstep</p>
        <button className='view-btn'>View Menu</button>
      </div>
    </div>
  )
}

export default Header