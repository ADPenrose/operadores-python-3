import OperatorSelector from "../OperatorSelector";
import SearchBar from "../SearchBar";
import OperatorInfo from "../OperatorInfo";

import styles from "./OperatorSearch.module.css";

function OperatorSearch() {
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles["wrapper-description"]}>
          <h1 className={styles.h1}>Operadores de Python 3</h1>
          <p className={`${styles.subtitle1} ${styles.info}`}>
            Escribe un operador para obtener más información:
          </p>
        </div>

        <SearchBar />

        <p className={`${styles.subtitle2} ${styles.info}`}>
          O, selecciona uno:
        </p>

        <OperatorSelector />

        <OperatorInfo />
      </main>
    </>
  );
}

export default OperatorSearch;
