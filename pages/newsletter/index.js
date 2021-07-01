import React from 'react'
import { getAllArt, getLandingPage } from '../../lib/api'
import Layout from '@/components/Layout'
import Newsletter from '@/components/Newsletter'
import LandingPageImages from '@/components/LandingPageImages'

export default function About({ art, content }) {
  const { artPieces } = content[0]
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  return (
    <Layout photographs={photographs} prints={prints}>
      <main className="mt-20 z-50">
        <Newsletter />
        <LandingPageImages artPieces={artPieces} />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview)
  const content = await getLandingPage(preview)
  return {
    props: { preview, art, content },
    revalidate: 1,
  }
}

{
}
