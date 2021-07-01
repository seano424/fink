import Link from 'next/link'

export default function MobileNavbar({ open, toggle }) {
  return (
    <>
      {open && (
        <div className="absolute w-full top-28 bg-white bg-opacity-70 h-screen z-50">
          <div className="flex flex-col items-center py-20 mx-20 gap-7 rounded-full bg-white bg-opacity-60">
            <Link href="/galleries">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Galleries
              </a>
            </Link>
            <Link href="/shop">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Shop local
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                About the artist
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Contact the artist
              </a>
            </Link>
            <Link href="/newsletter">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Newsletter
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
