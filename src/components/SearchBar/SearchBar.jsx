import { Search, X } from "react-feather";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <Search className={styles["search-icon"]} size={24} />
      <input className={styles["search-input"]} type="text" />
      {/* TODO: This should be a button that renders only when a search is made */}
      <X className={styles["search-icon"]} size={24} />
    </div>
  );
}

export default SearchBar;
