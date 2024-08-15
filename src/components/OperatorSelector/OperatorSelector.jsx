import React from "react";
import { Link } from "react-router-dom";
import { OperatorContext } from "../OperatorProvider";
import { OPERATORS } from "../../data";
import styles from "./OperatorSelector.module.css";

function OperatorSelector() {
  const { setSelectedOperator } = React.useContext(OperatorContext);

  return (
    <div className={styles.wrapper}>
      {OPERATORS.map(({ id, operator, name }) => (
        <Link
          onClick={() => setSelectedOperator(operator)}
          className={styles.operator}
          to={`?operator=${name}`}
          key={id}
          type="button"
        >
          <div className={styles.background}></div>
          {operator}
        </Link>
      ))}
    </div>
  );
}

export default OperatorSelector;
