import styles from "../../pages/Home/Home.module.css";
// import aboutme from "../../assets/AboutMe.png";

export default function AboutMe() {
  return (
    <div className={styles.section}>
      <h3>Sobre Mí</h3>
      <ul className={styles.aboutMeWrapper}>
        <li>
          Recien egresado como Desarrollador Full Stack de Aplicaciones Web en
          Nuclio Digital School.
        </li>
        <li>Nacido en argentina, actualmente viviendo en Málaga, España.</li>
        <li>
          🎆Positivo. Porque soy así, siempre veo el vaso medio lleno. Es el
          motor que tengo para dar cada día lo mejor de mí.{" "}
        </li>
        <li>
          💡¿Creativo? Me lo han dicho, mi espíritu siempre me impulsa a
          encontrar soluciones creativas a los problemas, pero finalmente no sé
          si es la creatividad o es ese impulso a siempre querer hacer algo
          diferente.
        </li>
        <li>
          ⚽Al final del día, disfruto de la buena música, de los buenos amigos
          y me convierto en otra persona con el futbol.
        </li>
      </ul>
    </div>
  );
}
