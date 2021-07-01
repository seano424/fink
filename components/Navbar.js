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
    <section
      className="flex flex-row-reverse xl:flex-col items-center w-full mb-10 xl:mb-0 xl:py-8  justify-between
    "
    >
      <div className="xl:self-center pr-10 xl:pr-0">
        <NavLogo />
      </div>
      <nav className="flex items-center  xl:px-10 xl:pt-4 justify-between">
        <NavLinks prints={prints} photographs={photographs} />
        <Hamburger toggle={toggle} open={open} />
        <MobileNavbar open={open} toggle={toggle} />
      </nav>
    </section>
  )
}
