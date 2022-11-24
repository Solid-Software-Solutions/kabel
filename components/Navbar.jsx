import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return(
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Kabel</Link>
            <ul>
                
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
                        <p>Buscar</p>
                    </a>
                </li>
                <li>
                    <Link href="/favorites">
                        <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                        <p>Favoritos</p>
                    </Link>
                </li>
                <li>
                    <Link href="/carrito">
                        <FontAwesomeIcon icon={faCartShopping} className={styles.icon}/>
                        <p>Carrito</p>
                    </Link>
                </li>
                <li>
                    <Link href="/account">
                        <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                        <p>cuenta</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}