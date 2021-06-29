import Meta from '../components/Meta'
import Navbar from './Navbar'

export default function Layout({ children, artPieces, photographs, prints }) {
  return (
    <>
      <Meta />
      <section
        className={`z-50 flex relative top-8 bg-white text-gray-700 text-sm justify-around dark:text-white w-screen`}
      >
        <Navbar photographs={photographs} prints={prints} />
      </section>
      <section>{children}</section>
    </>
  )
}
