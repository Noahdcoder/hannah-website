import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import HomeWelcome from "@/src/components/HomeWelcome";
import HomeServices from "@/src/components/HomeServices";

import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, services, blogs }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".slide");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("slide-in-right");
        } else {
          reveals[i].classList.remove("slide-in-right");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Hannah Aghedo</title>
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
      <main className="bg-whiteGray flex flex-col">
        <HomeWelcome />
        <HomeServices services={services} isVisible={isVisible} />
        <div className="p-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            className={`slide grid grid-cols-1 bg-white text-3xl gap-8 p-8 rounded-lg shadow-lg text-rawSienna font-bold ${
              isVisible ? "slide-in-right" : ""
            } md:grid-cols-2`}
          >
            <p>
              <span>
                <FaRegCheckCircle />
              </span>
              Competent
            </p>
            <p>
              <span>
                <FaRegCheckCircle />
              </span>
              Ethical
            </p>
            <p>
              <span>
                <FaRegCheckCircle />
              </span>
              Strategic
            </p>
            <p>
              <span>
                <FaRegCheckCircle />
              </span>
              Adaptable
            </p>
          </div>
          <div
            className={`slide flex flex-col p-8 bg-white justify-between space-y-4 rounded-lg shadow-lg ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            <h4 className="text-2xl text-center text-rawSienna font-bold">
              Work with me
            </h4>
            <p className="text-lg text-gray">
              I help individuals and organisations achieve their legal &
              business goals.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" legacyBehavior>
                <a>
                  <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    Get in Touch
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-8 space-y-4">
          <h3 className="text-4xl font-bold text-center">Blogs</h3>
          <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:space-x-4 md:grid-cols-4">
            {blogs.map((blog) => {
              const { id, title, image, paragraphs } = blog;
              return (
                <div
                  className={`slide bg-white space-y-4 shadow-lg ${
                    isVisible ? "slide-in-right" : ""
                  }`}
                  key={id}
                >
                  <img src={image} className="h-48 w-full" />
                  <div className="px-8 pb-8 space-y-4">
                    <h4 className="text-2xl font-bold text-gray">{title}</h4>
                    <p>
                      {`${paragraphs[0].content.substring(0, 200)} ...more`}
                    </p>
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
        </div>
        <div className="m-8 bg-white slide text-rawSienna rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-bold capitalize p-8 space-y-4">
            Some of the frequently asked questions from my clients which I
            provide solutions to:
          </h2>
          <div className="grid grid-cols-1 text-lg md:grid-cols-2">
            <p className="m-4 font-semibold">
              What are the legal requirements for starting a business in my
              location?
            </p>
            <p className="m-4 font-semibold">
              How do I protect my company's intellectual property (e.g.
              trademarks, patents, copyrights)?
            </p>
            <p className="m-4 font-semibold">
              What are the potential legal risks associated with my business
              operations?
            </p>
            <p className="m-4 font-semibold">
              What steps do I need to take to comply with regulations or laws?
            </p>
            <p className="m-4 font-semibold">
              What should I do if I receive a legal notice or lawsuit?
            </p>
            <p className="m-4 font-semibold">
              Can a contract be negotiated and reviewed on my behalf?
            </p>
            <p className="m-4 font-semibold">
              How do I obtain government permits or approvals for my business?
            </p>
            <p className="m-4 font-semibold">
              What are the consequences of not complying with specific laws or
              regulations?
            </p>
            <p className="m-4 font-semibold">
              Can you help me resolve a legal dispute with another party?
            </p>
            <p className="m-4 font-semibold">
              What are my options for resolving a legal issue or dispute outside
              of court?
            </p>
          </div>
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
