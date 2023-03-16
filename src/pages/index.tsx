import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

import { FaArrowUp } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Welcome from "@/components/Weclome";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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

        <Navbar />

        <Welcome />
      </div>
      <Services />
      <Skills />
      <Projects />
      <About />

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
