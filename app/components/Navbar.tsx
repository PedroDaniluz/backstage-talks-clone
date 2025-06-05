import React from 'react'

export default function Navbar() {
  return (
    <header className="absolute w-full top-0 left-0">
        <nav className={`relative flex items-center justify-between p-6 bg-transparent`}>
            <h1 className="text-4xl font-bold">BACKSTAGE TALKS</h1>
            <a href='#' className="no-underline text-black text-lg">info@backstagetalks@gmail.com</a>
        </nav>
    </header>
  )
}
