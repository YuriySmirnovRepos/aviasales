import styles from './header.module.scss';
import logoPic from '../../assets/logo.png';

export default function Header() {
    return (
      <header className={styles.header}>
        <a href="" className={styles.link}>
          <img src={logoPic} alt="logo" className={styles.logo} />
        </a>
      </header>
    );
}