import { useState } from 'react'
import Hamburger from './Hamburger'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'
import { imageBuilder } from 'lib/sanity'

export default function Navbar({ prints, photographs }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <nav className="flex w-full bg-gray-100 h-12 items-center py-10 px-10 justify-between">
      <NavLogo />
      <NavLinks prints={prints} photographs={photographs} />
      <Hamburger toggle={toggle} open={open} />
      <MobileNavbar open={open} toggle={toggle} />
    </nav>
  )
}
