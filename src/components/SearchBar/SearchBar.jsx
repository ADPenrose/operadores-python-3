import React from "react";
import { Search, X } from "react-feather";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [search, setSearch] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <Search className={styles["search-icon"]} size={24} />
      <input
        className={styles["search-input"]}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* TODO: This should be a button that renders only when a search is made */}
      <X className={styles["search-icon"]} size={24} />
    </div>
  );
}

export default SearchBar;
