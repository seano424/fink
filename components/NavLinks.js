import React from 'react'
import Link from 'next/link'
import Tab from './Tab'
import { useRouter } from 'next/router'
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from 'react-share'
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share'

export default function NavLinks({ prints, photographs }) {
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
      <Tab items={prints} />
      <Tab items={photographs} />
      <Link href="/shop">
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
        <LinkedinShareButton
          url={url}
          title={'Artwork by Adam Finkelston'}
          image={url}
          children={<LinkedinIcon round={true} size={30} />}
        />
        <EmailShareButton
          url={url}
          title={'Artwork by Adam Finkelston'}
          image={url}
          children={<EmailIcon round={true} size={30} />}
        />
      </div>
    </article>
  )
}
