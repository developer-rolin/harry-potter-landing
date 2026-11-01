"use client";

import styles from "./error.module.scss";

interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <main className={styles.container}>
      <span className={styles.symbol} aria-hidden="true">
        ✦
      </span>

      <h1 className={styles.title}>Something went wrong</h1>

      <p className={styles.description}>
        We couldn&apos;t load the wizarding world. Please try again.
      </p>

      <button type="button" className={styles.button} onClick={reset}>
        Try again
      </button>
    </main>
  );
}
