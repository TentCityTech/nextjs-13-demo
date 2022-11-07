'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        value={search}
        placeholder='Enter te Search term'
        onChange={(e) => setSearch(e.target.value)}
        className='border border-slate-800'
      />
      <button
        type='submit'
        className='bg-blue-400 text-white font-bold ml-2 py-2 px-4 rounded-lg'
      >
        Search
      </button>
    </form>
  )
}

export default Search
