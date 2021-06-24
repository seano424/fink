import LandingPageImages from "@/components/LandingPageImages";
import BackgroundImages from "./BackgroundImages";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../components/Meta";

export default function Layout({ children, artPieces }) {
  const { pathname } = useRouter();

  return (
    <>
      <Meta />
      <section
        className={`fixed transition-opacity opacity-0 md:opacity-100 md:flex hidden duration-500 ease-in-out z-20  text-gray-700 text-sm font-mono flex-col flex-shrink-0 min-h-full md:overflow-x-hidden md:w-64 pt-8  dark:text-white`}
      >
        <h1 className="pl-4 text-4xl font-black pb-10">Adam Finkelston</h1>

        <Link href="/galleries">
          <a
            // onClick={toggleOpen}
            className={`mb-1 capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === "/galleries" && "text-design-1 underline"
            }`}
          >
            Galleries
          </a>
        </Link>
        <Link href="/prints">
          <a
            // onClick={toggleOpen}
            className={`mb-1 capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === "/prints" && "text-design-1 underline"
            }`}
          >
            Prints
          </a>
        </Link>
        <Link href="/photographs">
          <a
            // onClick={toggleOpen}
            className={`mb-1 capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === "/photographs" && "text-design-1 underline"
            }`}
          >
            Photographs
          </a>
        </Link>
        <Link href="/shop">
          <a
            // onClick={toggleOpen}
            className={`mb-1 mt-10 capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === "/shop" && "text-design-1 underline"
            }`}
          >
            Shop
          </a>
        </Link>

        <Link href="/about">
          <a
            // onClick={toggleOpen}
            className={`mb-1 capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === "/about" && "text-design-1 underline"
            }`}
          >
            about the artist
          </a>
        </Link>
        <Link href="/contact">
          <a
            // onClick={toggleOpen}
            className={`mb-1 capitalize  pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-400 hover:underline ${
              pathname === "/contact" && "text-design-1 underline"
            }`}
          >
            contact & newsletter signup
          </a>
        </Link>
      </section>
      <section className="md:ml-64 h-screen ">
        {artPieces && <BackgroundImages artPieces={artPieces} />}
        {children}
      </section>
    </>
  );
}
