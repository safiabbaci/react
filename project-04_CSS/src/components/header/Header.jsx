import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1 className={styles.h3}>Header</h1>
        <div className={styles.btn}>
            This is header's Button
        </div>
    </div>
  )
}

export default Header