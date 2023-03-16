import styles from "@/styles/Home.module.css";

const About = () => {
  return (
    <section id="about" className={`${styles.about} xs:px-4 md:px-20 py-16`}>
      <h2 className="xs:text-5xl md:text-7xl font-bold antialiased py-16">
        About Me
      </h2>
      <p className="rounded border-8 py-16 px-6 text-2xl shadow-2xl">
        Passionate about developing websites that are both visually appealing
        and highly functional. With a background in engineering, I am currently
        seeking a full-time position with a socially responsible company that
        values diversity and inclusion and is committed to leveraging technology
        for positive change.
      </p>
    </section>
  );
};
export default About;
