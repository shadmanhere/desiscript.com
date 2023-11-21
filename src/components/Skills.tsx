import { FaReact, FaDatabase, FaScrewdriver, FaUsers } from "react-icons/fa";
import styles from "@/styles/Home.module.css";

const Skills = ({
  frontEndDescription,
  backEndDescription,
  designerDescription,
  agileDescription,
}: {
  frontEndDescription:string;
  backEndDescription:string;
  designerDescription:string;
  agileDescription:string;
}) => {
  return (
    <section id="skills" className={`${styles.skills} xs:px-2 md:px-20 py-16`}>
      <div className="rounded-lg bg-neutral-100 py-12 xs:px-2 md:px-32 lg:px-52 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
        <div className="flex flex-col xs:px-2 md:px-6 justify-content-center flex-wrap">
          <h2 className="text-5xl font-bold antialiased">
            Skills and Competencies
          </h2>

          <div className="flex items-start mt-10">
            <FaReact className="mx-4 p-0 mt-0" size="50%" />
            <div className="flex flex-col flex-wrap">
              <h3 className="text-4xl font-bold mb-4">Front-end</h3>
              <p className="text-xl">{frontEndDescription}</p>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <FaDatabase className="mx-4 p-0 mt-0" size="48%" />
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold mb-4">Back-end</h3>
              <p className="text-xl">{backEndDescription}</p>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <FaScrewdriver className="mx-4 p-0 mt-0" size="33%" />
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold mb-4">Design & Tooling</h3>
              <p className="text-xl">{designerDescription}</p>
            </div>
          </div>

          <div className="flex items-start mt-10">
            <FaUsers className="mx-4 p-0 mt-0" size="27%" />
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold mb-4">Agile / XP</h3>
              <p className="text-xl">{agileDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
