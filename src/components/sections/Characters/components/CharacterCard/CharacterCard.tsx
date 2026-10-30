import type { Character } from "@/types/character";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const { name, image, dateOfBirth, house, patronus, actor, alive } = character;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={name} className={styles.image} />
        ) : (
          <div
            className={styles.imageFallback}
            aria-label={`No image available for ${name}`}
          >
            ✦
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>

        <dl className={styles.details}>
          <div>
            <dt>Date of birth</dt>
            <dd>{dateOfBirth || "Unknown"}</dd>
          </div>

          <div>
            <dt>House</dt>
            <dd>{house || "Unknown"}</dd>
          </div>

          <div>
            <dt>Patronus</dt>
            <dd>{patronus || "Unknown"}</dd>
          </div>

          <div>
            <dt>Actor</dt>
            <dd>{actor || "Unknown"}</dd>
          </div>
        </dl>

        <span
          className={`${styles.status} ${alive ? styles.alive : styles.deceased}`}
        >
          {alive ? "Alive" : "Deceased"}
        </span>
      </div>
    </article>
  );
}
