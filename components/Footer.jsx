import styles from '../styles/Footer.module.css'
import { faSquareFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer(){
    return(
        <div className={styles.container}>
            <h1>Kabel</h1>
            <span className={styles.direccion}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
                <p>Guadalajara, Jalisco, México</p>
            </span>
            <hr />   
            <span className={styles.socialmedia}>
                <FontAwesomeIcon icon={faSquareFacebook} className={styles.icon}/>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
            </span>
            <ul>
                <li>Atención al Clienete</li>
                <li>|</li>
                <li>Terminos y Condiciones</li>
                <li>|</li>
                <li>Aviso de Privacidad</li>
                <li>|</li>
                <li>Contacto</li>
            </ul>
            <p className={styles.solid}>Solid Software Solutions</p>
        </div>
    )
}