import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

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
                Desi Script
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
      <main className={styles.main}>
        <section id="home" className={styles.home}>
          <p>Let&apos;s build your next project</p>

          <TextTransition className={styles.animatedText} springConfig={presets.gentle}>
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
      </main>
    </div>
  );
}
