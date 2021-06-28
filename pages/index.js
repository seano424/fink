import { getLandingPage, getAllArt } from '../lib/api'
import LandingPageImages from '@/components/LandingPageImages'
import LandingPageNav from '@/components/LandingPageNav'
import LandingPageName from '@/components/LandingPageName'
import LandingPageBody from '@/components/LandingPageBody'
import LandingPageGalleries from '@/components/LandingPageGalleries'
import MailChimpFormContainer from '@/components/MailChimpFormContainer'
import Image from 'next/image'
import { imageBuilder } from 'lib/sanity'
import { PassiveListener } from 'react-event-injector'
import { useEffect, useState } from 'react'

export default function Home({ content, art }) {
  const { artPieces } = content[0]
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false })
  }, [delta])

  const handleWheel = (e) => {
    if (!e.deltaY) {
      return
    }

    e.currentTarget.scrollLeft += e.deltaY + e.deltaX
    e.preventDefault()
  }

  return (
    <section className="flex h-screen flex-col scroll-box">
      <nav className="fixed flex justify-around pt-6 w-screen gap-7">
        <a href="#">Newsletter</a>
        <a href="#">Prints</a>
        <a href="#">Photography</a>
        <a href="#">Get in touch</a>
        <a href="#">Magazine</a>
        <a href="#">Shop</a>
      </nav>
      <PassiveListener
        onWheel={(e) =>
          setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
        }
      >
        <main className="flex-1 overflow-y-hidden pt-20 flex gap-6 h-2/4">
          {artPieces.map((image) => (
            <img
              style={{ height: '500px' }}
              key={image._key}
              src={imageBuilder(image.asset).url()}
              alt="Adam Finkelston"
            />
          ))}
        </main>
      </PassiveListener>
    </section>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getLandingPage(preview)
  const art = await getAllArt(preview)
  return {
    props: { preview, content, art },
    revalidate: 1,
  }
}

{
  /* <LandingPageImages artPieces={artPieces} />
        <div className="absolute grid grid-cols-5 mr-40 -mb-40 bottom-2/3 z-50">
          <div className="col-span-3"></div>
          <div className="col-span-2">
            <MailChimpFormContainer />
          </div>
        </div>
        <article className="z-50 relative bg-white bg-opacity-90 -top-20 -mb-20">
          <LandingPageName color={color} name={name} />
          <LandingPageNav />
          <LandingPageBody>
            <LandingPageGalleries art={art} />
          </LandingPageBody>
        </article> */
}
