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
        <div className="absolute grid grid-cols-5 mr-40 -mb-40 bottom-2/3 z-50">
          <div className="col-span-3"></div>
          <div className="col-span-2">
            <MailChimpFormContainer />
          </div>
        </div>
        <article className="z-50 relative bg-white bg-opacity-100 -top-16 -mb-20">
          <LandingPageName color={color} name={name} />
          <LandingPageNav title={'View Galleries'} />
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
