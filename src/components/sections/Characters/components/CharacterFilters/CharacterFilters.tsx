import styles from "./CharacterFilters.module.scss";

const HOUSES = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"] as const;

export type HouseFilter = "all" | (typeof HOUSES)[number];

const STATUSES = [
  { value: "all", label: "All statuses" },
  { value: "alive", label: "Alive" },
  { value: "deceased", label: "Deceased" },
] as const;

export type StatusFilter = (typeof STATUSES)[number]["value"];

interface CharacterFiltersProps {
  searchTerm: string;
  selectedHouse: HouseFilter;
  selectedStatus: StatusFilter;
  onSearchChange: (value: string) => void;
  onHouseChange: (house: HouseFilter) => void;
  onStatusChange: (status: StatusFilter) => void;
}

export function CharacterFilters({
  searchTerm,
  selectedHouse,
  selectedStatus,
  onSearchChange,
  onHouseChange,
  onStatusChange,
}: CharacterFiltersProps) {
  return (
    <>
      <div className={styles.searchContainer}>
        <label htmlFor="character-search" className={styles.searchLabel}>
          Search characters
        </label>

        <input
          id="character-search"
          type="search"
          placeholder="Search by character name..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
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
            onClick={() => onHouseChange("all")}
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
              onClick={() => onHouseChange(house)}
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
              onClick={() => onStatusChange(status.value)}
            >
              {status.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
