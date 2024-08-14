import React from "react";
import { OperatorContext } from "../OperatorProvider";
import { Search, X } from "react-feather";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const { selectedOperator, setSelectedOperator, handleOperatorCleaning } =
    React.useContext(OperatorContext);

  return (
    <div className={styles.wrapper}>
      <Search className={styles["search-icon"]} size={24} />
      <input
        className={styles["search-input"]}
        type="text"
        value={selectedOperator}
        onChange={(e) => setSelectedOperator(e.target.value)}
      />
      {/* TODO: This should be a button that renders only when a search is made */}
      {selectedOperator !== "" ? (
        <button
          onClick={handleOperatorCleaning}
          className={styles["search-clear"]}
        >
          <X className={styles["search-icon"]} size={30} />
        </button>
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </div>
  );
}

export default SearchBar;
