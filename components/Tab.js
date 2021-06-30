import { useState } from 'react'
import Link from 'next/link'

export default function Tab({ items }) {
  const [openTab, setOpenTab] = useState(false)
  return (
    <div
      onMouseOver={() => setOpenTab(true)}
      onMouseLeave={() => setOpenTab(false)}
      className="flex flex-col cursor-pointer group"
    >
      <p className="mt-4 capitalize group-hover:underline group-hover:text-gray-400">
        {items[0].category}
      </p>
      <div
        className={`${
          openTab ? 'opacity-100' : 'opacity-0'
        } transition-all duration-100 ease-linear absolute top-14 z-50 bg-gray-100 font-semibold w-52 py-8 px-4 text-lg flex flex-col`}
      >
        {items &&
          items.map((item) => (
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
