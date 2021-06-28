import React from 'react'
import MailChimpFormContainer from './MailChimpFormContainer'

export default function LandingPageName({ color, name }) {
  const nameStyle = {
    color: color,
  }

  return (
    <div
      style={nameStyle}
      className="absolute text-4xl tracking-widest font-black -top-full md:-top-52 md:mt-32 uppercase pl-20 py-5 w-full"
    >
      <h1 className="hover:opacity-70 cursor-pointer">{name}</h1>
    </div>
  )
}
