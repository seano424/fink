import React from 'react'
import { getAllArt, getLandingPage } from '../../lib/api'
import Layout from '@/components/Layout'
import GalleriesHorizontalScroll from '@/components/GalleriesHorizontalScroll'

export default function galleries({ content, landingPage }) {
  // const artPieces = landingPage[0].artPieces.map((art) => art.asset)
  const images = content.map((c) => c.featureImage)
  const titles = content.map((c) => c.title)
  const photographs = content.filter((art) => art.category === 'photographs')
  const prints = content.filter((art) => art.category === 'prints')
  console.log(content)
  return (
    <Layout photographs={photographs} prints={prints}>
      <main className="mt-20">
        <GalleriesHorizontalScroll
          content={content}
          images={images}
          titles={titles}
        />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getAllArt(preview)
  const landingPage = await getLandingPage(preview)
  return {
    props: { preview, content, landingPage },
    revalidate: 1,
  }
}
