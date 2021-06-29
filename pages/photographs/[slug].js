import { getAllArtworkWithSlug, getGallery, getAllArt } from 'lib/api'
import Layout from '@/components/Layout'
import LightboxModal from '@/components/LightboxModal'
import Link from 'next/link'
import { imageBuilder } from 'lib/sanity'
import Image from 'next/image'

export default function Prints({ gallery, art }) {
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  const { artPieces, title, category, slug } = gallery.results[0]
  return (
    <Layout photographs={photographs} prints={prints}>
      <LightboxModal gallery={gallery} />
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const gallery = await getGallery(params.slug, preview)
  const art = await getAllArt(preview)
  return {
    props: { preview, gallery, art },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allArtwork = await getAllArtworkWithSlug()
  return {
    paths:
      allArtwork?.map((art) => ({
        params: {
          slug: art.slug,
        },
      })) || [],
    fallback: false,
  }
}
