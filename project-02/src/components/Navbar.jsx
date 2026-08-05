import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">Logo</div>
        <div className="search-bar">
          <input type="search" name="search" id="search" placeholder='Search Here' />
        </div>
        <ul className='navlist'>
            <li className='list-items'><a href="#">Contact US</a></li>
            <li className='list-items'><a href="#">Login</a></li>
            <li className='list-items'><a href="#">Signup</a></li>
        </ul>
    </div>
  )
}

export default Navbar