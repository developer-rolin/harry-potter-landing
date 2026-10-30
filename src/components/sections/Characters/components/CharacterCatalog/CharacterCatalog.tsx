"use client";

import { useState } from "react";

import type { Character } from "@/types/character";
import { CharacterCard } from "../CharacterCard";
import styles from "./CharacterCatalog.module.scss";

const HOUSES = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"] as const;

const STATUSES = [
  { value: "all", label: "All statuses" },
  { value: "alive", label: "Alive" },
  { value: "deceased", label: "Deceased" },
] as const;

type StatusFilter = (typeof STATUSES)[number]["value"];

type HouseFilter = "all" | (typeof HOUSES)[number];

interface CharacterCatalogProps {
  characters: Character[];
}

export function CharacterCatalog({ characters }: CharacterCatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHouse, setSelectedHouse] = useState<HouseFilter>("all");
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all");

  const filteredCharacters = characters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesHouse =
      selectedHouse === "all" || character.house === selectedHouse;

    const matchesStatus =
      selectedStatus === "all" ||
      (selectedStatus === "alive" && character.alive) ||
      (selectedStatus === "deceased" && !character.alive);

    return matchesName && matchesHouse && matchesStatus;
  });

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

      <div className={styles.filters}>
        <span className={styles.filterLabel}>Filter by house</span>

        <div className={styles.filterOptions}>
          <button
            type="button"
            className={`${styles.filterButton} ${
              selectedHouse === "all" ? styles.activeFilter : ""
            }`}
            aria-pressed={selectedHouse === "all"}
            onClick={() => setSelectedHouse("all")}
          >
            All houses
          </button>

          {HOUSES.map((house) => (
            <button
              key={house}
              type="button"
              className={`${styles.filterButton} ${
                selectedHouse === house ? styles.activeFilter : ""
              }`}
              aria-pressed={selectedHouse === house}
              onClick={() => setSelectedHouse(house)}
            >
              {house}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filters}>
        <span className={styles.filterLabel}>Filter by status</span>

        <div className={styles.filterOptions}>
          {STATUSES.map((status) => (
            <button
              key={status.value}
              type="button"
              className={`${styles.filterButton} ${
                selectedStatus === status.value ? styles.activeFilter : ""
              }`}
              aria-pressed={selectedStatus === status.value}
              onClick={() => setSelectedStatus(status.value)}
            >
              {status.label}
            </button>
          ))}
        </div>
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
          No characters found. Try another name or house.
        </p>
      )}
    </div>
  );
}
