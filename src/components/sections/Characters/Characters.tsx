import { getCharacters } from "@/services/characters";
import { CharacterCatalog } from "./components/CharacterCatalog";
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

        <CharacterCatalog characters={characters} />
      </div>
    </section>
  );
}
