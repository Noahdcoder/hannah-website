import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import Typewriter from "typewriter-effect";

export default function Gallery({ data, services }) {
  return (
    <>
      <Head>
        <title>Hannah Aghedo - Gallery</title>
        <meta
          name="description"
          content="Hannah Aghedo - An Outstanding Legal Firm"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header data={data} />
      <div className="flex flex-col justify-center items-center text-center h-screen bg-tuatara text-white text-4xl">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter

              .typeString("Stay Tuned")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Gallery will be updated soon...")
              .start();
          }}
        />
      </div>
      <Footer services={services} />
    </>
  );
}

export async function getStaticProps() {
  const { nav_links, services, blogs } = await import("/data/data.json");
  return {
    props: {
      data: nav_links,
      services: services,
    },
  };
}
