
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>DISCOVER THE WIZARDING WORLD</span>

          <h1 className={styles.title}>
            The magic lives
            <br />
            in its people.
          </h1>

          <p className={styles.description}>
            Explore the witches, wizards and magical creatures that shaped the
            wizarding world.
          </p>

          <a href="#characters" className={styles.cta}>
            Explore characters
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
