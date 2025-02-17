import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My Login Project</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header