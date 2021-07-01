import React from 'react'
import { imageBuilder } from 'lib/sanity'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HorizontalScroll({
  titles,
  images,
  content,
  handleLightbox,
}) {
  const [lastScrollTop, setLastScrolltop] = useState(0)
  const [isGoingDown, setIsGoingDown] = useState(false)
  const [delta, setDelta] = useState(0)
  const [dimensions, setDimensions] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', doSomething)
    window.addEventListener('resize', handleResize)
    if (window.innerWidth > 832) {
      window.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('keypress', handleKey, { passive: false })
    }
  }, [dimensions])

  const handleKey = (e) => {
    console.log(e)
  }

  const handleWheel = (e) => {
    if (!e.deltaY) {
      return
    }
    if (dimensions > 832) {
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX
      e.preventDefault()
    }
  }

  const handleResize = () => {
    setDimensions(window.innerWidth)
  }

  const doSomething = (e) => {
    let st = window.pageYOffset
    if (st > lastScrollTop) {
      // downscroll
      setIsGoingDown(true)
      console.log('going down')
    } else {
      // upscroll
      setIsGoingDown(false)
      console.log('going up')
    }
    setTimeout(() => {
      setLastScrolltop(st || document.documentElement.scrollTop)
    }, 4000)
  }

  return (
    <main
      onWheel={(e) =>
        setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      }
      className="flex-1 overflow-y-hidden flex gap-x-10 md:h-screen"
    >
      {images.map((image, idx) => (
        <div key={idx} className="min-w-max">
          {content ? (
            <Link
              href={`/${content[idx].category}/${content[idx].slug.current}`}
            >
              <a>
                <div
                  className={`flex ${
                    isGoingDown && 'mt-10'
                  } relative shadow-2xl px-8 justify-center w-max bg-gray-100 uppercase tracking-widest m-auto`}
                >
                  <h1 className="italic">{titles[idx]}</h1>
                </div>
                <img
                  // style={{ height: '400px' }}
                  key={image._key}
                  src={imageBuilder(image.asset).url()}
                  alt="Adam Finkelston"
                  className={`${
                    isGoingDown
                      ? 'lg:h-600 md:h-600 sm:h-500 h-300'
                      : 'lg:h-400 md:h-600 sm:h-500 h-300'
                  } transition-all delay-700 duration-1000 ease-in-out`}
                />
              </a>
            </Link>
          ) : (
            <div onClick={() => handleLightbox(idx)} className="cursor-pointer">
              <img
                // style={{ height: '600px' }}
                onScroll={doSomething}
                className={`${
                  isGoingDown ? 'h-600' : 'h-400'
                } transition-all delay-700 duration-1000 ease-in-out`}
                src={imageBuilder(image.asset).url()}
                alt="Adam Finkelston"
              />
              <div className="flex text-sm relative shadow-2xl px-8 py-1 justify-center w-80 bg-gray-100 gap-x-10 uppercase tracking-widest m-auto">
                <h1 className="italic">{image.title}</h1>
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  )
}
