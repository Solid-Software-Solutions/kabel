import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return(
        <div className={styles.container}>
            <h1>Kabel</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
                    <p>Buscar</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                    <p>Buscar</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon}/>
                    <p>Buscar</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                    <p>Buscar</p>
                </li>
            </ul>
        </div>
    )
}