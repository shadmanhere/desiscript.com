import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import {
  FaArrowUp,
  FaReact,
  FaDatabase,
  FaScrewdriver,
  FaUsers,
} from "react-icons/fa";

import Contact from '../components/Contact'

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
  useEffect(() => {
    let goTopButton = document.getElementById("goTopButton");

    window.onscroll = function () {
      scrollFunction(goTopButton);
    };
  }, []);

  function scrollFunction(goTopButton: HTMLElement | null) {
    if (goTopButton) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        goTopButton.style.display = "block";
      } else {
        goTopButton.style.display = "none";
      }
    }
  }

  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
      <div className={styles.header}>
        <Head>
          <title>Home | Desi Script</title>
          <meta name="description" content="Full Stack Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#D3D3D3" />
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
        <section
          id="home"
          className={`${styles.home} flex flex-col justify-center items-center xs:h-full md:h-screen text-center py-5 xs:px-2`}
        >
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
      <section
        id="services"
        className={`${styles.services} xs:px-5 md:px-20 py-16`}
      >
        <h2 className="text-7xl font-bold antialiased">Services</h2>
        <p className="text-3xl my-4">
          I strive to provide quality web-based software and ensure great
          experiences for all users by:
        </p>
        <div className="flex justify-between items-center flex-wrap lg:mx-24 xs:flex-col lg:flex-row">
          <div
            className={`${styles.flipCard}  xs:w-full xs:h-44 md:w-5/12 lg:h-96`}
          >
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
                <p
                  className="text-2xl py-2"
                  style={{ background: "black", color: "white" }}
                >
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

          <div
            className={`${styles.flipCard} xs:w-full xs:h-44 md:w-5/12 lg:h-96`}
          >
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
                <p
                  className="text-2xl py-2"
                  style={{ background: "black", color: "white" }}
                >
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

          <div
            className={`${styles.flipCard} xs:w-full xs:h-44 md:w-5/12 lg:h-96`}
          >
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
                <p
                  className="text-2xl py-2"
                  style={{ background: "black", color: "white" }}
                >
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

          <div
            className={`${styles.flipCard} xs:w-full xs:h-44 md:w-5/12 lg:h-96`}
          >
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
                <p
                  className="text-2xl py-2"
                  style={{ background: "black", color: "white" }}
                >
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
      <section
        id="skills"
        className={`${styles.skills} xs:px-2 md:px-20 py-16`}
      >
        <div className="rounded-lg bg-neutral-100 py-12 xs:px-2 md:px-32 lg:px-52 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
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
              <FaDatabase className="mx-4 p-0 mt-0" size="38%" />
              <div className="flex flex-col">
                <h3 className="text-6xl mb-4">Back-end</h3>
                <p className="text-2xl">
                  Express, Laravel, RESTful database API creation and
                  documentation, PostgreSQL, MySQL, DB performace and
                  optimization, replication & migration.
                </p>
              </div>
            </div>

            <div className="flex items-start mt-10">
              <FaScrewdriver className="mx-4 p-0 mt-0" size="34%" />
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
              <FaUsers className="mx-4 p-0 mt-0" size="33%" />
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
      <section
        id="projects"
        className={`${styles.projects} xs:px-4 md:px-20 py-16`}
      >
        <h2 className="xs:text-5xl md:text-7xl font-bold antialiased">
          Highlighted Projects
        </h2>
        <div className="flex flex-wrap gap-6 justify-evenly my-9">
          {/* issue finder */}
          <div
            className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
          >
            <Image
              src="/images/projects/issuefinder.png"
              alt="Avatar"
              width="800"
              height="800"
              className={styles.image}
            />
            <h3
              className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
            >
              Issue Finder
            </h3>
            <div className={styles.overlay}>
              <div className={`${styles.overlayText} text-justify my-2`}>
                <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                  Issue finder
                </h3>
                <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <p className="my-4">
                  Makes easier open-source collaboration for new devs by
                  allowing them to search for beginner-friendly issues on
                  GitHub. Built with React and Redux, uses the GitHub API and
                  it&apos;s the work of me and other 5 devs. If you&apos;d like
                  to participate please feel free to fork the repository and
                  make a pull request!
                </p>
                <a
                  href="https://github.com/voscarmv/issue-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
                  duration-150 ease-in-out hover:bg-white hover:text-black
                  focus:border-neutral-800 focus:text-white focus:outline-none 
                  focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
                  dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
                  dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                    data-te-ripple-init
                  >
                    Code
                  </button>
                </a>
                <a
                  href="https://github-issue-finder.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
                  duration-150 ease-in-out hover:bg-white hover:text-black
                  focus:border-neutral-800 focus:text-white focus:outline-none 
                  focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
                  dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
                  dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                    data-te-ripple-init
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ends issue finder */}

          {/* learning path */}

          <div
            className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
          >
            <Image
              src="/images/projects/learningpath.png"
              alt="Avatar"
              width="800"
              height="800"
              className={styles.image}
            />
            <h3
              className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
            >
              Learning Path
            </h3>
            <div className={styles.overlay}>
              <div className={`${styles.overlayText} text-justify my-2`}>
                <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                  Learning Path
                </h3>
                <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <p className="my-4">
                  This project gives learners a clear path to follow to get
                  skilled in a particular domain.
                </p>
                <a
                  href="https://github.com/shadmanhere/learning-path"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
                  duration-150 ease-in-out hover:bg-white hover:text-black
                  focus:border-neutral-800 focus:text-white focus:outline-none 
                  focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
                  dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
                  dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                    data-te-ripple-init
                  >
                    Code
                  </button>
                </a>
                <a
                  href="https://learningpath.desiscript.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
                  duration-150 ease-in-out hover:bg-white hover:text-black
                  focus:border-neutral-800 focus:text-white focus:outline-none 
                  focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
                  dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
                  dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                    data-te-ripple-init
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ends leearning path */}

          {/* the drink bank  */}
          <div
            className={`${styles.imageContainer} xs:w-full md:w-8/12 lg:w-4/12 xs:h-96 lg:h-80`}
          >
            <Image
              src="/images/projects/drinkbank.png"
              alt="Avatar"
              width="800"
              height="800"
              className={styles.image}
            />
            <h3
              className={`${styles.imageCaption} text-white text-3xl font-bold w-full text-center`}
            >
              The Drink Bank
            </h3>
            <div className={styles.overlay}>
              <div className={`${styles.overlayText} text-justify my-2`}>
                <h3 className="mt-0 mb-2 text-3xl font-bold leading-tight text-white opacity-100">
                  The Drink Bank
                </h3>
                <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                <p className="my-4">Find your favorite drink here.</p>
                <a
                  href="https://github.com/shadmanhere/drink_bank"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
                  duration-150 ease-in-out hover:bg-white hover:text-black
                  focus:border-neutral-800 focus:text-white focus:outline-none 
                  focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
                  dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
                  dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                    data-te-ripple-init
                  >
                    Code
                  </button>
                </a>
                <a
                  href="https://xenodochial-liskov-3f1582.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="opacity-100 mr-2 inline-block rounded border-2 border-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white bg-black transition 
                  duration-150 ease-in-out hover:bg-white hover:text-black
                  focus:border-neutral-800 focus:text-white focus:outline-none 
                  focus:ring-0 active:border-white active:text-white dark:border-neutral-900 dark:text-white 
                  dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-white dark:focus:border-neutral-900 
                  dark:focus:text-white dark:active:border-neutral-900 dark:active:text-white"
                    data-te-ripple-init
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ends drink bank */}
        </div>
      </section>
      {/* About us  */}
      <section id="about" className={`${styles.about} xs:px-4 md:px-20 py-16`}>
        <h2 className="xs:text-5xl md:text-7xl font-bold antialiased py-16">About Me</h2>
        <p className="rounded border-8 py-16 px-6 text-2xl shadow-2xl">
          Passionate about creating beautiful and functional websites. I have a
          background in engineering. I am open for a full-time position in a
          socially responsible company that values diversity and inclusion and
          is committed to improve our world through technology.
        </p>
      </section>

      <Contact />
      
      <button
        onClick={() => goToTop()}
        id="goTopButton"
        className={styles.goToTop}
        title="Go to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
}
