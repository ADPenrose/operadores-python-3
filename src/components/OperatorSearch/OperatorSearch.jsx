import React from "react";

import { OperatorContext } from "../OperatorProvider";
import OperatorSelector from "../OperatorSelector";
import SearchBar from "../SearchBar";
import OperatorInfo from "../OperatorInfo";

import { OPERATORS } from "../../data";

import styles from "./OperatorSearch.module.css";

function OperatorSearch() {
  const { selectedOperator } = React.useContext(OperatorContext);
  const isValidOperator = OPERATORS.some(
    ({ operator }) => operator === selectedOperator,
  );
  const operatorInfo = OPERATORS.find(
    ({ operator }) => operator === selectedOperator,
  );

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

        {isValidOperator ? (
          <OperatorInfo operatorInfo={operatorInfo} />
        ) : (
          <>
            {selectedOperator !== "" && !isValidOperator && (
              <p className={styles.noinfo}>
                No se pudo encontrar información sobre el operador específicado,
                perdón :c
              </p>
            )}
            <p className={`${styles.subtitle2} ${styles.info}`}>
              O, selecciona uno:
            </p>

            <OperatorSelector />
          </>
        )}
      </main>
    </>
  );
}

export default OperatorSearch;
