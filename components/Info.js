import React from 'react'
import Markup from './Markup'
import { imageBuilder } from 'lib/sanity'

export default function Info({ avatar, title, blockContent }) {
  return (
    <section
      id="about"
      className="grid xl:grid-cols-2 md:my-28 mx-10 md:mx-28 lg:mx-52"
    >
      <h1 className="uppercase text-center font-bold text-base tracking-widest">
        {title}
      </h1>
      <div className="flex">
        {avatar && (
          <img
            className="w-40 h-40"
            src={imageBuilder(avatar).url()}
            alt={'Adam Finkelston'}
          />
        )}
        <Markup blockContent={blockContent} />
      </div>
    </section>
  )
}
