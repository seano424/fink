import Link from 'next/link'

export default function MobileNavbar({ open, toggle }) {
  return (
    <>
      {open && (
        <div className="absolute w-full top-12 bg-gray-100 h-screen z-50">
          <div className="flex flex-col items-center pt-20 gap-7">
            <Link href="/galleries">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase"
              >
                Galleries
              </a>
            </Link>
            <Link href="/shop">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase"
              >
                Shop local
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase"
              >
                About the artist
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase"
              >
                Contact the artist
              </a>
            </Link>
            <Link href="/newsletter">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase"
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
