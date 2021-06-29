import React from 'react'
import { imageBuilder } from 'lib/sanity'
import { useEffect, useState } from 'react'

export default function HorizontalScroll({ images, handleLightbox }) {
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    scroll && window.addEventListener('wheel', handleWheel, { passive: false })
    scroll &&
      window.addEventListener('keydown', handleKeyDown, { passive: false })
  }, [delta])

  const handleKeyDown = (e) => {
    console.log(e.which)
  }
  const handleWheel = (e) => {
    if (!e.deltaY) {
      return
    }
    e.currentTarget.scrollLeft += e.deltaY + e.deltaX
    e.preventDefault()
  }

  return (
    <main
      onWheel={(e) =>
        setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      }
      className="flex-1 overflow-y-hidden flex pb-10 mt-20"
    >
      {images.map((image, idx) => (
        <div
          onClick={() => handleLightbox(idx)}
          key={idx}
          className="min-w-max"
        >
          <img
            style={{ height: '500px' }}
            src={imageBuilder(image.asset).url()}
            alt="Adam Finkelston"
            className=""
          />
        </div>
      ))}
    </main>
  )
}
