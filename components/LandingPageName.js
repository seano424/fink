import React from 'react'
import MailChimpFormContainer from './MailChimpFormContainer'

export default function LandingPageName({ color, name }) {
  const nameStyle = {
    color: color,
  }

  return (
    <div
      style={nameStyle}
      className="absolute text-4xl tracking-widest font-black -top-full md:-top-48 md:mt-32 uppercase left-10 xl:left-72 hover:opacity-70 cursor-pointer"
    >
      {name}
    </div>
  )
}
