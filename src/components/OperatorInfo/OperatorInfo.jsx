import CodeEditor from "../CodeEditor";
import styles from "./OperatorInfo.module.css";

function OperatorInfo({ operatorInfo }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles["operator-title"]}>
          Este es el operador de <span>{operatorInfo.name}</span>.
        </h2>

        {operatorInfo.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <CodeEditor code={operatorInfo.code} />

      <div className={styles["operator-more-info"]}>
        Lee más acerca de este operador en la{" "}
        <a href={operatorInfo.docs}>documentación oficial</a>.
      </div>
    </div>
  );
}

export default OperatorInfo;
