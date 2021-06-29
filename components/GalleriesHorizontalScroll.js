import React from 'react'
import { imageBuilder } from 'lib/sanity'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HorizontalScroll({ titles, images, content }) {
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    scroll && window.addEventListener('wheel', handleWheel, { passive: false })
  }, [delta])

  const handleWheel = (e) => {
    if (!e.deltaY) {
      return
    }
    e.currentTarget.scrollLeft += e.deltaY + e.deltaX
    e.preventDefault()
  }

  const handleClick = (image, idx) => {
    console.log(image, idx)
  }

  return (
    <main
      onWheel={(e) =>
        setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      }
      className="flex-1 overflow-y-hidden flex pb-10"
    >
      {images.map((image, idx) => (
        <div className="min-w-max">
          <Link href={`/${content[idx].category}/${content[idx].slug.current}`}>
            <a>
              <img
                onClick={() => handleClick(image, idx)}
                style={{ height: '500px' }}
                key={image._key}
                src={imageBuilder(image.asset).url()}
                alt="Adam Finkelston"
                className=""
              />
              <div className="flex relative left-24 justify-between w-80 bg-gray-100 gap-10">
                <h1 className="italic">{titles[idx]}</h1>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </main>
  )
}
