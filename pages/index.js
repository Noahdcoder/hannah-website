import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) { 
  return (
    <>
      <Head>
        <title>Han' Solicitors & Consultancy</title>
        <meta name="description" content="Han Solicitors & Consultancy - An Outstanding Legal Firm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"  />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* <Header data={data} /> */}
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'></div>
        <div className='md:w-1/2'></div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { nav_links } = await import('/data/data.json');
  return {
    props: {
      data: nav_links,
    },
  };
}
