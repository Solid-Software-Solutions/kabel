import Head from 'next/head'
import styles from '../styles/Cart.module.css'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function cart() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kabel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <h1>Shopping Cart</h1>
      </div>
    </div>
  )
}