import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-blue-950 flex justify-between item-center px-4 h-14 text-white'>
        <div className='logo font-bold mt-3'>
          <span className='text-green-700'>&lt;</span>
            Pass<span className='text-green-700'>Op</span>
          <span className='text-green-700'>/&gt;</span>
        </div>
        <ul className='text-center mt-3'>
            <li className='flex gap-6'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
