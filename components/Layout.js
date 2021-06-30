import Meta from '../components/Meta'
import Navbar from './Navbar'

export default function Layout({ children, artPieces, photographs, prints }) {
  console.log(artPieces)
  return (
    <>
      <Meta />
      <section
        className={`z-50 flex overflow-y-scroll bg-white text-gray-700 text-sm justify-around dark:text-white`}
      >
        <Navbar
          artPieces={artPieces}
          photographs={photographs}
          prints={prints}
        />
      </section>
      <section className="z-50">{children}</section>
    </>
  )
}
