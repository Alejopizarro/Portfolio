import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import IconGithub from "../../assets/IconGitHub";
import IconLinkedin from "../../assets/IconLinkedin";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.iconContainer}>
        <Link to="https://github.com/Alejopizarro">
          <IconGithub className={styles.icon} />
        </Link>
        <Link to="https://www.linkedin.com/in/alejo-pizarro-1b2357198/">
          <IconLinkedin className={styles.icon} />
        </Link>
      </div>

      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
