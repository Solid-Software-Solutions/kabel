import Head from 'next/head'
import styles from '../styles/Template.module.css'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function Template() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kabel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <h1>Template</h1>
      </div>
      <Footer />
    </div>
  )
}