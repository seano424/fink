import React from 'react'
import { getAllArt, getContactPage, getLandingPage } from '../../lib/api'
import Layout from '@/components/Layout'
import Info from '@/components/Info'

export default function About({ art, info, landingPage }) {
  const blockContent = info[0].body
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  const artPieces = landingPage[0].artPieces.map((art) => art.asset)
  return (
    <Layout artPieces={artPieces} photographs={photographs} prints={prints}>
      <main className="mt-20">
        <Info title={'About the Artist'} blockContent={blockContent} />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview)
  const info = await getContactPage(preview)
  const landingPage = await getLandingPage(preview)
  return {
    props: { preview, art, info, landingPage },
    revalidate: 1,
  }
}
