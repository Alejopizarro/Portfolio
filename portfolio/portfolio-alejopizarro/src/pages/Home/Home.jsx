import { useRef } from "react";
import linkedin from "../../assets/linkedin.png";
import AboutMe from "../../components/AboutMe/AboutMe";
import Tecnologies from "../../components/Tecnologies/Tecnologies";
import styles from "./Home.module.css";
import Portfolio from "../../components/Portfolio/Portfolio";
import Experiences from "../../components/Experiences/Experiences";

export default function Home() {
  const aboutMeRef = useRef(null);
  const tecnologiesRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTecnologies = () => {
    tecnologiesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main className={styles.mainContainer}>
        <img src={linkedin} alt="alejopizarro-cv" />
        <h1>Alejo Pizarro</h1>
        <h3>Desarrollador Full Stack</h3>
        <div className={styles.scrollButtons}>
          <button onClick={scrollToTecnologies}>Tecnologías</button>
          <button onClick={scrollToPortfolio}>Proyectos</button>
          <button onClick={scrollToAboutMe}>Sobre mí</button>
          <button onClick={scrollToExperience}>Experiencia</button>
        </div>
      </main>
      <hr />
      <section ref={tecnologiesRef}>
        <Tecnologies />
      </section>
      <hr />
      <section className={styles.sectionGrid} ref={portfolioRef}>
        <Portfolio />
      </section>
      <hr />
      <section ref={aboutMeRef}>
        <AboutMe />
      </section>
      <hr />
      <section className={styles.section} ref={experienceRef}>
        <Experiences />
      </section>
    </>
  );
}
