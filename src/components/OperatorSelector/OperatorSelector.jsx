import { OPERATORS } from "../../data";
import styles from "./OperatorSelector.module.css";

function OperatorSelector() {
  return (
    <div className={styles.wrapper}>
      {OPERATORS.map(({ id, operator }) => (
        <button className={styles.operator} key={id} type="button">
          <div className={styles.background}></div>
          {operator}
        </button>
      ))}
    </div>
  );
}

export default OperatorSelector;
