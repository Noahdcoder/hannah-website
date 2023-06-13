import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import Link from "next/link";
import { shareSocial } from "@/data/data";
import { FaBullseye } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SingleBlog({ data, blogs, services, nav_links }) {
  const router = useRouter();
  const { id, title, image, paragraphs } = data;
  const otherBlogs = blogs.filter((filter) => filter.id !== id);
  const currentUrl = `https://hannahaghedo.com${router.asPath}`;
  return (
    <>
      <Head>
        <title>{`Hannah Aghedo - ${title}`}</title>
        <meta
          name="description"
          content="Amazing legal and business tips that will help you and your business succeed"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="title" content={`Hannah Aghedo - ${title}`} />
        <meta
          name="keywords"
          content="legal services, business advice, corporate, law firm, attorney, lawyer, legal advice, litigation, dispute resolution, contract law, business law, corporate law, employment law, labor law, civil litigation, criminal law, family law, estate planning, real estate law, immigration law, intellectual property law, mediation and arbitration"
        />
        <meta property="og:title" content={`Hannah Aghedo - ${title}`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://www.hannahaghedo.com${image}`}
        />
        <meta
          property="og:description"
          content="Amazing legal and business tips that will help you and your business succeed"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:title" content={`Hannah Aghedo - ${title}`} />
        <meta
          property="twitter:description"
          content="Amazing legal and business tips that will help you and your business succeed"
        />
        <meta
          property="twitter:image"
          content={`https://www.hannahaghedo.com${image}`}
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
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <Header data={nav_links} />
      <div className="grid grid-cols-1 p-8 text-lg md:p-16 md:grid-cols-3">
        <div className="flex flex-col space-y-4 p-4 md:col-span-2">
          <h4 className="text-4xl font-bold">{title}</h4>
          <img className="h-96" src={image} alt={title} />
          {paragraphs.map((paragraph) => {
            const { id, content } = paragraph;
            return <p key={id}>{content}</p>;
          })}
        </div>
        <div className="flex flex-col p-4">
          <h6 className="text-xl font-bold mb-4">Other articles</h6>
          <div className="flex flex-col mb-8 space-y-2 md:mb-16">
            {otherBlogs.map((blog) => {
              const { id, title } = blog;
              return (
                <div key={id}>
                  <div>
                    <Link href={`/blog/${id}`} legacyBehavior>
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
            <h6 className="text-tuatara text-2xl font-bold">Share Via</h6>
            <div className="flex space-x-2">
              {shareSocial.map((item) => {
                const { id, url, color, icon } = item;
                const article = data.id;
                return (
                  <div key={id}>
                    <Link
                      href={`${url}${article}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      legacyBehavior
                    >
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
  const { blogs } = await import("/data/data.json");
  const allPaths = blogs.map((blog) => {
    return {
      params: {
        cat: blog.id.toString(),
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
  const { blogs, services, nav_links } = await import("/data/data.json");

  const blogData = blogs.find((blog) => id === blog.id);

  return {
    props: {
      data: blogData,
      pageName: id,
      services: services,
      nav_links: nav_links,
      blogs: blogs,
    },
  };
}
