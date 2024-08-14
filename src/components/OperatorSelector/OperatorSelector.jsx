import React from "react";
import { OperatorContext } from "../OperatorProvider";
import { OPERATORS } from "../../data";
import styles from "./OperatorSelector.module.css";

function OperatorSelector() {
  const { setSelectedOperator } = React.useContext(OperatorContext);

  return (
    <div className={styles.wrapper}>
      {OPERATORS.map(({ id, operator }) => (
        <button
          onClick={() => setSelectedOperator(operator)}
          className={styles.operator}
          key={id}
          type="button"
        >
          <div className={styles.background}></div>
          {operator}
        </button>
      ))}
    </div>
  );
}

export default OperatorSelector;
