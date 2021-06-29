import React from 'react'
import { imageBuilder } from 'lib/sanity'
import { useEffect, useState } from 'react'

export default function HorizontalScroll({ images, handleLightbox }) {
  const [delta, setDelta] = useState(0)
  const [dimensions, setDimensions] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (dimensions > 832) {
      window.addEventListener('wheel', handleWheel, { passive: false })
    } else {
      window.removeEventListener('wheel', handleWheel, { passive: false })
    }
  }, [dimensions])

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
      className="flex-1 overflow-y-hidden flex pb-10 mt-20"
    >
      {images.map((image, idx) => (
        <div key={idx} className="min-w-max">
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
