import { useState } from "react";
import IconExpress from "../../assets/IconExpress";
import IconGithub from "../../assets/IconGitHub";
import IconBxlJavascript from "../../assets/IconJS";
import IconJest from "../../assets/IconJest";
import IconNode from "../../assets/IconNode";
import IconBxlReact from "../../assets/IconReact";
import styles from "../../pages/Home/Home.module.css";

export default function Tecnologies() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className={styles.section}>
      <h3>Tecnologias Utilizadas</h3>
      <div className={styles.cardWrapper}>
        <IconBxlReact
          className={styles.card}
          onMouseEnter={() => setHoveredTech("React")}
          onMouseLeave={() => setHoveredTech(null)}
        />
        <IconBxlJavascript
          className={styles.card}
          onMouseEnter={() => setHoveredTech("JavaScript")}
          onMouseLeave={() => setHoveredTech(null)}
        />
        <IconNode
          className={styles.card}
          onMouseEnter={() => setHoveredTech("Node.js")}
          onMouseLeave={() => setHoveredTech(null)}
        />
        <IconExpress
          className={styles.card}
          onMouseEnter={() => setHoveredTech("Express")}
          onMouseLeave={() => setHoveredTech(null)}
        />
        <IconJest
          className={styles.card}
          onMouseEnter={() => setHoveredTech("Jest")}
          onMouseLeave={() => setHoveredTech(null)}
        />
        <IconGithub
          className={styles.card}
          onMouseEnter={() => setHoveredTech("GitHub")}
          onMouseLeave={() => setHoveredTech(null)}
        />
      </div>
      {hoveredTech && <div className={styles.techInfo}>{hoveredTech}</div>}
    </div>
  );
}
