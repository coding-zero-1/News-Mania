import React from 'react'

function Navbar() {
  return (
    <header className='w-full h-[8.5%] bg-black text-white'>
        <nav className='w-full h-full'>
            <ul className='w-full h-full flex items-center p-1 justify-center'>
                <li>
                    <h1 className='text-2xl bg-[#c95454] p-1 rounded'>NEWS Mania</h1>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar