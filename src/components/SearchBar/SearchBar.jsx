import { Search, X } from "react-feather";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <Search className={styles["search-icon"]} size={30} />
      <input className={styles["search-input"]} type="text" />
      <X className={styles["search-icon"]} size={30} />
    </div>
  );
}

export default SearchBar;
