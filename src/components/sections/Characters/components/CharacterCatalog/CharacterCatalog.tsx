"use client";

import { useState } from "react";

import type { Character } from "@/types/character";
import { CharacterCard } from "../CharacterCard";
import {
  CharacterFilters,
  type HouseFilter,
  type StatusFilter,
} from "../CharacterFilters";
import styles from "./CharacterCatalog.module.scss";

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
      <CharacterFilters
        searchTerm={searchTerm}
        selectedHouse={selectedHouse}
        selectedStatus={selectedStatus}
        onSearchChange={setSearchTerm}
        onHouseChange={setSelectedHouse}
        onStatusChange={setSelectedStatus}
      />

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
          No characters found. Try changing your search or filters.
        </p>
      )}
    </div>
  );
}
