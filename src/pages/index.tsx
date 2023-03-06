import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FaReact, FaDatabase, FaScrewdriver, FaUsers } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const TEXTS = [
  "Full Stack Developer",
  "Back End Developer",
  "Front End Developer",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Head>
          <title>Home | Desi Script</title>
          <meta name="description" content="Full Stack Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <nav className={styles.navitems}>
            <ul>
              <li>
                <Link style={{ fontSize: "1.8rem" }} href="/">
                  <FontAwesomeIcon icon={faCode} /> Desi Script
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="home" className={`${styles.home} flex flex-col justify-center items-center xs:h-full md:h-screen text-center py-5`}>
          <h1>Let&apos;s build your next project</h1>

          <TextTransition
            className={styles.animatedText}
            springConfig={presets.gentle}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>

          <p>
            Hi! My name is Shadman Ali and I can help you create your future
            product, feature or website. Let&apos;s talk!
          </p>
          <a href="#contact">
            <button className={styles.button}>Contact</button>
          </a>
        </section>
      </div>
      <section id="services" className={`${styles.services} xs:px-5 md:px-20 py-16`}>
        <h2 className="text-7xl font-bold antialiased">Services</h2>
        <p className="text-3xl my-4">
          I strive to provide quality web-based software and ensure great
          experiences for all users by:
        </p>
        <div className="flex justify-between items-center flex-wrap lg:mx-24 xs:flex-col lg:flex-row">
          <div className={`${styles.flipCard}  xs:w-full xs:h-44 md:w-5/12 lg:h-96`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <Image
                  src="/frontend.jpg"
                  alt="Avatar"
                  width="300"
                  height="300"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <p className="text-2xl py-2" style={{ background: "black", color: "white" }}>
                  Front End Development
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p className="xs:text-base md:text-3xl xs:my-2 md:my-4">
                  Collaborating with other stakeholders and discussing the
                  needs, design, and functionality of a website or UI for
                  creating quality mockups and prototypes; ensuring high-quality
                  graphic standards and brand consistency.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.flipCard} xs:w-full xs:h-44 md:w-5/12 lg:h-96`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <Image
                  src="/backend.jpg"
                  alt="Avatar"
                  width="300"
                  height="300"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <p className="text-2xl py-2" style={{ background: "black", color: "white" }}>
                  Back End Development
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p className="xs:text-base md:text-3xl xs:my-2 md:my-4">
                  Developing and overseeing testing schedules in client-server
                  environment, addressing various browsers and devices to ensure
                  that content is displayed as intended and that the site is
                  functional and secure, modelling data and designing databases.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.flipCard} xs:w-full xs:h-44 md:w-5/12 lg:h-96`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <Image
                  src="/webdesign.png"
                  alt="Avatar"
                  width="300"
                  height="300"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <p className="text-2xl py-2" style={{ background: "black", color: "white" }}>
                  Web Design
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p className="xs:text-base md:text-3xl xs:my-2 md:my-4">
                  Designing user interfaces for web applications, using standard
                  HTML/CSS practices and technologies. Creating visual elements
                  that users see and interact with in web applications.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.flipCard} xs:w-full xs:h-44 md:w-5/12 lg:h-96`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <Image
                  src="/hosting.png"
                  alt="Avatar"
                  width="300"
                  height="300"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <p className="text-2xl py-2" style={{ background: "black", color: "white" }}>
                  Hosting Service Web Analytics
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p className="xs:text-base md:text-3xl xs:my-2 md:my-4">
                  Providing hosting services for web applications and web
                  analytics to track the performance of the website and its
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className={`${styles.skills} xs:px-2 md:px-20 py-16`}>
        <div className="rounded-lg bg-neutral-100 py-12 xs:px-2 md:px-32 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
          <div className="flex flex-col xs:px-2 md:px-6 justify-content-center flex-wrap">
            <h2 className="xs:text-5xl md:text-7xl font-bold antialiased">
              Skills and Competencies
            </h2>

            <div className="flex items-start mt-10">
              <FaReact className="mx-4 p-0 mt-0" size="45%" />
              <div className="flex flex-col flex-wrap">
                <h3 className="text-6xl mb-4">Front-end</h3>
                <p className="text-2xl">
                  HTML/CSS3, JavaScript, ES6 Syntax, DOM manipulation, Ruby,
                  React framework, Webpack, Redux for state management, Thunks,
                  CSS frameworks (Bootstrap, TailwindCSS).
                </p>
              </div>
            </div>

            <div className="flex items-start mt-10">
              <FaDatabase className="mx-4 p-0 mt-0" size="49%" />
              <div className="flex flex-col">
                <h3 className="text-6xl mb-4">Back-end</h3>
                <p className="text-2xl">
                  Ruby on Rails, RESTful database API creation and
                  documentation, PostgreSQL, MySQL, T-SQL, DB performace and
                  optimization, replication & migration. Standford certificate
                  in Advanced Topics in SQL.
                </p>
              </div>
            </div>

            <div className="flex items-start mt-10">
              <FaScrewdriver className="mx-4 p-0 mt-0" size="31%" />
              <div className="flex flex-col">
                <h3 className="text-6xl mb-4">Design & Tooling</h3>
                <p className="text-2xl">
                  Object-Oriented Programming, SOLID, Design Patterns,
                  TestDriven Development, Git, Github, Heroku, Netlify, Vercel,
                  GitHub-flow/git-flow.
                </p>
              </div>
            </div>

            <div className="flex items-start mt-10">
              <FaUsers className="mx-4 p-0 mt-0" size="30%" />
              <div className="flex flex-col">
                <h3 className="text-6xl mb-4">Agile / XP</h3>
                <p className="text-2xl">
                  Experienced with async & remote collaboration, Standup
                  meetings, Pair Programming, Unit-testing (TDD, BDD) & Code
                  Reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="xs:px-4 md:px-20 py-16">
        <h2 className="xs:text-5xl md:text-7xl font-bold antialiased">Highlighted Projects</h2>
      </section>
    </>
  );
}
