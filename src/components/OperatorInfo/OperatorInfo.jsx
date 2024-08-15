import CodeEditor from "../CodeEditor";
import styles from "./OperatorInfo.module.css";

function OperatorInfo({ operator }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles["operator-title"]}>
          Este es el operador {operator.id < 18 && "de"}{" "}
          <span>{operator.name}</span>.
        </h2>

        {operator.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <CodeEditor code={operator.code} />

      {!!operator.docs && (
        <div className={styles["operator-more-info"]}>
          Lee más acerca de este operador en la{" "}
          <a href={operator.docs}>documentación oficial</a>.
        </div>
      )}
    </div>
  );
}

export default OperatorInfo;
