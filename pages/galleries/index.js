import React from 'react'
import { getAllArt, getLandingPage } from '../../lib/api'
import Layout from '@/components/Layout'
import GalleriesHorizontalScroll from '@/components/GalleriesHorizontalScroll'
import HorizontalScroll from '@/components/HorizontalScroll'
import Link from 'next/link'

export default function galleries({ content, landingPage }) {
  const artPieces = landingPage[0].artPieces.map((art) => art.asset)
  const images = content.map((c) => c.featureImage)
  const titles = content.map((c) => c.title)
  const photographs = content.filter((art) => art.category === 'photographs')
  const prints = content.filter((art) => art.category === 'prints')
  return (
    <Layout photographs={photographs} prints={prints} artPieces={artPieces}>
      <main className="pt-10 md:pt-0">
        <HorizontalScroll content={content} images={images} titles={titles} />
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
