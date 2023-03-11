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

import Contact from "../components/Contact";
import Footer from "@/components/Footer";

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
              <li className="underline decoration-double underline-offset-8">
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
            Hi! I&apos;m Shadman Ali and I can assist you in developing your
            upcoming product, feature, or website. Let&apos;s talk!
          </p>
          <div className="mb-6 xs:justify-end xs:mt-1 md:mt-1 flex md:justify-center float-right">
            <a
              href="https://www.facebook.com/desiscript"
              target="_blank"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            <a
              href="https://twitter.com/shadmanhere"
              target="_blank"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            {/* <a
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a> */}

            {/* <a
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a> */}

            <a
              href="https://www.linkedin.com/in/shadmanhere/"
              target="_blank"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>

            <a
              href="https://github.com/shadmanhere"
              target="_blank"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <a href="#projects">
            <button className={`${styles.button} px-4 py-2`}>
              See My Work
            </button>
          </a>
        </section>
      </div>
      <section
        id="services"
        className={`${styles.services} xs:px-4 md:px-20 py-16`}
      >
        <h2 className="xs:text-5xl md:text-7xl font-bold antialiased">
          Services
        </h2>
        <p className="text-3xl my-4">
          My objective is to deliver high-quality web-based software and ensure
          exceptional user experiences through:
        </p>
        <div className="flex justify-evenly gap-6 flex-wrap">
          <div
            className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
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
                <p className="xs:text-xl md:text-2xl xs:my-2 md:my-4">
                  To produce high-quality mockups and prototypes, I collaborate
                  with other stakeholders to discuss the design, functionality,
                  and requirements of a website or UI. In doing so, I ensure
                  that the graphic standards and brand consistency are of a
                  superior quality.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
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
                <p className="xs:text-base md:text-xl xs:my-2 md:my-4">
                  My responsibilities include developing and managing testing
                  schedules in client-server environments, ensuring that the
                  content is displayed correctly across various browsers and
                  devices while maintaining the security and functionality of
                  the site. Additionally, I model data and design databases to
                  ensure optimal performance.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
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
                <p className="xs:text-xl md:text-2xl xs:my-2 md:my-4">
                  Designing user interfaces for web applications, using standard
                  HTML/CSS practices and technologies. Creating visual elements
                  that users see and interact with in web applications.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.flipCard} xs:w-full md:w-8/12 xs:h-72 lg:w-4/12 lg:h-82`}
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
                  className="text-xl py-2"
                  style={{ background: "black", color: "white" }}
                >
                  Hosting Service Web Analytics
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p className="xs:text-xl md:text-2xl xs:my-2 md:my-4">
                  My role involves designing user interfaces for web
                  applications using standard HTML/CSS technologies and
                  practices. This includes developing the visual elements that
                  users interact with within web applications.
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
              <FaReact className="mx-4 p-0 mt-0" size="67%" />
              <div className="flex flex-col flex-wrap">
                <h3 className="text-6xl mb-4">Front-end</h3>
                <p className="text-2xl">
                  My proficiencies include HTML5/CSS3, JavaScript, ES6 syntax,
                  DOM manipulation, as well as working with frameworks such as
                  Express, Next.js, and React. I am also experienced in Webpack,
                  Redux for state management, Thunks, and utilizing CSS
                  frameworks such as Bootstrap and TailwindCSS.
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
                  Extensive experience with remote and asynchronous
                  collaboration, including standup meetings, pair programming,
                  unit testing (TDD, BDD), and code reviews.
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
        <div className="flex flex-wrap gap-6 gap justify-evenly my-9">
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
                <p className="my-2 xs:text-sm md:text-sm">
                  Created a React-Redux tool that streamlines open-source
                  collaboration for novice developers by facilitating the search
                  for beginner-friendly issues on GitHub. Developed in
                  collaboration with five other developers, the tool employs the
                  GitHub API. To contribute, kindly fork the repository and
                  submit a pull request.
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
                  The application is a full-stack project built using ReactJS,
                  TypeScript, and ExpressJS. Its purpose is to provide learners
                  with a structured and clear path to develop expertise in a
                  specific domain.
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
                <p className="my-4">
                  This React application consumes the API from&nbsp;
                  <a
                    className="underline underline-offset-2"
                    href="https://punkapi.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    punkapi
                  </a>{" "}
                  and beautifully displays a list of drinks. It includes an
                  infinite scroll feature, advanced search capabilities, and the
                  ability to mark favorite items.
                </p>
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
        <h2 className="xs:text-5xl md:text-7xl font-bold antialiased py-16">
          About Me
        </h2>
        <p className="rounded border-8 py-16 px-6 text-2xl shadow-2xl">
          Passionate about developing websites that are both visually appealing
          and highly functional. With a background in engineering, I am
          currently seeking a full-time position with a socially responsible
          company that values diversity and inclusion and is committed to
          leveraging technology for positive change.
        </p>
      </section>

      <Contact />
      <Footer />

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
