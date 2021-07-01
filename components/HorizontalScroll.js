import { useEffect, useState } from 'react'
import HorizontalImages from './HorizontalImages'

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
    window.addEventListener('scroll', handleScrollDownResizeImage)
    window.addEventListener('resize', handleResize)
    if (window.innerWidth > 832) {
      window.addEventListener('wheel', handleWheel, { passive: false })
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

  const handleScrollDownResizeImage = (e) => {
    let st = window.pageYOffset
    if (st > lastScrollTop) {
      // downscroll
      setIsGoingDown(true)
    } else {
      // upscroll
      setIsGoingDown(false)
    }
    setTimeout(() => {
      setLastScrolltop(st || document.documentElement.scrollTop)
    }, 4000)
  }

  return (
    <HorizontalImages
      images={images}
      setDelta={setDelta}
      titles={titles}
      content={content}
      handleLightbox={handleLightbox}
      handleScrollDownResizeImage={handleScrollDownResizeImage}
      isGoingDown={isGoingDown}
    />
  )
}
