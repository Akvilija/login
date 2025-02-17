import styles from './Layout.module.css'

const Layout = ({ children, header, footer }) => {
    return (
        <div className={styles.layoutContainer}>
            <>{header}</>
            <main>{children}</main>
            <>{footer}</>
        </div>
    )
}

export default Layout