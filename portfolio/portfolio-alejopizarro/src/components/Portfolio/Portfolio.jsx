import styles from "./Portfolio.module.css";
import HealthApp from "../../assets/HealthApp.png";
import calculadoraReact from "../../assets/calculadoraReact.png";
import todoApp from "../../assets/todoApp.png";

export default function Portfolio() {
  return (
    <div className={styles.projectWrapper}>
      <h3>Proyectos Realizados</h3>
      <div className={styles.project}>
        <img src={HealthApp} alt="project-healthapp-fullstack" />
        <h3>Health App</h3>
        {/* <p className={styles.description}>
          Health App es una aplicación web que permite a los usuarios
          registrarse y acceder a información, publicar e interactuar con
          recetas saludables. Dentro de la misma estos usuarios tendrán la
          posibilidad de buscar recetas filtrando por categorías, dificultad,
          tiempo de preparación o nombre de la misma. Adicionalmente, los
          usuarios podrán seleccionar como favoritas, puntuar y opinar sobre las
          recetas. También tendrán la posibilidad de seguir a sus chefs
          favoritos y comunicarse a través de un chat comunitario en tiempo
          real.
        </p>
        <h5>Tecnologias Aplicadas</h5> */}
        <ul className={styles.tecnologiesWrapper}>
          <li>NodeJS + Express para el backend.</li>
          <li>MongoDB + Mongoose para la BBDD.</li>
          <li>JSON Web Tokens (JWT) para la autenticación.</li>
          <li>React.js para el frontend.</li>
          <li>Socket.io para la mensajería en tiempo real.</li>
          <li>
            Cloudinary para el almacenamiento y gestión de archivos multimedia
            en la nube.
          </li>
          <li>
            Jest, MongoDB Memory Server y Supertest para el testeo unitario.
          </li>
          <li>Vite.js para el build y despliegue</li>
          <li>
            ANTDesign, Headless UI y React Select para la creacion de
            componentes visuales.
          </li>
        </ul>
      </div>
      <div className={styles.project}>
        <img src={calculadoraReact} alt="project-calculadora-react" />
        <h3>Calculadora</h3>
        <ul className={styles.tecnologiesWrapper}>
          <li>React.js para el frontend.</li>
          <li>JavaScript para la logica de calculo</li>
          <li>Vite.js para el build y despliegue</li>
        </ul>
      </div>

      <div className={styles.project}>
        <img src={todoApp} alt="project-todo-app" />
        <h3>To Do App</h3>
        <ul className={styles.tecnologiesWrapper}>
          <li>NodeJS + Express para el backend.</li>
          <li>MongoDB + Mongoose para la BBDD.</li>
          <li>JSON Web Tokens (JWT) para la autenticación.</li>
          <li>React.js para el frontend.</li>
          <li>Vite.js para el build y despliegue</li>
          <li>
            Taildwind CSS para la creacion de los estilos y componentes visuales
          </li>
        </ul>
      </div>
    </div>
  );
}
