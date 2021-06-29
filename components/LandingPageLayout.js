import React from 'react'

export default function LandingPageLayout({ children }) {
  return (
    <div className="flex max-h-screen flex-col">
      <main className="flex-1 ">{children}</main>
    </div>
  )
}
