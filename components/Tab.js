import { useState } from 'react'
import Link from 'next/link'

export default function Tab({ links }) {
  const [openTab, setOpenTab] = useState(false)
  links && console.log(links[0].category)
  return (
    <div
      onMouseOver={() => setOpenTab(true)}
      onMouseLeave={() => setOpenTab(false)}
      className="flex flex-col cursor-pointer group"
    >
      {links && <p className="mt-4 capitalize">{links[0].category}</p>}
      <div
        className={`${
          openTab ? 'opacity-100' : 'opacity-0 h-0'
        } transition-all duration-300 ease-linear absolute top-14 z-50 bg-gray-100 font-semibold w-52 py-8 px-4 text-lg flex flex-col`}
      >
        {links &&
          links.map((item) => (
            <Link
              key={item._id}
              href={`/${item.category}/${item.slug.current}`}
            >
              <a className="hover:text-gray-400 py-1">{item.title}</a>
            </Link>
          ))}
      </div>
    </div>
  )
}
