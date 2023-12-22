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
import GoToTop from "../GoToTop";

const inter = Inter({ subsets: ["latin"] });

export default function PersonalPortfolio() {
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
          <title>Home | Shadman</title>
          <meta name="description" content="Full Stack Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#D3D3D3" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar brandUrl="/" content="Shadman" />

        <Welcome
          animatedTexts={[
            "Full Stack Developer",
            "Back End Developer",
            "Front End Developer",
          ]}
          description="Hi! I'm Shadman Ali and I can assist you in developing your
          upcoming product, feature, or website. Let's talk!"
          buttonTitle="See My Work"
        />
      </div>
      <Services
        description="My objective is to deliver high-quality web-based software and ensure exceptional user experiences through:"
        frontEndDescription="To produce high-quality mockups and prototypes, I collaborate
        with other stakeholders to discuss the design, functionality,
        and requirements of a website or UI. In doing so, I ensure that
        the graphic standards and brand consistency are of a superior
        quality."
        backEndDescription="My responsibilities include developing and managing testing
        schedules in client-server environments, ensuring that the
        content is displayed correctly across various browsers and
        devices while maintaining the security and functionality of the
        site. Additionally, I model data and design databases to ensure
        optimal performance."
        webDesignDescription="Designing user interfaces for web applications, using standard
        HTML/CSS practices and technologies. Creating visual elements
        that users see and interact with in web applications."
        hostingDescription="My role involves designing user interfaces for web applications
        using standard HTML/CSS technologies and practices. This
        includes developing the visual elements that users interact with
        within web applications."
      />
      <Skills
        frontEndDescription="My proficiencies include HTML5/CSS3, JavaScript, TypeScript, ES6 syntax, DOM
       manipulation, as well as working with frameworks such as
       Express, Next.js, and React. I am also experienced in Webpack,
       Redux for state management, Thunks, and utilizing CSS frameworks
       such as Bootstrap and TailwindCSS."
        backEndDescription="I have experience working with Express, Next.js, and Laravel
       frameworks, creating RESTful database APIs, and documenting
       them. Additionally, I am knowledgeable in PostgreSQL and MySQL
       databases, database performance and optimization, as well as
       replication and migration."
        designerDescription="My skillset includes Object-Oriented Programming, SOLID
       principles, Design Patterns, Test-Driven Development, and
       proficiency in Git, Github, Heroku, Netlify, Vercel, and
       GitHub-flow/git-flow."
        agileDescription="Extensive experience with remote and asynchronous collaboration,
       including standup meetings, pair programming, unit testing (TDD,
       BDD), and code reviews."
      />
      <Projects />
      <About
        title="About Me"
        aboutDescription="As a skilled full stack web developer, I am passionate about creating
      visually stunning websites that offer superior functionality. With a
      background in engineering, I am currently open to full-time and contract
      positions with socially responsible companies that value diversity and
      inclusion and are committed to using technology to create positive
      change. I am driven by the desire to leverage my skills to develop
      websites that provide an exceptional user experience and promote
      engagement. Whether you are looking for a full-time web developer to
      join your team or seeking a contractor to complete a project, I would be
      delighted to contribute my expertise and help bring your vision to life."
      />

      <Contact description="I am always open to exploring new projects and opportunities. Therefore,
        if you would like to have a conversation, please don't hesitate to reach
        out to me." />
      <Footer title="Shadman" />

      <GoToTop />
    </>
  );
}