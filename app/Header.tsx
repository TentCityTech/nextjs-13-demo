import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex space-x-3 p-5 bg-blue-400 text-white'>
      <Link href='/' className='px-2 py-1 bg-white text-blue-500 rounded-lg'>
        Home
      </Link>
      <Link
        href='/todos'
        className='px-2 py-1 bg-white text-blue-500 rounded-lg'
      >
        Todo{"'"}s
      </Link>
      <Link
        href='/search'
        className='px-2 py-1 bg-white text-blue-500 rounded-lg'
      >
        Search
      </Link>
    </header>
  )
}

export default Header
