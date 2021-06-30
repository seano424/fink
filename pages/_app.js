import '../styles/globals.css'
import 'react-image-lightbox/style.css'
import SEO from '@/components/SEO'
import Layout from '@/components/Layout'
import { CartProvider } from '@/context/Store'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <SEO title={process.env.siteTitle} />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
