import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import { getAllProductsInCollection, getProducts } from '@/lib/shopify'
import { getAllArt, getLandingPage } from '../../lib/api'
import Layout from '@/components/Layout'

function IndexPage({ products, art, landingPage, moreProducts }) {
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  const artPieces = landingPage[0].artPieces.map((art) => art.asset)
  return (
    <Layout artPieces={artPieces} photographs={photographs} prints={prints}>
      <div className="mx-auto max-w-6xl">
        <StoreHeading />
        <ProductListings products={products} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const products = await getAllProductsInCollection()
  const moreProducts = await getProducts()
  const art = await getAllArt(preview)
  const landingPage = await getLandingPage(preview)
  return {
    props: {
      products,
      art,
      landingPage,
      moreProducts,
    },
  }
}

export default IndexPage
