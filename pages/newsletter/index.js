import {
  getLandingPage,
  getAllArt,
  getAboutPage,
  getContactPage,
} from '../../lib/api'
import LandingPageImages from '@/components/LandingPageImages'
import LandingPageNav from '@/components/LandingPageNav'
import LandingPageName from '@/components/LandingPageName'
import Newsletter from '@/components/Newsletter'
import LandingPageLayout from '@/components/LandingPageLayout'

export default function Home({ content, art, about, contact }) {
  const { artPieces, color, name } = content[0]
  const aboutBlockContent = about[0].body
  const avatarImage = about[0].main_image.asset
  const contactBlockContent = contact[0].body

  return (
    <LandingPageLayout>
      <LandingPageImages artPieces={artPieces} />
      <Newsletter />
      <article className="z-50 relative bg-white bg-opacity-100 -top-16 -mb-20">
        <LandingPageName color={color} name={name} />
        <LandingPageNav />
      </article>
    </LandingPageLayout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getLandingPage(preview)
  const art = await getAllArt(preview)
  const about = await getAboutPage(preview)
  const contact = await getContactPage(preview)
  return {
    props: { preview, content, art, about, contact },
    revalidate: 1,
  }
}
