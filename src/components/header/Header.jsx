import Link from 'next/link'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa';
import { links, social } from 'data/data';
import { useState } from 'react'

export default function Header({ data }) {
  const [isSidebarOpen, SetSidebar] = useState(false);
  const toggleNavBar = () => {
    SetSidebar(!isSidebarOpen);
  }
  return (
    <nav className="flex justify-between px-8 py-4 bg-tuatara text-rawSienna shadow-2xl md:px-32">
      <Link href="/" legacyBehavior>
        <a>
          <Image
            src="/images/general/hannah-transparent.png"
            alt="logo"
            width={100}
            height={100}
          />
        </a>
      </Link>

      {/* Mobile Sidebar */}
      <button
        onClick={toggleNavBar}
        id="menu-btn"
        className="block hamburger md:hidden focus:outline-none"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <aside
        className={`${
          isSidebarOpen
            ? "sidebar show-sidebar py-4 px-8 justify-between md:hidden"
            : "sidebar py-4 px-8 justify-between md:hidden"
        }`}
      >
        <div className="flex justify-between">
          <Image
            src="/images/general/hannah-transparent.png"
            alt="logo"
            width={100}
            height={100}
          />
          <button className="text-4xl" onClick={toggleNavBar}>
            <FaTimes />
          </button>
        </div>
        <div className="text-4xl space-y-8">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <Link key={id} href={url} legacyBehavior>
                <a className="flex space-x-4">
                  {icon}
                  <p>{text}</p>
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center text-2xl space-x-4">
          {social.map((item) => {
            const { id, url, icon, color } = item;
            return (
              <a href={url} key={id} style={{ color: `${color}` }}>
                {icon}
              </a>
            );
          })}
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <ul className="hidden space-x-16 items-center text-xl md:flex">
        {data.map((item) => {
          return (
            <li key={item.id} className="hover:text-gray">
              <Link href={`/${item.id}`} legacyBehavior>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export async function getStaticProps() {
  const { nav_links } = await import("/data/data.json");
  return {
    props: {
      data: nav_links
    },
  };
}
