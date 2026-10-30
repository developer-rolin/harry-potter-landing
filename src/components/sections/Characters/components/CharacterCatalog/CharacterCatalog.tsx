"use client";

import { useState } from "react";

import type { Character } from "@/types/character";
import { CharacterCard } from "../CharacterCard";
import styles from "./CharacterCatalog.module.scss";

interface CharacterCatalogProps {
  characters: Character[];
}

export function CharacterCatalog({ characters }: CharacterCatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.catalog}>
      <div className={styles.searchContainer}>
        <label htmlFor="character-search" className={styles.searchLabel}>
          Search characters
        </label>

        <input
          id="character-search"
          type="search"
          placeholder="Search by character name..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className={styles.searchInput}
        />
      </div>

      <p className={styles.resultsCount}>
        {filteredCharacters.length} characters found
      </p>

      {filteredCharacters.length > 0 ? (
        <div className={styles.grid}>
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <p className={styles.emptyState}>
          No characters found. Try another name.
        </p>
      )}
    </div>
  );
}
