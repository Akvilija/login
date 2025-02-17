import { NavLink } from 'react-router'
import styles from './HeaderNavigation.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons"


const HeaderNavigation = () => {
    return (
        <nav>
            <ul className={styles.navigation}>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/pictures">
                        Pictures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        <span className={styles.iconPadding}>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register">
                        <span className={styles.iconPadding}>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </span>
                        Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNavigation