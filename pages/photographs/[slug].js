import { getAllArtworkWithSlug, getGallery } from 'lib/api'
import Layout from '@/components/Layout'
import LightboxModal from '@/components/LightboxModal'

export default function Prints({ gallery }) {
  return (
    <Layout>
      <LightboxModal gallery={gallery} />
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const gallery = await getGallery(params.slug, preview)
  return {
    props: { preview, gallery },
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
