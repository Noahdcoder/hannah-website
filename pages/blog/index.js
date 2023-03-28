import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import Link from "next/link";

export default function BlogsMain({ data, services, blogs }) {
  return (
    <>
      <Head>
        <title>Hannah Aghedo - Blog</title>
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
      <main className="p-8 space-y-4">
        <h1 className="text-center text-3xl font-bold">Blogs</h1>
        <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:space-x-4 md:grid-cols-2">
          {blogs.map((blog) => {
            const { id, title, image, paragraphs } = blog;
            return (
              <div className="bg-white space-y-4 shadow-lg" key={id}>
                <img src={image} className="h-48 w-full" />
                <div className="px-8 pb-8 space-y-4">
                  <h4 className="text-2xl font-bold text-gray">{title}</h4>
                  <p>{`${paragraphs[0].content.substring(0, 200)} ...more`}</p>
                  <div className="flex justify-center">
                    <Link href={`/blog/${id}`} legacyBehavior>
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
  const { nav_links, services, blogs } = await import("/data/data.json");
  return {
    props: {
      data: nav_links,
      services: services,
      blogs: blogs,
    },
  };
}
