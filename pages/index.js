import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Typewriter from "typewriter-effect";

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
      <main className="bg-whiteGray flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2">
            <img src="images/general/hannah-picture.jpg" />
          </div>
          <div className="hidden p-8 space-y-4 text-lg md:block md:w-1/2">
            <h2 className="text-center font-bold text-4xl">
              Welcome To My Website
            </h2>
            <p>
              Welcome to my website, my name is{" "}
              <span className="text-rawSienna font-bold">
                Hannah Eghonghon Aghedo.{" "}
              </span>
              With over a decade of being a Transactional Lawyer, Investment,
              Business Strategist and Corporate Trainer. I help business interns
              and executives acquire short-term and long-term training to refine
              their business leadership and management skills befitting of a
              present-day need, without physical interaction and in line with
              sustainable economy.
            </p>
            <p>
              <span className="text-rawSienna font-bold">Early days-</span>
              <br /> Born on the 22nd day of March to ENGR & Mrs Abraham Aghedo,
              Hannah had her first real exposure in Nigeria’s foremost single
              sex school for girls, Queens College, Lagos, where she learned
              that real pursuit in life is akin to passion and realistic goals.
            </p>
            <p>
              <span className="text-rawSienna font-bold">Education-</span>
              <br />A Graduate of the Faculty of Law Ambrose Alli University,
              Edo State where she bagged her LL.B degree with a second class
              upper division sparking up intuitive calculations about how
              someone so daring could combine tough leadership roles and
              academics in a single stroke. After her call to the Nigerian Bar
              as a Barrister of the Supreme Court of Nigeria and an LLM degree
              in Commercial Law from Ahmadu Bello University, Kaduna State, her
              professional journey has been far from lopsided as she has berthed
              through areas in the legal profession that are gradually taking
              toll. Currently, an MBA student of the Prestigious Coventry
              University in England.
            </p>
            <div>
              <Link href="/about" legacyBehavior>
                <a>
                  <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    About Page
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="p-8 space-y-4 text-lg md:hidden">
            <h2 className="text-center font-bold text-4xl">
              Welcome To My Website
            </h2>
            <p>
              Welcome to my website, my name is{" "}
              <span className="text-rawSienna font-bold">
                Hannah Eghonghon Aghedo.{" "}
              </span>
              With over a decade of being a Transactional Lawyer, Investment,
              Business Strategist and Corporate Trainer. I help business interns
              and executives acquire short-term and long-term training to refine
              their business leadership and management skills befitting of a
              present-day need, without physical interaction and in line with
              sustainable economy.
            </p>
            <p>
              <span className="text-rawSienna font-bold">Early days-</span>
              <br /> Born on the 22nd day of March to ENGR & Mrs Abraham Aghedo,
              Hannah had her first real exposure in Nigeria’s foremost single
              sex school for girls, Queens College, Lagos, where she learned
              that real pursuit in life is akin to passion and realistic goals.
            </p>
            <p>
              <span className="text-rawSienna font-bold">Education-</span>
              <br />A Graduate of the Faculty of Law Ambrose Alli University,
              Edo State where she bagged her LL.B degree with a second class
              upper division sparking up intuitive calculations about how
              someone so daring could combine tough leadership roles and
              academics in a single stroke. After her call to the Nigerian Bar
              as a Barrister of the Supreme Court of Nigeria and an LLM degree
              in Commercial Law from Ahmadu Bello University, Kaduna State, her
              professional journey has been far from lopsided as she has berthed
              through areas in the legal profession that are gradually taking
              toll. Currently, an MBA student of the Prestigious Coventry
              University in England.
            </p>
            <div>
              <Link href="/about" legacyBehavior>
                <a>
                  <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    About Page
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-8 space-y-4">
          <h3 className="text-4xl font-bold text-center">Services</h3>
          <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:space-x-4 md:grid-cols-4">
            {services.map((service) => {
              const { id, title, image, paragraphs } = service;
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
        </div>
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
              I help individuals and organisations achieve their legal goals.
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
