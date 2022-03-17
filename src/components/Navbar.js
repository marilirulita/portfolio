import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['nav-left']}>
        <a href="/">Icon logo</a>
        <a href="/">Github</a>
        <a href="/">Linkedin</a>
        <a href="/">Twitter</a>
      </div>
      <div className={styles['nav-right']}>
      <a href="/">About</a>
      <a href="/">Projects</a>
      <a href="/">Contact</a>
      <a href="/">Resume</a>
      </div>
    </nav>
  )
}

export default Navbar;