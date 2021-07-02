import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import { getAllProductsInCollection, getProducts } from '@/lib/shopify'
import { getAllArt } from '../../lib/api'
import Layout from '@/components/Layout'

function IndexPage({ products, art, otherProducts }) {
  console.log(otherProducts)
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  return (
    <Layout photographs={photographs} prints={prints}>
      <div className="mx-auto max-w-6xl">
        <StoreHeading />
        <ProductListings products={products} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const products = await getAllProductsInCollection()
  const otherProducts = await getProducts()
  const art = await getAllArt(preview)
  return {
    props: {
      products,
      art,
      otherProducts,
    },
  }
}

export default IndexPage
