import { getPrints, getLandingPage } from "lib/api";
import Galleries from "@/components/Galleries";

export default function index({ content, landingPage }) {
  return <Galleries content={content} landingPage={landingPage} />;
}

export async function getStaticProps({ preview = false }) {
  const content = await getPrints(preview);
  const landingPage = await getLandingPage(preview);
  return {
    props: { preview, content, landingPage },
    revalidate: 1,
  };
}
