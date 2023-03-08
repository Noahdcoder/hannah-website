import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import { useEffect } from "react";

export default function About({ data, services }) {
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
        <title>Hannah Aghedo - About</title>
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
      <main className="bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2">
            <img src="images/general/hannah-aghedo.png" />
          </div>
          <div className="p-8 space-y-4 text-lg md:block md:w-1/2">
            <h2 className="text-center font-bold text-4xl">
              Welcome To My Website
            </h2>
            <p>
              At <span className="text-rawSienna font-bold">Hannah Aghedo</span>
              , we're committed to providing exceptional legal support to
              individuals and businesses alike. Our team of experienced lawyers
              is dedicated to helping our clients navigate complex legal
              challenges with ease and confidence.
            </p>
            <p>
              With a focus on Advisory & Legal support, Legal Due Diligence and
              Compliance, Intellectual Property Protection, Government Permit &
              Approval, we're here to ensure that your legal needs are met
              efficiently and effectively.
            </p>
            <p>
              Our attorneys have a proven track record of success in
              representing clients across a wide range of industries. Whether
              you're just starting out or you're a well-established company, we
              have the experience and knowledge to help you succeed.
            </p>
            <p>
              We understand that legal issues can be daunting, but we're here to
              make the process as smooth and stress-free as possible. We take
              the time to listen to your needs and concerns, and we work
              tirelessly to develop tailored solutions that meet your unique
              needs.
            </p>
            <p>
              At <span className="text-rawSienna font-bold">Hannah Aghedo</span>
              , we believe in building long-term relationships with our clients.
              We strive to provide exceptional service and support throughout
              the entire legal process, from initial consultation to final
              resolution. Our team is always available to answer your questions
              and address your concerns, and we're committed to keeping you
              informed every step of the way.
            </p>
            <p>
              If you're looking for experienced, reliable legal support, look no
              further than Hannah Aghedo. Contact us today to schedule a
              consultation and learn more about how we can help you achieve your
              goals.
            </p>
          </div>
        </div>
      </main>
      <div className="bg-white space-y-4 p-8">
        <h4 className="text-center text-2xl text-rawSienna font-bold">
          Our Pledge
        </h4>
        <h5 className="text-center text-lg text-rawSienna font-bold">
          At Hannah Aghedo, we guarantee the following:
        </h5>
        <div className="grid grid-cols-1 gap-x-0 md:grid-cols-3 md:gap-x-4">
          <div className="slide rounded-lg shadow-lg">
            <h6 className="text-lg text-black font-bold p-4">
              Ability to meet deadlines
            </h6>
            <img
              src="/images/about/deadline.jpg"
              alt="Card image"
              className="w-full h-64 rounded-t-lg"
            />
            <p className="p-4">
              At Hannah Aghedo, meeting deadlines is of the utmost importance.
              We understand that our clients rely on us to deliver high-quality
              work on time, and we take this responsibility very seriously. To
              ensure that we are able to meet deadlines consistently, we have
              put several measures in place.
            </p>
          </div>
          <div className="slide rounded-lg shadow-lg">
            <h6 className="text-lg text-black font-bold p-4">
              Competitive Rates
            </h6>
            <img
              src="/images/about/competitive.jpg"
              alt="Card image"
              className="w-full h-64 rounded-t-lg"
            />
            <p className="p-4">
              At Hannah Aghedo, we pride ourselves on offering competitive rates
              to our clients. We understand that cost is an important factor for
              businesses when selecting a service provider, and we work hard to
              ensure that our rates are fair and reasonable.
            </p>
          </div>
          <div className="slide rounded-lg shadow-lg">
            <h6 className="text-lg text-black font-bold p-4">
              Client Satisfaction
            </h6>
            <img
              src="/images/about/satisfaction.jpg"
              alt="Card image"
              className="w-full h-64 rounded-t-lg"
            />
            <p className="p-4">
              At Hannah Aghedo, client satisfaction is our top priority. We
              understand that our clients rely on us to deliver high-quality
              work that meets their needs and expectations, and we are committed
              to exceeding those expectations every time.
            </p>
          </div>
        </div>
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
