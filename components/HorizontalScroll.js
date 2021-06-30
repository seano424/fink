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
  const [delta, setDelta] = useState(0)
  const [dimensions, setDimensions] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (dimensions > 832) {
      window.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('keypress', handleKey, { passive: false })
    } else {
      window.removeEventListener('wheel', handleWheel, { passive: false })
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

  return (
    <main
      onWheel={(e) =>
        setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      }
      className="flex-1 overflow-y-hidden flex gap-10 py-4"
    >
      {images.map((image, idx) => (
        <div key={idx} className="min-w-max">
          {content ? (
            <Link
              href={`/${content[idx].category}/${content[idx].slug.current}`}
            >
              <a>
                <div className="flex relative shadow-2xl px-8 justify-center w-max bg-gray-100 gap-10 uppercase tracking-widest m-auto">
                  <h1 className="italic">{titles[idx]}</h1>
                </div>
                <img
                  style={{ height: '500px' }}
                  key={image._key}
                  src={imageBuilder(image.asset).url()}
                  alt="Adam Finkelston"
                  className=""
                />
              </a>
            </Link>
          ) : (
            <div onClick={() => handleLightbox(idx)} className="cursor-pointer">
              <img
                style={{ height: '480px' }}
                src={imageBuilder(image.asset).url()}
                alt="Adam Finkelston"
              />
              <div className="flex relative shadow-2xl px-8 py-1 justify-center w-80 bg-gray-100 gap-x-10 uppercase tracking-widest m-auto">
                <h1 className="italic">{image.title}</h1>
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  )
}
