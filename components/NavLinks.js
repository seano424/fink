import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/context/Store'
import { FaShoppingCart } from 'react-icons/fa'
import Tab from './Tab'
import { useRouter } from 'next/router'
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from 'react-share'
import { FacebookIcon, TwitterIcon, PinterestIcon } from 'react-share'

export default function NavLinks({ prints, photographs }) {
  const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    let numItems = 0
    cart.forEach((item) => {
      numItems += item.variantQuantity
    })
    setCartItems(numItems)
  }, [cart])
  const { pathname } = useRouter()
  const router = useRouter()
  const url = `https://fink.vercel.app${router.asPath}`

  return (
    <article className="hidden xl:flex gap-7">
      <Link href="/galleries">
        <a
          className={`capitalize pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
            pathname === '/galleries' && 'text-design-1 underline'
          }`}
        >
          Galleries
        </a>
      </Link>
      <Tab links={prints} />
      <Tab links={photographs} />
      <Link href="/products">
        <a
          className={`capitalize pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
            pathname === '/shop' && 'text-design-1 underline'
          }`}
        >
          Shop
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`capitalize pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
            pathname === '/about' && 'text-design-1 underline'
          }`}
        >
          about the artist
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={`capitalize pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
            pathname === '/contact' && 'text-design-1 underline'
          }`}
        >
          contact
        </a>
      </Link>
      <Link href="/newsletter">
        <a
          className={`capitalize pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
            pathname === '/newsletter' && 'text-design-1 underline'
          }`}
        >
          newsletter
        </a>
      </Link>
      <div className="self-center flex gap-2">
        <FacebookShareButton
          url={url}
          title={'Artwork by Adam Finkelston'}
          image={url}
          children={<FacebookIcon round={true} size={30} />}
        />

        <TwitterShareButton
          url={url}
          title={'Artwork by Adam Finkelston'}
          image={url}
          children={<TwitterIcon round={true} size={30} />}
        />

        <PinterestShareButton
          url={url}
          description={'Artwork by Adam Finkelston'}
          media={'https://imgur.com/a/L2zOF7F'}
          children={<PinterestIcon round={true} size={30} />}
        />
        <Link href="/cart" passHref>
          <a className=" relative" aria-label="cart">
            <FaShoppingCart className="w-6 m-auto" />
            {cartItems === 0 ? null : (
              <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
                {cartItems}
              </div>
            )}
          </a>
        </Link>
      </div>
    </article>
  )
}
