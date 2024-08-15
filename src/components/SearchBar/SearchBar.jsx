import React from "react";
import { OperatorContext } from "../OperatorProvider";
import { Search, X } from "react-feather";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

function SearchBar() {
  const { selectedOperator, setSelectedOperator, operatorSymbol } =
    React.useContext(OperatorContext);
  const [searchedOperator, setSearchedOperator] =
    React.useState(operatorSymbol);

  React.useEffect(() => {
    // Cada que cambie el operador en la query, hay que actualizar el input.
    setSearchedOperator(operatorSymbol);
  }, [operatorSymbol]);

  // Esta función es la que causa que el efecto anterior se ejecute a lo largo de la vida del componente,
  // una vez este ha sido montado.
  function handleSearchOperator(event) {
    // Primero que nada, tengo que actualizar el search input.
    setSearchedOperator(event.target.value);
    // Luego, tengo que actualizar el operador seleccionado.
    setSelectedOperator(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <Search className={styles["search-icon"]} size={24} />
      <input
        className={styles["search-input"]}
        type="text"
        value={searchedOperator}
        onChange={handleSearchOperator}
      />
      {/* TODO: This should be a button that renders only when a search is made */}
      {selectedOperator !== "" ? (
        <Link to="/" className={styles["search-clear"]}>
          <X className={styles["search-icon"]} size={30} />
        </Link>
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </div>
  );
}

export default SearchBar;
