import Head from "next/head";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneVolume,
  FaClock,
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact({ data, services }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      fname,
      lname,
      email,
      phone,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    });
  };

  const handleClick = () => {
    setSubmitted(false);
  };

  return (
    <>
      <Head>
        <title>Hannah Aghedo - Contact</title>
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
      <main className="grid grid-cols-1 bg-white p-8 md:p-16 md:grid-cols-3">
        <div className="flex flex-col space-y-4 p-4 md:col-span-2">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <hr className="border-rawSienna" />
          <p className="text-lg">
            I value your feedback. Kindly leave me a message and I will respond
            promptly.
          </p>
          <form className="bg-whiteGray p-6 rounded-lg">
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="fname"
                >
                  First Name <span className="text-red">*</span>
                </label>
                <input
                  className="bg-gray-200 p-2 rounded-lg w-full"
                  type="text"
                  id="fname"
                  name="fname"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="lname"
                >
                  Last Name <span className="text-red">*</span>
                </label>
                <input
                  className="bg-gray-200 p-2 rounded-lg w-full"
                  type="text"
                  id="lname"
                  name="lname"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email <span className="text-red">*</span>
              </label>
              <input
                className="bg-gray-200 p-2 rounded-lg w-full"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phone"
              >
                Phone Number <span className="text-red">*</span>
              </label>
              <input
                className="bg-gray-200 p-2 rounded-lg w-full"
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Message <span className="text-red">*</span>
              </label>
              <textarea
                className="bg-gray-200 p-2 rounded-lg w-full"
                id="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <button
              className="bg-rawSienna text-white p-2 rounded-lg hover:bg-tuatara"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div className="p-4 space-y-8">
          <div className="text-rawSienna text-4xl">
            <FaEnvelope />
          </div>
          <p className="text-2xl">info@hannahaghedo.com</p>
          <div className="text-rawSienna text-4xl">
            <FaPhoneVolume />
          </div>
          <p className="text-2xl">+234 708 307 2231, +44 7765 740548</p>
          <div className="text-rawSienna text-4xl">
            <FaClock />
          </div>
          <p className="text-2xl">Mon-Fri, 9am until 6pm</p>
          <div className="text-rawSienna text-4xl">
            <FaLocationArrow />
          </div>
          <p className="text-2xl">Available to work globally</p>
          <div className="flex-col">
            <p className="text-xl mb-4">Follow me on :</p>
            <div className="flex justify-center">
              <a href="https://facebook.com/aghedo.hannah">
                <div className="text-xl text-rawSienna font-bold mr-8 hover:text-tuatara">
                  <FaFacebook />
                </div>
              </a>
              <a href="https://twitter.com/chubbyanny">
                <div className="text-xl text-rawSienna font-bold mr-8 hover:text-tuatara">
                  <FaTwitter />
                </div>
              </a>
              <a href="https://www.instagram.com/hannahaghedo">
                <div className="text-xl text-rawSienna font-bold mr-8 hover:text-tuatara">
                  <FaInstagram />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/hannah-aghedo-8136a9ab">
                <div className="text-xl text-rawSienna font-bold mr-8 hover:text-tuatara">
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      {submitted && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
          <div className="bg-tuatara text-white rounded-lg p-8 space-y-4">
            <p className="text-2xl">Thanks for contacting us!</p>
            <p className="text-2xl">We will give you a feedback shortly</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleClick}
                className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Close
              </button>
              <div>
                <Link href="/" legacyBehavior>
                  <a>
                    <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                      Go To Home Page
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
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
