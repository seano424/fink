import { getLandingPage, getAllArt } from '../../lib/api'
import LandingPageImages from '@/components/LandingPageImages'
import LandingPageNav from '@/components/LandingPageNav'
import LandingPageName from '@/components/LandingPageName'
import Newsletter from '@/components/Newsletter'
import LandingPageLayout from '@/components/LandingPageLayout'
export default function Home({ content, art }) {
  const { artPieces, color, name } = content[0]

  return (
    <LandingPageLayout>
      <LandingPageImages artPieces={artPieces} />
      <Newsletter />
      <article className="z-50 absolute bg-white bg-opacity-90 bottom-20 -mb-20 w-full">
        <LandingPageName color={color} name={name} />
        <LandingPageNav />
      </article>
    </LandingPageLayout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getLandingPage(preview)
  const art = await getAllArt(preview)
  return {
    props: { preview, content, art },
    revalidate: 1,
  }
}
