import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='p-2 m-2 shadow-md'>

      <ul>
        <Link to= "/"><li>Home</li></Link>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <div className='mt-2'>
        <h1>Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
        </ul>
      </div>
     
    </div>
  )
}

export default Sidebar