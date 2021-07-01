import Link from 'next/link'
import { imageBuilder } from '@/lib/sanity'

export default function HorizontalImages({
  images,
  titles,
  content,
  handleLightbox,
  handleScrollResizeImage,
  isGoingDown,
  setDelta,
}) {
  return (
    <main
      // Uncomment this if you want down scroll to also scroll right...
      // onWheel={(e) =>
      //   setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      // }
      className="flex-1 overflow-y-hidden flex gap-x-10 md:h-screen pt-28 lg:pt-0"
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
                onScroll={handleScrollResizeImage}
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
