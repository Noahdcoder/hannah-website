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
              <span className="text-rawSienna font-bold">Career-</span>A Lawyer
              exploring extreme areas of the law and has sat over many
              arbitration matters as an Arbitration Specialist. As a commercial
              law expert, she has gained prominence in the corporate ladder and
              is currently on a mission to support dwindling economies thrive
              through delivering sessions on Capital Projects and Capital
              project funds management within Africa.
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
            <p>
              When I am not assisting small, medium enterprises known as the
              SMEs with Roadmaps to navigate through their business strategies
              and practicability, I engage assiduously with civil society,
              non-profit organizations, and religious institutions through
              volunteering as a way of creating lasting change across the globe
              bearing in mind the essence of community development.
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
          Pledge
        </h4>
        <h5 className="text-center text-lg text-rawSienna font-bold">
          I Hannah Aghedo, guarantees the following:
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
              Meeting deadlines is of the utmost importance. I understand that
              my clients rely on me to deliver high-quality work on time, and I
              take this responsibility very seriously. To ensure that I am able
              to meet deadlines consistently, I have put several measures in
              place.
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
              I pride myself on offering competitive rates to my clients. I
              understand that cost is an important factor for businesses when
              selecting a service provider, and I work hard to ensure that my
              rates are fair and reasonable.
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
              Client satisfaction is my top priority. I understand that my
              clients rely on me to deliver high-quality work that meets their
              needs and expectations, and I are committed to exceeding those
              expectations every time.
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
