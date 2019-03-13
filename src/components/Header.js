import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>ProSeleta 2.0 (sketch)</Link>
    </div>
  </nav>
)
 
export default Header