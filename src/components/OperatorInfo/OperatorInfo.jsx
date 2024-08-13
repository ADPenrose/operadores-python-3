import CodeEditor from "../CodeEditor";
import styles from "./OperatorInfo.module.css";

function OperatorInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles["operator-title"]}>
          Este es el operador de <span>ejemplo</span>.
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
          aliquam lacus quis posuere.{" "}
        </p>
        <p>
          Cras vestibulum, nunc at laoreet interdum, felis felis viverra enim,
          vitae mollis lacus ex sit amet sem.{" "}
        </p>
        <p>
          Aliquam odio tellus, semper eu rhoncus non, egestas eu purus. Mauris
          eu ligula ultricies, fringilla diam nec, dignissim est. Quisque
          faucibus velit orci, sit amet ultrices dolor rutrum vitae.{" "}
        </p>
      </div>

      <CodeEditor />

      <div className={styles["operator-more-info"]}>
        Lee más acerca de este operador en la{" "}
        <a href="#">documentación oficial</a>.
      </div>
    </div>
  );
}

export default OperatorInfo;
