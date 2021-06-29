import React from 'react'
import Tab from './Tab'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({ prints, photographs }) {
  const { pathname } = useRouter()

  return (
    <>
      <Link href="/">
        <a className="text-4xl font-black">Adam Finkelston</a>
      </Link>
      <article className="flex gap-7">
        <Link href="/galleries">
          <a
            className={`capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === '/galleries' && 'text-design-1 underline'
            }`}
          >
            Galleries
          </a>
        </Link>

        <Tab items={prints} />
        <Tab items={photographs} />
        <Link href="/shop">
          <a
            className={`capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === '/shop' && 'text-design-1 underline'
            }`}
          >
            Shop
          </a>
        </Link>

        <Link href="/about">
          <a
            // onClick={toggleOpen}
            className={`capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === '/about' && 'text-design-1 underline'
            }`}
          >
            about the artist
          </a>
        </Link>
        <Link href="/newsletter">
          <a
            // onClick={toggleOpen}
            className={`capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === '/contact' && 'text-design-1 underline'
            }`}
          >
            contact & newsletter signup
          </a>
        </Link>
      </article>
    </>
  )
}
