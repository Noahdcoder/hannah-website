import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import Link from "next/link";
import { social } from "@/data/data";
import { FaBullseye } from "react-icons/fa";

export default function SingleService({ data, services, nav_links }) {
  const { id, title, image, paragraphs } = data;
  const otherServices = services.filter((filter) => filter.id !== id);
  return (
    <>
      <Head>
        <title>Hannah Aghedo - {title}</title>
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
      <Header data={nav_links} />
      <div className="grid grid-cols-1 p-8 md:p-16 md:grid-cols-3">
        <div className="flex flex-col space-y-4 p-4 md:col-span-2">
          <h4 className="text-4xl font-bold">{title}</h4>
          <img className="h-96" src={image} alt={title} />
          {paragraphs.map((paragraph) => {
            const { id, content } = paragraph;
            return <p key={id}>{content}</p>;
          })}
        </div>
        <div className="flex flex-col p-4">
          <h6 className="text-xl font-bold mb-4">Other Services</h6>
          <div className="flex flex-col mb-8 space-y-2 md:mb-16">
            {otherServices.map((service) => {
              const { id, title } = service;
              return (
                <div key={id}>
                  <div>
                    <Link href={`/services/${id}`} legacyBehavior>
                      <a className="hover:text-rawSienna">
                        <span>
                          <FaBullseye />
                        </span>{" "}
                        {title}
                      </a>
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col space-y-4">
            <h6 className="text-tuatara text-2xl font-bold">Social Links</h6>
            <div className="flex space-x-2">
              {social.map((item) => {
                const { id, url, color, icon } = item;
                return (
                  <div key={id}>
                    <Link href={url} legacyBehavior>
                      <a
                        className="text-4xl hover:opacity-50"
                        style={{ color: color }}
                      >
                        {icon}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 space-y-4 bg-black md:flex-row md:justify-between md:px-32">
        <p className="text-white font-bold">WANT TO MAKE AN ENQUIRY?</p>
        <Link href="/contact" legacyBehavior>
          <a>
            <button className="bg-rawSienna hover:bg-tuatara text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </a>
        </Link>
      </div>
      <Footer services={services} />
    </>
  );
}

export async function getStaticPaths() {
  const { services } = await import("/data/data.json");
  const allPaths = services.map((service) => {
    return {
      params: {
        cat: service.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { services, nav_links } = await import("/data/data.json");

  const serviceData = services.find((service) => id === service.id);

  return {
    props: {
      data: serviceData,
      pageName: id,
      services: services,
      nav_links: nav_links,
    },
  };
}
