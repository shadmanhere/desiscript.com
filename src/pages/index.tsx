import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
        <section id="home" className={styles.home}>
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
      <section id="services" className={styles.services}>
        <h2>Services</h2>
        <p>
          I strive to provide quality web-based software and ensure great
          experiences for all users by:
        </p>
        <div className={styles.servicesContainer}>
          <div className={styles.flipCard}>
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
                <p style={{ background: "black", color: "white" }}>
                  Front End Development
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p>
                  Collaborating with other stakeholders and discussing the
                  needs, design, and functionality of a website or UI for
                  creating quality mockups and prototypes; ensuring high-quality
                  graphic standards and brand consistency.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.flipCard}>
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
                <p style={{ background: "black", color: "white" }}>
                  Back End Development
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p>
                  Developing and overseeing testing schedules in client-server
                  environment, addressing various browsers and devices to ensure
                  that content is displayed as intended and that the site is
                  functional and secure, modelling data and designing databases.
                </p>
              </div>
            </div>
          </div>
      
      
          <div className={styles.flipCard}>
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
                <p style={{ background: "black", color: "white" }}>
                  Web Design
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p>
                  Designing user interfaces for web applications, using standard
                  HTML/CSS practices and technologies. Creating visual elements
                  that users see and interact with in web applications.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.flipCard}>
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
                <p style={{ background: "black", color: "white" }}>
                  Hosting Service Web Analytics
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <p>
                  Providing hosting services for web applications and web
                  analytics to track the performance of the website and its
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button onClick={() => topFunction()} id="myBtn" title="Go to top">Top</button>
    </>
  );
}
