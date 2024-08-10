import SearchBar from "../SearchBar";

import styles from "./OperatorSearch.module.css";

function OperatorSearch() {
  return (
    <>
      <section className={styles["section-description"]}>
        <h1 className={styles.h1}>Operadores de Python 3</h1>
        <p className={`${styles.subtitle} ${styles.info}`}>
          Escribe un operador de Python para obtener más información:
        </p>
      </section>

      <SearchBar />
    </>
  );
}

export default OperatorSearch;
