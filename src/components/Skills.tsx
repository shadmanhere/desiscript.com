import { FaReact, FaDatabase, FaScrewdriver, FaUsers } from "react-icons/fa";
import styles from "@/styles/Home.module.css";

const Skills = () => {
  return (
    <section id="skills" className={`${styles.skills} xs:px-2 md:px-20 py-16`}>
      <div className="rounded-lg bg-neutral-100 py-12 xs:px-2 md:px-32 lg:px-52 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
        <div className="flex flex-col xs:px-2 md:px-6 justify-content-center flex-wrap">
          <h2 className="xs:text-5xl md:text-7xl font-bold antialiased">
            Skills and Competencies
          </h2>

          <div className="flex items-start mt-10">
            <FaReact className="mx-4 p-0 mt-0" size="67%" />
            <div className="flex flex-col flex-wrap">
              <h3 className="text-6xl mb-4">Front-end</h3>
              <p className="text-2xl">
                My proficiencies include HTML5/CSS3, JavaScript, ES6 syntax, DOM
                manipulation, as well as working with frameworks such as
                Express, Next.js, and React. I am also experienced in Webpack,
                Redux for state management, Thunks, and utilizing CSS frameworks
                such as Bootstrap and TailwindCSS.
              </p>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <FaDatabase className="mx-4 p-0 mt-0" size="63%" />
            <div className="flex flex-col">
              <h3 className="text-6xl mb-4">Back-end</h3>
              <p className="text-2xl">
                I have experience working with Express, Next.js, and Laravel
                frameworks, creating RESTful database APIs, and documenting
                them. Additionally, I am knowledgeable in PostgreSQL and MySQL
                databases, database performance and optimization, as well as
                replication and migration.
              </p>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <FaScrewdriver className="mx-4 p-0 mt-0" size="42%" />
            <div className="flex flex-col">
              <h3 className="text-6xl mb-4">Design & Tooling</h3>
              <p className="text-2xl">
                My skillset includes Object-Oriented Programming, SOLID
                principles, Design Patterns, Test-Driven Development, and
                proficiency in Git, Github, Heroku, Netlify, Vercel, and
                GitHub-flow/git-flow.
              </p>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <FaUsers className="mx-4 p-0 mt-0" size="33%" />
            <div className="flex flex-col">
              <h3 className="text-6xl mb-4">Agile / XP</h3>
              <p className="text-2xl">
                Extensive experience with remote and asynchronous collaboration,
                including standup meetings, pair programming, unit testing (TDD,
                BDD), and code reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
