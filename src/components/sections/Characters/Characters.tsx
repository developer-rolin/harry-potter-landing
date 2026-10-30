import { getCharacters } from "@/services/characters";
import { CharacterCard } from "./components/CharacterCard";
import styles from "./Characters.module.scss";

export async function Characters() {
  const characters = await getCharacters();

  return (
    <section id="characters" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>THE WIZARDING WORLD</span>

          <h2 className={styles.title}>Meet the characters</h2>

          <p className={styles.description}>
            Discover the witches and wizards who shaped this magical universe.
          </p>
        </div>

        <div className={styles.grid}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
}
