import { getLandingPage, getAllArt } from '../lib/api'
import LandingPageImages from '@/components/LandingPageImages'
import LandingPageNav from '@/components/LandingPageNav'
import LandingPageName from '@/components/LandingPageName'
import MailChimpFormContainer from '@/components/MailChimpFormContainer'
import LandingPageLayout from '@/components/LandingPageLayout'
export default function Home({ content, art }) {
  const { artPieces, color, name } = content[0]

  return (
    <LandingPageLayout>
      <LandingPageImages artPieces={artPieces} />
      <div className="absolute bottom-1/3 right-1/4 w-6/12">
        <MailChimpFormContainer />
      </div>
      <article className="z-50 relative bg-white bg-opacity-90 -top-20 -mb-20">
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
