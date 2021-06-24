import React from "react";
import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Adam Finkelston</title>
      {/* <link rel="shortcut icon" href="/images/favicon.ico" /> */}
      <meta charset="utf-8"></meta>
      <meta
        name="description"
        content="Adam Finkelston prints and photographs"
      ></meta>
      <meta
        property="og:title"
        content="Adam Finkelston - prints and photographs"
      />
      {/* <meta property="og:image" content="/images/home-image.png" /> */}
      <meta
        property="og:description"
        content="Karrie Marie Baxley is an an artist based in Kansas City. She works in such mediums as paintings, charcoals, and inks."
      />
      <meta
        property="og:site_name"
        content="Adam Finkelston - prints and photographs"
      />
    </Head>
  );
}
