import type { Character } from "@/types/character";

const CHARACTERS_API_URL = "https://hp-api.onrender.com/api/characters";

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(CHARACTERS_API_URL, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch characters: ${response.status} ${response.statusText}`,
    );
  }

  const characters: Character[] = await response.json();

  return characters;
}
