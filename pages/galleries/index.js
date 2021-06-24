import React from "react";
import { getAllArt, getLandingPage } from "../../lib/api";
import Galleries from "@/components/Galleries";

export default function galleries({ content, landingPage }) {
  return <Galleries content={content} landingPage={landingPage} />;
}

export async function getStaticProps({ preview = false }) {
  const content = await getAllArt(preview);
  const landingPage = await getLandingPage(preview);
  return {
    props: { preview, content, landingPage },
    revalidate: 1,
  };
}
