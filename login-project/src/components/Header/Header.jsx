import HeaderNavigation from '../HeaderNavigation/HeaderNavigation'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.pageName}>My Login</h1>
            <HeaderNavigation />
        </header>
    )
}

export default Header