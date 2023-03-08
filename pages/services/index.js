import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import Link from "next/link";

export default function ServicesMain({ data, services }) {
  return (
    <>
      <Head>
        <title>Hannah Aghedo - Services</title>
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
      <main className="p-8 space-y-4">
        <h1 className="text-center text-3xl font-bold">Services</h1>
        <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:space-x-4 md:grid-cols-2">
          {services.map((service) => {
            const { id, title, image, paragraphs } = service;
            return (
              <div className="bg-white space-y-4 shadow-lg" key={id}>
                <img src={image} className="h-48 w-full" />
                <div className="px-8 pb-8 space-y-4">
                  <h4 className="text-2xl font-bold text-gray">{title}</h4>
                  <p>{`${paragraphs[0].content.substring(0, 200)} ...more`}</p>
                  <div className="flex justify-center">
                    <Link href={`/services/${id}`} legacyBehavior>
                      <a>
                        <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                          See More
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer services={services} />
    </>
  );
}

export async function getStaticProps() {
  const { nav_links, services } = await import("/data/data.json");
  return {
    props: {
      data: nav_links,
      services: services,
    },
  };
}
