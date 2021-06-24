import { getAllArtworkWithSlug, getGallery, getLandingPage } from "lib/api";
import Layout from "@/components/Layout";
import LightboxModal from "@/components/LightboxModal";

export default function Prints({ gallery, landingPage }) {
  const { artPieces } = landingPage[0];
  return (
    <Layout artPieces={artPieces}>
      <LightboxModal gallery={gallery} />
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const gallery = await getGallery(params.slug, preview);
  const landingPage = await getLandingPage(preview);
  return {
    props: { preview, gallery, landingPage },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allArtwork = await getAllArtworkWithSlug();
  return {
    paths:
      allArtwork?.map((art) => ({
        params: {
          slug: art.slug,
        },
      })) || [],
    fallback: false,
  };
}
