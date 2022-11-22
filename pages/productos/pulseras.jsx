import Head from 'next/head'
import styles from '/styles/Pulseras.module.css'
import Footer from '/components/Footer.jsx'
import Navbar from '/components/Navbar.jsx'

export default function Pulseras() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kabel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <h1>Pulseras</h1>
      </div>
      <Footer />
    </div>
  )
}