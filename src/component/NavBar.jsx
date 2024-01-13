import React from 'react'
import nav from './nav.css'

const NavBar = () => {
  return (
    <div className='nav '>
      <div className='input'>
      <div>
      <h1>OLX</h1>
      </div>
       <div className='sr'> <input className='srch' type="text" placeholder='Search' />
       <i class="fa-solid fa-magnifying-glass"></i>

       </div>

        <div>
        <input className='find' type="text" placeholder='Find Cars,Mobile Phones & More...'/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className='eng'>
        {/* <i class="fa-solid fa-angle-down"></i> */}
        <input className='inp' type="text" placeholder='SELL'/>
        <i class="fa-solid fa-plus"></i>
        </div>

      </div>
      </div>

   
  )
}

export default NavBar