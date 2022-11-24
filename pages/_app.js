import '../styles/globals.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function MyApp({ Component, pageProps }) {
  
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
  
}

export default MyApp
