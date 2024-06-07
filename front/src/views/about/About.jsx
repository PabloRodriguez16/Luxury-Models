import styles from "./About.module.css"

export default function About() {
  return (
    <div>
    <div className={styles.div}>
    <h1 className={styles.h1}>Sobre el Proyecto</h1>

  <section>
    <h2 className={styles.h2}>Back-End</h2>
    <p className={styles.subtitle}>El back-end de este proyecto está construido utilizando las siguientes tecnologías:</p>
    <h3 className={styles.h3}>Typescript</h3>
    <p>Typescript es un lenguaje de programación que extiende JavaScript añadiendo tipado estático. Esto ayuda a detectar errores durante la fase de desarrollo y a mejorar la legibilidad del código.</p>
    <h3 className={styles.h3}>Express</h3>
    <p>Express es un framework de Node.js que facilita la creación de aplicaciones web y APIs. Es minimalista y flexible, lo que lo hace ideal para proyectos de cualquier tamaño.</p>
    <h3 className={styles.h3}>SQL</h3>
    <p>SQL (Structured Query Language) es un lenguaje de programación utilizado para administrar bases de datos relacionales. Permite realizar consultas y manipular datos de manera eficiente.</p>
    <h3 className={styles.h3}>TypeORM</h3>
    <p>TypeORM es un ORM (Object-Relational Mapping) para TypeScript y JavaScript que simplifica el acceso y la manipulación de datos en bases de datos relacionales.</p>
  </section>

  <section>
    <h2 className={styles.h2}>Front-End</h2>
    <p className={styles.subtitle}>El front-end de este proyecto está construido utilizando las siguientes tecnologías:</p>
    <h3  className={styles.h3}>React</h3>
    <p>React es una biblioteca de JavaScript para construir interfaces de usuario. Utiliza un enfoque basado en componentes para crear interfaces declarativas y reutilizables.</p>
    <h3  className={styles.h3}>React Redux</h3>
    <p>React Redux es una biblioteca que se utiliza junto con React para administrar el estado de la aplicación de manera eficiente. Facilita la gestión del estado compartido entre componentes.</p>
    <h3  className={styles.h3}>CSS</h3>
    <p>CSS se utilizó en este proyecto para darle estilos a los diferentes componentes de este proyecto.</p>
  </section>
    </div>
    </div>
  )
}
