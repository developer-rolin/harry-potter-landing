import Link from "next/link";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoSymbol} aria-hidden="true">
            ✦
          </span>

          <span className={styles.logoText}>THE WIZARDING ARCHIVE</span>
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          <Link href="#characters" className={styles.navLink}>
            Characters
          </Link>
        </nav>
      </div>
    </header>
  );
}
