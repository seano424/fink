import { getLandingPage, getAllArt } from '../lib/api'
import LandingPageImages from '@/components/LandingPageImages'
import LandingPageNav from '@/components/LandingPageNav'
import LandingPageName from '@/components/LandingPageName'
import LandingPageBody from '@/components/LandingPageBody'
import LandingPageGalleries from '@/components/LandingPageGalleries'
import MailChimpFormContainer from '@/components/MailChimpFormContainer'

export default function Home({ content, art }) {
  const { artPieces, color, name } = content[0]

  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">
        <LandingPageImages artPieces={artPieces} />
        <div className="absolute bottom-1/3 md:w-6/12 md:-right-20 z-50">
          <MailChimpFormContainer />
        </div>
        <article className="z-50 relative bg-white bg-opacity-90 -top-20 -mb-20">
          <LandingPageName color={color} name={name} />
          <LandingPageNav />
          <LandingPageBody>
            <LandingPageGalleries art={art} />
          </LandingPageBody>
        </article>
      </main>
    </div>
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
