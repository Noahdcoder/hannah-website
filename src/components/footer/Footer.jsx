import {
  FaSearchLocation,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaRegCircle,
} from "react-icons/fa";
import { social } from "data/data";
import Link from "next/link";
import { useState } from "react";

export default function Footer({ services }) {
  let currentYear = new Date().getFullYear();
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [hidden, setHidden] = useState("");
  const subscribe = async (e) => {
    e.preventDefault();

    setState(1);
    setErrorMsg("");
    console.log(e.target[0].value);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e) {
      setErrorMsg(e);
      setState(3);
    }
  };
  const handleState = () => {
    setState(0);
  };
  if (state === 2) {
    return (
      <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
        <div className="bg-tuatara text-white rounded-lg p-8 space-y-4">
          <p className="text-2xl">Thanks For Subscribing!</p>
          <p className="text-2xl">
            You Will Be Getting Useful Legal Tips & Information From Us.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleState}
              className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Close
            </button>
            <div>
              <Link href="/" legacyBehavior>
                <a>
                  <button className="bg-rawSienna text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    Home Page
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (state === 3) {
    return (
      <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
        <div className="bg-tuatara text-white rounded-lg p-8 space-y-4">
          <p className="text-2xl">Something Went Wrong!</p>
          <p className="text-2xl">
            Please Try Filling In The Correct Details & Try Again
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleState}
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
    );
  }
  return (
    <footer className="bg-tuatara">
      <div className="grid grid-cols-1 gap-y-4 gap-x-0 p-8 md:grid-cols-4 md:gap-y-0">
        <div className="flex flex-col space-y-4">
          <h3 className="border-l-4 border-rawSienna text-white font-bold pl-4">
            About
          </h3>
          <p className="text-slate-50">
            Hannah Aghedo is committed to providing exceptional legal and
            business support to individuals and businesses alike.
          </p>
          <p className="text-slate-50">
            With a focus on Advisory & Legal support, Legal Due Diligence and
            Compliance, Intellectual Property Protection, Government Permit &
            Approval, I am here to ensure that your legal & business needs are
            met efficiently and effectively.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="border-l-4 border-rawSienna text-white font-bold pl-4">
            Contact Info
          </h3>
          <p className="text-slate-50">I am available to work globally.</p>
          <div className="flex space-x-4">
            <div className="text-white border-2 border-rawSienna p-2">
              <FaSearchLocation />
            </div>
            <p className="text-slate-50">Global</p>
          </div>
          <div className="flex space-x-4">
            <div className="text-white border-2 border-rawSienna p-2">
              <FaPhoneAlt />
            </div>
            <p className="text-slate-50">+44 7765 740548</p>
          </div>
          <div className="flex space-x-4">
            <div className="text-white border-2 border-rawSienna p-2">
              <FaEnvelopeOpenText />
            </div>
            <p className="text-slate-50">info@hannahaghedo.com</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="border-l-4 border-rawSienna text-white font-bold pl-4">
            Services
          </h3>
          <div className="flex flex-col text-slate-50">
            {services.map((service) => {
              return (
                <div key={service.id} className="flex space-x-4">
                  <FaRegCircle className="text-white" />
                  <div className="hover:text-rawSienna">
                    <Link href={`/services/${service.id}`} legacyBehavior>
                      <a>{service.title}</a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="border-l-4 border-rawSienna text-white font-bold pl-4">
            Newsletter
          </h3>
          <p className="text-slate-50">
            Get all latest content delivered to your email a few times a month.
          </p>
          <form onSubmit={subscribe}>
            <div className="relative rounded-md shadow-sm">
              <input
                type="email"
                className="form-input py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Email address"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-rawSienna hover:bg-tuatara focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col space-y-4">
            <h3 className="border-l-4 border-rawSienna text-white font-bold pl-4">
              Follow me or reach out.
            </h3>
            <div className="flex space-x-4 text-slate-50">
              {social.map((item) => {
                const { id, url, icon } = item;
                return (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    className="hover:text-rawSienna"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <p className="text-center text-2xl text-slate-50 pb-8">
        Copyright &copy; <span>{currentYear}</span> Hannah Aghedo
      </p>
    </footer>
  );
}
