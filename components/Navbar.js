import { useState } from 'react'
import Hamburger from './Hamburger'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'

export default function Navbar({ prints, photographs }) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <nav className="flex w-full h-12 justify-between bg-gray-200">
      <NavLogo />
      <NavLinks prints={prints} photographs={photographs} />
      <Hamburger toggle={toggle} open={open} />
      <MobileNavbar open={open} toggle={toggle} />
    </nav>
  )
}
