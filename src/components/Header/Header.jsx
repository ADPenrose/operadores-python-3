import VisuallyHidden from "../VisuallyHidden";
import { GitHub } from "react-feather";

import logoUrl from "../../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href="https://apaydev.xyz">
          <img className={styles.logo} src={logoUrl} alt="Logo" />
        </a>
        <div>
          <a href="#" className={styles.github}>
            <GitHub size={26} />
            <VisuallyHidden>See the source code</VisuallyHidden>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
