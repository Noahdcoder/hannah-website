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
          content="Hannah Aghedo | An Outstanding Legal Practitioner"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="title"
          content="An Outstanding Legal Practitioner | Attorney Extra-Ordinaire"
        />
        <meta
          name="keywords"
          content="legal services, law firm, attorney, lawyer, legal advice, litigation, dispute resolution, contract law, business law, corporate law, employment law, labor law, civil litigation, criminal law, family law, estate planning, real estate law, immigration law, intellectual property law, mediation and arbitration"
        />
        <meta
          property="og:title"
          content="Hannah Aghedo | An Outstanding Legal Practitioner"
        />
        <meta property="og:url" content="https://hannahaghedo.com/#about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.hannahaghedo.com/images/general/hannah-picture.jpg"
        ></meta>
        <meta
          property="og:description"
          content="Hannah Aghedo is an experienced and dedicated lawyer who is committed to providing high-quality legal services to her clients. With 10+ years of experience in several areas of law, she has a proven track record of success in handling complex legal matters. Hannah Aghedo takes a personalized approach to every case, working closely with her clients to understand their unique needs and goals. Whether you are facing a legal dispute or need guidance on a business or personal matter, Hannah Aghedo is here to help you achieve the best possible outcome."
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta
          property="twitter:title"
          content="Hannah Aghedo | Outstanding Legal Practitioner"
        ></meta>
        <meta
          property="twitter:description"
          content="Hannah Aghedo is an experienced and dedicated lawyer who is committed to providing high-quality legal services to her clients. With 10+ years of experience in several areas of law, she has a proven track record of success in handling complex legal matters. Hannah Aghedo takes a personalized approach to every case, working closely with her clients to understand their unique needs and goals. Whether you are facing a legal dispute or need guidance on a business or personal matter, Hannah Aghedo is here to help you achieve the best possible outcome."
        ></meta>
        <meta
          property="twitter:image"
          content="https://www.hannahaghedo.com/images/general/hannah-picture.jpg"
        ></meta>
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
