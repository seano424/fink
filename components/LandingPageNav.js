import React from "react";
import Link from "next/link";

export default function LandingPageNav() {
  return (
    <nav className="tracking-wide text-gray-800 border-b border-gray-200 bg-white relative py-8 flex gap-10 font-semibold text-sm">
      <div className="flex justify-around w-full">
        <div className="gap-8 flex">
          <Link href="/products">
            <a>Galleries</a>
          </Link>
          <Link href="/products">
            <a>About The Artist</a>
          </Link>
          <Link href="/products">
            <a>Contact & Newsletter Signup</a>
          </Link>
          <Link href="/products">
            <a>Shop</a>
          </Link>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div>
    </nav>
  );
}
