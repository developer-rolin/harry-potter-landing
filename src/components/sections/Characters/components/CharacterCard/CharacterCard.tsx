import type { Character } from "@/types/character";
import styles from "./CharacterCard.module.scss";
import Image from "next/image";

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const { name, image, dateOfBirth, house, patronus, actor, alive } = character;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imageFallback} aria-hidden="true">
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
